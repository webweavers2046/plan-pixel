import AdminOverviewWidget from "../dashboard/Components/AdminOverviewWidget/AdminOverviewWidget";
import UsersOverview from "../dashboard/Components/UsersOverview/UsersOverview";

const AdminDashboard = () => {
    const chartData = {
        categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "Jun",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        series: [
            {
                name: "Free Users",
                data: [150, 81, 145, 152, 115, 125, 100, 86, 40, 96, 136, 55],
                color: "#FBBC05",
            },
            {
                name: "Premium Users",
                data: [43, 13, 165, 32, 142, 173, 180, 185, 199, 162, 114, 155],
                color: "#50B577",
            },
        ],
    };
    return (
        <section>
            <AdminOverviewWidget />
            <div className="mt-6 grid grid-cols-8">
                <div className="col-span-8">
                    <UsersOverview chartData={chartData} />
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;
