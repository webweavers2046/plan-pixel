"use client";
import { BsStopwatchFill } from "react-icons/bs";
import { MdDoubleArrow } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

// import { BiSolidMessageSquare } from "react-icons/bi";
// import { useRef, useState } from "react";
// import { HiOutlineExclamationCircle } from "react-icons/hi";
// import { useForm } from "react-hook-form";

const Task = ({ task, tasks, setTasks, refetch }) => {
    // const [requiredError, setRequiredError] = useState("");
    // const [openDeleteModal, setOpenDeleteModal] = useState(false);
    // const [buttonLoading, setButtonLoading] = useState(false);
    // const [openModal, setOpenModal] = useState(false);
    // const descriptionRef = useRef();
    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors },
    // } = useForm();

    // const [dateErrorMessage, setDateErrorMessage] = useState("");
    // get today date
    // let today = new Date();
    // let dd = String(today.getDate()).padStart(2, "0");
    // let mm = String(today.getMonth() + 1).padStart(2, "0");
    // let yyyy = String(today.getFullYear());
    // today = `${yyyy}-${mm}-${dd}`;
    // let speed = idx * 0.3;

    const handleDeleteTask = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                // axios.delete(`https://task-management-server-topaz.vercel.app//deleteTask/${id}`)
                fetch(`https://task-management-server-topaz.vercel.app/deleteTask/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your task has been deleted.',
                                'success'
                            )
                            // eslint-disable-next-line react/prop-types
                            const remaining = tasks.filter(task => task._id !== id);
                            console.log(remaining);
                            setTasks(remaining);
                        }
                    })
            }
          });
        // console.log("id", id);
        // setOpenDeleteModal(true);


    };
    // const onSubmit = (data) => {
    //     setButtonLoading(true);
    //     if (new Date(data.deadline) > new Date(today)) {
    //         const description = descriptionRef.current.value;
    //         if (!description) {
    //             return setRequiredError("Required *");
    //         }
    //         setRequiredError("");
    //         const taskData = {
    //             title: data.title,
    //             priority: data.priority,
    //             status: data.status,
    //             deadline: data.deadline,
    //             description: description,
    //         };
    //         fetch(
    //             `/task.json/tasks/${task._id}`,
    //             {
    //                 method: "PUT",
    //                 headers: {
    //                     "content-type": "application/json",
    //                 },
    //                 body: JSON.stringify(taskData),
    //             }
    //         )
    //             .then((res) => res.json())
    //             .then((result) => {
    //                 console.log(result);
    //                 setButtonLoading(false);
    //                 reset();
    //                 refetch();

    //                 toast.success("New Task Added");
    //             });
    //     } else {
    //         setButtonLoading(false);
    //         return setDateErrorMessage("Please provide a valid Date");
    //     }
    // };
    return (
        <div className="mt-3 bg-[#F9F9F9] rounded-md p-6 text-black">
            <div className=" flex items-center gap-2 justify-between">
                <h2 className="font-semibold text-lg">{task.title}</h2>
            </div>
            <p className="text-xs opacity-65 pt-4">{task.description}</p>
            <div className="flex justify-between items-center">
                <p className="pt-3 flex items-center gap-2">
                    <BsStopwatchFill className="text-green-500" />{" "}
                    <span className="text-xs pt-0.5 ">
                        {task.dates?.dueDate}
                    </span>
                </p>
                <p className="pt-3 flex items-center gap-2">
                    <span className="text-sm pt-0.5">{task.priority}</span>
                    <MdDoubleArrow className="-rotate-90 text-red-500" />{" "}
                </p>
            </div>
            <hr className="mt-5 bg-black h-[2px]" />
            <div className="flex justify-end mt-2 ">
                <MdDelete onClick={() => handleDeleteTask(task._id)} className="text-xl cursor-pointer" />
            </div>

        </div>
    );
};

export default Task;
