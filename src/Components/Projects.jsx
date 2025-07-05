
import coffee from "../assets/coffee.png";
import trailerbox from "../assets/trailerbox.png";
import baava from "../assets/baava.png";

const Projects = () => {
  return (
    <div className="text-white">
      <div>
        <div className="md:flex md:justify-center md:items-center md:pt-10 md:text-2xl font-main font-semibold flex justify-center items-center pt-7 text-2xl">
          <h1>Projects</h1>
        </div>
        <div className="md:grid md:grid-cols-3 md:ms-10 md:me-10 md:pt-10 md:gap-10 grid grid-cols-1 ms-3 me-3 gap-7 mt-7 py-5">
          <div className="bg-white h-[47vh] rounded-2xl">
            <img
              src={coffee}
              alt=""
              className="rounded-t-2xl h-[35vh] w-full"
            />
            <div className="text-black p-4 font-main flex justify-between items-center">
              <h1 className="text-lg font-semibold">Cafe Coffee</h1>
              <a href="https://cafecoffeedelights.netlify.app">
                <button className="rounded-md px-4 py-2 text-white bg-blue font-semibold hover:ease-in-out hover:duration-300 hover:scale-110">
                  View
                </button>
              </a>
            </div>
          </div>
          <div className="bg-white h-[47vh] rounded-2xl">
            <img
              src={trailerbox}
              alt=""
              className="rounded-t-2xl h-[35vh] w-full"
            />
            <div className="text-black p-4 font-main flex justify-between items-center ">
              <h1 className="text-lg font-semibold">Trailer Box</h1>
              <a href="https://thetrailerbox.netlify.app">
                <button className="rounded-md px-4 py-2 text-white bg-blue font-semibold hover:ease-in-out hover:duration-300 hover:scale-110">
                  View
                </button>
              </a>
            </div>
          </div>
          <div className="bg-white h-[47vh] rounded-2xl">
            <img
              src={baava}
              alt=""
              className="rounded-t-2xl h-[35vh] w-full"
            />
            <div className="text-black p-4 font-main flex justify-between items-center">
              <h1 className="text-lg font-semibold">Baava Crackers</h1>
              <a href="https://baavacrackers.in">
                <button className="rounded-md px-4 py-2 text-white bg-blue font-semibold hover:ease-in-out hover:duration-300 hover:scale-110">
                  View
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
