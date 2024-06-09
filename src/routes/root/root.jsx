import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <header className="flex justify-between p-4">
          <h1 className="text-3xl font-bold underline">
            Logo idk
          </h1>

          <ul className="flex gap-4">
            <li><a>Home</a></li>
            <li><a>Events</a></li>
            <li><a>About</a></li>
            <li><a>Idk</a></li>
          </ul>
        </header>

        <main className="text-center">
          <p>Хэллоу ворлд</p>
        </main>

        <footer className="text-center">
          <p>FOOTer</p>
        </footer>
      </div>
    </>
  );
};

export default Root;
