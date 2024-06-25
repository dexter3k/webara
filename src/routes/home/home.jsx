import {
  MdOutlineDateRange,
  MdOutlineLocationOn,
} from "react-icons/md";

const mockEvents = [
  {
    key:         12,
    header:      'Literature Club Meeting',
    image:       'https://cataas.com/cat/says/Books',
    date:        '12.06.2024 14:15',
    location:    'Otaniemi, Espoo',
    description: 'Lorem ipsum dolor sit amet.',
    canJoin:     false,
  },

  {
    key:         13,
    header:      'Очередная бухаловка',
    image:       'https://cataas.com/cat/says/Drinking',
    date:        '13.06.2024 23:15',
    location:    'OK 20 Yläkerta, Espoo',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint. XDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.',
    canJoin:     true,
  },

  {
    key:         14,
    header:      'Literature Club Meeting',
    image:       'https://cataas.com/cat/says/Books',
    date:        '15.06.2024 14:15',
    location:    'Otaniemi, Espoo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    canJoin:     false,
  },
];

const Home = () => {
  return (
    <main className="flex flex-col gap-32 max-w-screen-lg m-auto py-32">
      <section className="flex item-center content-between p-5 gap-10">
        <div
          style={{"--image-url": `url(https://cataas.com/cat/says/Welcome)`}}
          className="bg-[image:var(--image-url)]
                     size-64 bg-cover bg-no-repeat bg-center"
        ></div>

        <div className="flex flex-col max-w-96 m-auto">
          <h1 className="text-2xl font-bold mb-2">
            Welcome to Aalto Russian-speaking Association (ARA)!
          </h1>

          <p className="float-right text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <a className="bg-red-base rounded-full mt-5 mr-auto text-white-bg px-3 py-1"
          >Join ARA</a>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h1 className="font-bold text-2xl mx-0 self-start mb-5">Upcoming Events</h1>

        <div className="flex gap-5 items-start">
          {mockEvents.map(event =>
            <div
              key={event.key}
              className="flex flex-col shadow-xl rounded-lg h-96 min-w-64 max-w-64 bg-white-bg"
            >
              <div
                style={{"--image-url": `url(${event.image})`}}
                className="bg-[image:var(--image-url)]
                           h-32 rounded-t-lg bg-cover bg-no-repeat bg-center"
              ></div>

              <div className="p-3 flex flex-col grow">
                <h1 className="font-bold text-md"
                >{event.header}</h1>

                <div className="font-normal text-gray-800 mb-3">
                  <div className="flex">
                    <MdOutlineDateRange className="my-auto" />
                    <p>{event.date}</p>
                  </div>

                  <div className="flex">
                    <MdOutlineLocationOn className="my-auto" />
                    <p>{event.location}</p>
                  </div>
                </div>

                <p className="text-gray-500 line-clamp-4"
                >{event.description}</p>

                <div className="ml-auto mt-auto">
                  <a className=" rounded-full text-red-base font-medium px-3 py-2">View Details</a>
                  {event.canJoin
                    ? <a className="border border-red-base font-medium rounded-full px-3 py-2 ml-1
                                    text-red-base
                                    hover:text-white-bg hover:bg-red-base"
                      >Sign Up</a>
                    : null}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="flex item-center content-between p-5 gap-10">
        <div className="flex flex-col max-w-96 m-auto">
          <h1 className="text-2xl font-bold mb-2">
            Welcome to Aalto Russian-speaking Association (ARA)!
          </h1>

          <p className="float-right text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <a className="bg-red-base rounded-full mt-5 mr-auto text-white-bg px-3 py-1"
          >Join ARA</a>
        </div>

        <div
          style={{"--image-url": `url(https://cataas.com/cat/says/Meowwittee)`}}
          className="bg-[image:var(--image-url)]
                     size-64 bg-cover bg-no-repeat bg-center"
        ></div>
      </section>

      <section className="flex item-center content-between p-5 gap-10">
        <div
          style={{"--image-url": `url(https://cataas.com/cat/says/Meowwittee!)`}}
          className="bg-[image:var(--image-url)]
                     size-64 bg-cover bg-no-repeat bg-center"
        ></div>

        <div className="flex flex-col max-w-96 m-auto">
          <h1 className="text-2xl font-bold mb-2">
            Welcome to Aalto Russian-speaking Association (ARA)!
          </h1>

          <p className="float-right text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <a className="bg-red-base rounded-full mt-5 mr-auto text-white-bg px-3 py-1"
          >Join ARA</a>
        </div>
      </section>
    </main>
  );
};

export default Home;
