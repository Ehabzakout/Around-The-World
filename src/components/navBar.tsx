import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Switcher from './themeSwitch';
export default function NavBar() {
  return (
    <>
      <div className="bg-zinc-100 fixed top-0 left-0 py-2 right-0 dark:text-zinc-100 dark:bg-zinc-800">
        <div className="container">
          <div className="flex  items-center justify-between">
            <Link to="/">
              <img
                src={logo}
                className="w-12 h-12 object-cover rounded-full "
              ></img>
            </Link>
            <Link to="/">
              <h1 className="font-bold text-lg">Around The World </h1>
            </Link>
            <Switcher></Switcher>
          </div>
        </div>
      </div>
    </>
  );
}
