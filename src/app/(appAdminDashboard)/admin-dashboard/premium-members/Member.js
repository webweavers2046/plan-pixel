import useAxios from "@/hooks/useAxios";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import Swal from "sweetalert2";

const Member = ({ member, refetch }) => {
    const { data: userData } = useUser(member?.email);
    console.log(userData);
    const axiosAdmin = useAxios();

    const handleDelete = (id) => {
        console.log(id);

        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonColor: "#d63031",
                cancelButtonColor: "#1dbf73",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result?.isConfirmed) {
                    axiosAdmin.delete(`/paymentInfo/${id}`).then((result) => {
                        console.log(result);
                        if (result?.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                            refetch();
                            toast.error("successfully deleted");
                        }
                    });
                }
            });
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div
            key={member.id}
            className="grid md:grid-cols-9 gap-2 items-center justify-between bg-dashboardPrimaryColor/50 mb-3 px-3 py-3 rounded-lg"
        >
            <div className="flex col-span-2 gap-6 items-center">
                <div className="">
                    <img
                        className="rounded-lg w-10 h-10 object-cover"
                        width={50}
                        height={50}
                        src={userData?.image}
                        alt={userData?.name}
                    />
                </div>
                <div className="">
                    <p className="text-xs opacity-70">Name: </p>
                    <h2 className="lg:text-xl text-lg font-semibold -mt-0.5">
                        {userData?.name}
                    </h2>
                </div>
            </div>

            <div className="lg:col-span-2 col-span-3">
                <p className="text-xs opacity-70">Email: </p>
                <h6 className="font-semibold">{member?.email}</h6>
            </div>
            <div className="lg:col-span-2 col-span-1">
                <p className="text-xs opacity-70">Plan Type: </p>
                <h6 className="font-semibold">{member?.planName}</h6>
            </div>
            <div className="col-span-2">
                <p className="text-xs opacity-70">Amount: </p>
                <h6 className="text-lg font-semibold">${member?.amount}</h6>
            </div>
            <div className="col-span-1 text-end">
                <button
                    className="text-sm font-semibold px-3 py-0.5 text-white bg-rose-600 rounded-full"
                    onClick={() => handleDelete(member._id)}
                >
                    Delete Membership
                </button>
            </div>
        </div>
    );
};

export default Member;
