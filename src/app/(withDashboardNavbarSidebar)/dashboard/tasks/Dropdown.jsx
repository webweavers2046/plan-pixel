import { useState } from 'react';
import UpdateTask from '../Components/UpdateTask';
import './dropdown.css'
import Swal from "sweetalert2";

const Dropdown = ({ id, task, tasks, setTasks }) => {
    const [openModal, setOpenModal] = useState(false);

    // console.log(id)
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

    };
    const handleUpdateTask = (id) => {
        console.log(id);
    }

    const onSubmit = (data) => {
        setButtonLoading(true);
        if (new Date(data.deadline) > new Date(today)) {
            const description = descriptionRef.current.value;
            if (!description) {
                return setRequiredError("Required *");
            }
            setRequiredError("");
            const taskData = {
                title: data.title,
                priority: data.priority,
                status: data.status,
                deadline: data.deadline,
                description: description,
            };
            fetch(
                `/task.json/tasks/${task._id}`,
                {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(taskData),
                }
            )
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                    setButtonLoading(false);
                    reset();
                    refetch();

                    toast.success("New Task Added");
                });
        } else {
            setButtonLoading(false);
            return setDateErrorMessage("Please provide a valid Date");
        }
    };
    return (
        <div className="flex flex-col bg-white threeDotDropdown">
            <ul className="flex flex-col gap-4">
                <li onClick={() => setOpenModal(!openModal)}>Update Task</li>
                <hr />
                <li onClick={() => handleDeleteTask(id)}>Delete Task</li>
            </ul>
            <UpdateTask task={task} openModal={openModal} setOpenModal={setOpenModal}/>
        </div>
    );
};

export default Dropdown;