/* menus */
import CuverdAwwards from '@/components/menus/curverd/CuverdAwwards';
import { NavColors } from '@/components/nav/NavColors';
import ParallaxText from '@/components/parallax/ParallaxText';
export default function Home() {
  return (
    <main className='items-center justify-center w-full h-screen bg-black/20'>
      {/* <CuverdAwwards /> */}
      {/* <NavColors /> */}
      <ParallaxText />
    </main>
  );
}
