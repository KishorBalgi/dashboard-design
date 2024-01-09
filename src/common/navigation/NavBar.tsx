import help from "../../assets/icons/help.svg";
import polygon from "../../assets/icons/polygon.svg";
import anouncement from "../../assets/icons/anouncement.svg";
import search from "../../assets/icons/search.svg";

const NavBar = () => {
  return (
    <header className="grid grid-cols-3 bg-white py-3 px-8 shadow-md sticky">
      {/* Title */}
      <div className="justify-self-start self-start flex gap-4 items-center py-2">
        <h1 className="text-[15px]">Payments</h1>

        <div className="flex flex-row items-center gap-1">
          <button>
            <img className="w-4" src={help} alt="help" />
          </button>
          <p className="text-xs">How it works</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="justify-self-center">
        <div className="flex gap-2 items-center bg-gray-light rounded-md px-4 py-2 w-96">
          <img src={search} alt="search" />
          <input
            type="text"
            className="flex-1 bg-gray-light outline-none"
            placeholder="Search features, tutorials, etc."
          />
        </div>
      </div>

      {/* Nav Menu */}
      <div className="justify-self-end">
        <ul className="flex items-center gap-2">
          <li className="flex justify-center w-10 h-10 rounded-full bg-gray-light">
            <img className="w-4" src={anouncement} alt="anouncement" />
          </li>
          <li className="flex justify-center w-10 h-10 rounded-full bg-gray-light">
            <img className="w-3" src={polygon} alt="polygon" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
