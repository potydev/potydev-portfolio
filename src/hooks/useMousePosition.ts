import { useEffect, useRef } from "react";

const useMousePosition = () => {
  const lastMouseEventRef = useRef<MouseEvent | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Get the spotlight element to check if it's fixed or absolute
      const spotlight = document.querySelector('.spotlight') as HTMLElement;
      
      if (!spotlight) {
        // Fallback: use viewport coordinates
        document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
        return;
      }

      // Check if element is fixed or absolute using computed styles
      const computedStyle = window.getComputedStyle(spotlight);
      const isFixed = computedStyle.position === 'fixed';
      
      if (isFixed) {
        // For fixed positioning: use viewport coordinates (clientX/clientY)
        // This works correctly even during scroll because fixed elements are relative to viewport
        document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
      } else {
        // For absolute positioning: calculate position relative to parent container
        // Get the parent container (the one with class "relative")
        const parentContainer = spotlight.parentElement;
        
        if (parentContainer) {
          const rect = parentContainer.getBoundingClientRect();
          // Calculate mouse position relative to parent container
          // getBoundingClientRect() gives viewport-relative position, so we subtract the offset
          // This correctly accounts for scroll because rect changes as we scroll
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          document.documentElement.style.setProperty("--mouse-x", `${x}px`);
          document.documentElement.style.setProperty("--mouse-y", `${y}px`);
        } else {
          // Fallback: use viewport coordinates
          document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
          document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Store the event for scroll handler
      lastMouseEventRef.current = e;
      updateMousePosition(e);
    };

    // Handle scroll to update position when scrolling
    // This is crucial for absolute positioning because the parent container moves during scroll
    const handleScroll = () => {
      if (lastMouseEventRef.current) {
        updateMousePosition(lastMouseEventRef.current);
      }
    };

    // Listen on document to catch all mouse movements
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useMousePosition;
