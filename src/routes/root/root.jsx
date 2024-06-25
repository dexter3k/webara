import { Outlet, Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";

const Root = () => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-100
                      font-sans">
        <header className="flex justify-between p-4 text-2xl bg-white-bg shadow-md">

          <a className="flex items-center font-bold">
            <img alt="ARA" src="/logo_small.png" className="rounded-full size-16 mr-2"/>
            <p className="font-bold leading-5 text-red-base">Aalto<br/>Russian-speaking<br/>Association</p>
          </a>

          <div className="flex gap-5 items-center font-small">
            <ul className="flex gap-4 text-red-base">
              <li><Link to="" className="font-bold">Home</Link></li>
              <li><Link to="events">Events</Link></li>
              <li><Link to="about">About Us</Link></li>
            </ul>

            <MdLanguage className="text-gray-500 size-7"/>

            <div className="flex gap-1">
              <a href="https://t.me/aaltorussian" target="_blank"><img src="/telegram_logo.png" className="size-10" /></a>
            <a href="https://www.instagram.com/aalto_ara" target="_blank"><img src="/Instagram_Glyph_Gradient.png" className="size-10" /></a>
            </div>
          </div>
        </header>

        <Outlet />

        <footer className="flex justify-between gap-10 px-10
                           border-t-2 bg-white-bg text-red-base">
          <div className="flex-col shrink-0 m-4 font-medium">
            <p>© 2024 Aalto Russian-speaking Association ry</p>
            <p>c/o AYY, Otakaari 11, 02150 Espoo, Finland</p>
            <p>Y-tunnus: 3189497-5</p>
          </div>

          <div className="text-center m-4">
            <ul className="grid grid-rows-3 grid-flow-col list-none gap-x-8">
              <li><Link to="about">About Us</Link></li>
              <li><Link to="about">Board</Link></li>
              <li><Link to="about">Committees</Link></li>

              <li><Link to="about">Join ARA</Link></li>
              <li><Link to="about">Rules</Link></li>
              <li><Link to="events">Events</Link></li>

              <li><Link to="">Home</Link></li>
              <li><Link to="admin">Admin</Link></li>
            </ul>
          </div>

          <div className="flex gap-1 p-4 items-center shrink-0">
            <a href="https://t.me/aaltorussian" target="_blank"><img src="/telegram_logo.png" className="size-10" /></a>
            <a href="https://www.instagram.com/aalto_ara" target="_blank"><img src="/Instagram_Glyph_Gradient.png" className="size-10" /></a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Root;
