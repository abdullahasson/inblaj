// src/app/page.tsx
import DawnOverlay from '../components/DawnOverlay';
import Hero from '../components/Hero';


export default function Home() {
  return (
    <div className="bg-darker text-light min-h-screen transition-colors duration-8000 ease-out">
      <DawnOverlay />
      <Hero />
    </div>
  );
}