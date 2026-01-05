interface TechBadgeProps {
  label: string;
}

const TechBadge = ({ label }: TechBadgeProps) => {
  return (
    <li className="list-none">
      <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
        {label}
      </div>
    </li>
  );
};

export default TechBadge;
