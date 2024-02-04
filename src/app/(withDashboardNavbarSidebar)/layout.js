import PrivateRoute from "@/components/Common/PrivateRoute";
import DashboardNavbar from "./dashboard/Components/DashboardNavbar";
import DashboardSidebar from "./dashboard/Components/DashboardSidebar";
import "@/styles/globals.css";

export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section>
            <PrivateRoute>
                <div className="grid grid-cols-12 h-screen">
                    <div className="col-span-2">
                        <DashboardSidebar />
                    </div>
                    <div className="col-span-10">
                        <div className="">
                            <DashboardNavbar />
                        </div>
                        {children}
                    </div>
                </div>
            </PrivateRoute>
        </section>
    );
}
