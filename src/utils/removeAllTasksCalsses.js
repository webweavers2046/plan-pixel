  // Function to remove the class from all task containers
  import style from "../Providers/dnd.module.css";
  const removeAllTaskContainerClasses = () => {
    const allTaskWithClassTaskContainer = document.querySelectorAll(".task-container");
    allTaskWithClassTaskContainer?.forEach((task) => {
      task.classList.remove(style.dragOverExistingTask);
    });
  };

  export default removeAllTaskContainerClasses