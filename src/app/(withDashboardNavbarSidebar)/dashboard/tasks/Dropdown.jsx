import './dropdown.css'
import Swal from "sweetalert2";

const Dropdown = ({ id, tasks, setTasks }) => {

    console.log(id)
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

    return (
        <div className="flex flex-col bg-white threeDotDropdown">
            <ul className="flex flex-col gap-4">
                <li onClick={() => handleUpdateTask(id)}>Update Task</li>
                <hr />
                <li onClick={() => handleDeleteTask(id)}>Delete Task</li>
            </ul>
        </div>
    );
};

export default Dropdown;