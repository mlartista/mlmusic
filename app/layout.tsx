import Sidebar from '@/components/Sidebar';
import Player from '@/components/Player';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-ml-black text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gradient-to-b from-ml-light-grey to-ml-black p-8 pb-32">
        {children}
      </main>
      <Player />
    </div>
  );
}
