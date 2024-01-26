import DashboardBody from "./Dashboard/DashboardBody";
import DashboardNavbar from "./Dashboard/DashboardNavbar";
import Sidebar from "./Dashboard/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex bg-[#F9F9F9]">
            <div className="w-1/6 flex gap-12">
                <Sidebar />
                <div className="h-screen w-[1px] bg-gray-500"></div>
            </div>
            <div className="w-5/6 py-8 px-6">
                <DashboardNavbar />
                <DashboardBody />
            </div>
        </div>
    );
};

export default Dashboard;
