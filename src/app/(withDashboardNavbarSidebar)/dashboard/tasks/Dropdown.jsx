import './dropdown.css'
const Dropdown = () => {
    return (
        <div className="flex flex-col bg-white threeDotDropdown">
            <ul className="flex flex-col gap-4">
                <li>Update Task</li>
                <hr />
                <li>Delete Task</li>
            </ul>
        </div>
    );
};

export default Dropdown;