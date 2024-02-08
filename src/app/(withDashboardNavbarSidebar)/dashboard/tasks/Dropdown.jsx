import { useState } from 'react';
import UpdateTask from '../Components/UpdateTask';
import './dropdown.css'
import Swal from "sweetalert2";
import useAxios from '@/hooks/useAxios';

const Dropdown = ({ id, task, tasks, setTasks }) => {
    const [openModal, setOpenModal] = useState(false);
    const xios = useAxios()

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
                xios.delete(`/deleteTask/${id}`)
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


    return (
        <div className="flex flex-col bg-white threeDotDropdown">
            {/* <Dropdown
                className="bg-gray-300 w-full py-2 px-3 rounded-lg mt-16 cursor-pointer"
                label=""
                dismissOnClick={false}
                renderTrigger={() => }
            >
                <Dropdown.Item className="rounded-md">
                    <button
                        onClick={() => handleDeleteTask(task?._id)}
                        className="w-full"
                    >
                        Delete Task
                    </button>
                </Dropdown.Item>
                <Dropdown.Item className="rounded-md">
                    <button className="w-full">Update Task</button>
                </Dropdown.Item>
            </Dropdown> */}
            <ul className="flex flex-col gap-4">
                <li onClick={() => setOpenModal(!openModal)}>Update Task</li>
                <hr />
                <li onClick={() => handleDeleteTask(id)}>Delete Task</li>
            </ul>
            {/* <UpdateTask task={task} openModal={openModal} setOpenModal={setOpenModal} /> */}
        </div>
    );
};

export default Dropdown;