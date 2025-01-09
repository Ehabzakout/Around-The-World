import { Outlet } from 'react-router-dom';
import NavBar from './navBar';

export default function Layout() {
  return (
    <>
      <div className="dark:text-zinc-100 pt-16 pb-8 dark:bg-zinc-600 bg-zinc-200 min-h-screen font-inter">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}
