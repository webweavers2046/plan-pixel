import PrivateRoute from "@/components/Common/PrivateRoute";
import DashboardNavbar from "./dashboard/Components/DashboardNavbar";
import DashboardSidebar from "./dashboard/Components/DashboardSidebar";
import "@/styles/globals.css";
import TanstackProvider from "@/Providers/TanstackProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function DashboardLayout({ children }) {
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
            <TanstackProvider>{children}</TanstackProvider>
          </div>
        </div>
      </PrivateRoute>
    </section>
  );
}
