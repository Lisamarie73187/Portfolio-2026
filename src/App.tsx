import { Outlet } from 'react-router-dom';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

export const App = () => (
  <div className="flex min-h-screen flex-col">
    <ScrollToTop />
    <NavBar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);
