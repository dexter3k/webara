import { Outlet } from "react-router-dom";
import { MdLanguage } from "react-icons/md";

const Root = () => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen
                      font-sans">
        <header className="flex justify-between p-4 text-2xl bg-white-bg shadow-md">

          <a className="flex items-center font-bold">
            <img alt="ARA" src="/logo_small.png" className="rounded-full size-16 mr-2"/>
            <a className="font-bold leading-5 text-red-base">Aalto<br/>Russian-speaking<br/>Association</a>
          </a>

          <div className="flex gap-5 items-center font-small">
            <ul className="flex gap-4 text-red-base">
              <li><a className="font-bold">Home</a></li>
              <li><a>Events</a></li>
              <li><a>About Us</a></li>
            </ul>

            <MdLanguage className="text-gray-500 size-6"/>

            <div className="flex gap-1">
              <a href=""><img src="/telegram_logo.png" className="size-10" /></a>
              <a href=""><img src="/Instagram_Glyph_Gradient.png" className="size-10" /></a>
            </div>
          </div>
        </header>

        <main className="text-center">
          Content
        </main>

        <footer className="flex border-t-2 bg-white-bg justify-between text-red-base">
          <div className="flex-col m-4">
            <p>© 2024 Aalto Russian-speaking Association ry</p>
            <p>c/o AYY, Otakaari 11, 02150 Espoo, Finland</p>
            <p>Y-tunnus: 3189497-5</p>
          </div>

          <div className="grid grid-cols-3 m-4 text-center">
            <a href="">About Us</a>
            <a href="">Join ARA</a>
            <a href="">Admin</a>

            <a href="">Board</a>
            <a href="">Rules</a>

            <a href="">Committees</a>
            <a href="">Events</a>
          </div>

          <div className="flex gap-1 p-4 items-center">
            <a href=""><img src="/telegram_logo.png" className="size-10" /></a>
            <a href=""><img src="/Instagram_Glyph_Gradient.png" className="size-10" /></a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Root;
