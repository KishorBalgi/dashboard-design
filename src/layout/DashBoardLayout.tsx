import NavBar from "../common/navigation/NavBar";
import SideBar from "../common/navigation/SideBar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen flex flex-row">
      <SideBar />
      <div className="flex-1 max-h-screen overflow-y-scroll">
        <NavBar />
        <div className="bg-gray-100">{children}</div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
