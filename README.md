# Portfolio Website

Portfolio website modern yang terinspirasi dari desain [Brittany Chiang](https://brittanychiang.com/). Dibangun dengan React, TypeScript, dan Tailwind CSS untuk menampilkan pengalaman, proyek, dan informasi tentang developer.

## ✨ Fitur

- 🎨 **Desain Modern** - UI/UX yang clean dan modern dengan animasi halus
- 📱 **Responsive** - Fully responsive untuk semua ukuran layar
- 🎯 **Interactive** - Spotlight effect yang mengikuti cursor mouse
- 🚀 **Fast** - Dibangun dengan Vite untuk performa optimal
- ♿ **Accessible** - Mengikuti best practices untuk aksesibilitas
- 🎭 **Dark Mode Ready** - Siap untuk implementasi dark mode

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Icons**: Lucide React

## 📦 Instalasi

1. Clone repository ini:
```bash
git clone https://github.com/potydev/brittany-chiang-clone.git
cd brittany-chiang-clone
```

2. Install dependencies:
```bash
npm install
# atau
bun install
```

3. Jalankan development server:
```bash
npm run dev
# atau
bun dev
```

4. Buka browser di `http://localhost:8080`

**Note:** Aplikasi dikonfigurasi untuk berjalan di port 8080 (sesuai `vite.config.ts`)

## 🚀 Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm run build:dev` - Build untuk development
- `npm run preview` - Preview build production
- `npm run lint` - Menjalankan ESLint

## 🐳 Docker

### Build Docker Image

```bash
docker build -t portfolio-website .
```

### Run Docker Container

```bash
docker run -d -p 8080:8080 --name portfolio portfolio-website
```

Aplikasi akan berjalan di `http://localhost:8080`

**Penjelasan:**
- `-p 8080:8080` = mapping port 8080 di host ke port 8080 di dalam container
- `-d` = run di background (detached mode)
- `--name portfolio` = nama container

### Stop dan Remove Container

```bash
docker stop portfolio
docker rm portfolio
```

### Remove Docker Image

```bash
docker rmi portfolio-website
```

## 📁 Struktur Project

```
brittany-chiang-clone/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── ExperienceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Sidebar.tsx
│   │   └── ...
│   ├── data/           # Data untuk experience & projects
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── lib/            # Utility functions
│   └── App.tsx         # Main App component
├── package.json
└── vite.config.ts
```

## 🎨 Kustomisasi

### Mengubah Data Portfolio

Edit file di folder `src/data/`:
- `experience.ts` - Data pengalaman kerja
- `projects.ts` - Data proyek

### Mengubah Styling

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Gunakan Tailwind classes langsung di komponen

### Menambahkan Section Baru

1. Tambahkan section baru di `src/pages/Index.tsx`
2. Update `useActiveSection` hook dengan id section baru
3. Tambahkan link di `Sidebar.tsx` jika diperlukan

## 📝 Lisensi

Proyek ini dibuat untuk tujuan pembelajaran dan portfolio pribadi.

## 🙏 Credits

- Desain terinspirasi dari [Brittany Chiang](https://brittanychiang.com/)
- UI Components dari [shadcn/ui](https://ui.shadcn.com/)
- Font: [Inter](https://rsms.me/inter/)

## 📧 Kontak

Untuk pertanyaan atau kolaborasi, silakan hubungi melalui:
- GitHub: [@potydev](https://github.com/potydev)

---

Dibuat dengan ❤️ menggunakan React dan Tailwind CSS

