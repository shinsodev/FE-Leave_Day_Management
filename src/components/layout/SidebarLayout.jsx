import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    // <div className="flex flex-row min-h-screen bg-[#F4F1ED]">
    //   {/* Sidebar */}
    //   {/* <div className="w-1/6 bg-[#034F75] text-white rounded-2xl shadow-2xl"></div> */}

    //   <Sidebar />

    //   {/* Main Content Area */}
    //   <div className="flex-1">
    //     {/* Header */}
    //     {/* <div className="bg-white shadow-md rounded-lg"></div> */}
    //     <Header />

    //     {/* Dynamic Content */}
    //     <div className="mt-[48px] mx-[44px]">{children}</div>
    //   </div>
    // </div>
    <div className="bg-slate-200">
      <Header />
      <div className="flex flex-row min-h-screen">
        {/* Sidebar */}
        {/* <div className="w-1/6 bg-[#034F75] text-white rounded-2xl shadow-2xl"></div> */}
        <Sidebar />
        <div className="mt-[48px] mx-[44px] w-full flex justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
