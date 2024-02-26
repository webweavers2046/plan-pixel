// Importing necessary dependencies and utilities
"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import useAxios from "@/hooks/useAxios";
import calculatePosition from "@/utils/calculate-position";
import style from "./dnd.module.css";
import removeAllTaskContainerClasses from "@/utils/removeAllTasksCalsses";
import useGlobalContext from "@/hooks/useGlobalContext";

import { AuthContext } from "./AuthProviders";
import useAllTasks from "@/hooks/useAllTasks";
import { ablyContext } from "@/components/ably/AblyProvider";

// Global context provider for managing shared state
export const taskContext = createContext(null);

// Component for managing drag and drop functionality
export const TaskDndProvider = ({ children }) => {
  // State management
  const [dragOverElementName, setDragOverElementName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [dragoverTask, setDragoverTask] = useState({
    id: null,
    position: null,
  });

  const { user } = useContext(AuthContext);
  const [droppableAreaName, setDroppableAreaName] = useState("");
  const [isDropped, setIsDropped] = useState(false);
  const [draggingTaskId, setDraggingTaskId] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const xios = useAxios();

  // Fetching all tasks from the server
  const { data: initialTask } = useAllTasks();
  const { tasks } = useContext(ablyContext);

  // Global context for managing shared data
  const { newTask, activeWorkspaceTasks } = useGlobalContext();

  // Local state for storing all tasks
  const alltasks = activeWorkspaceTasks;

  // Ensure CSR rendering and avoid running certain code during server-side rendering (SSR) in a Next.js app.
  useEffect(() => {
    setIsClient(true);
    alltasks?.push(newTask);
  }, [newTask]);

  // Event handler for when dragging starts
  const draggingStarted = (e, _id) => {
    setIsDragging(true);
    setDraggingTaskId(_id);
    e.dataTransfer.setData("draggingElementId", _id);
  };

  // Event handler for dragging over an element
  const draggingOver = (e, _id) => {
    e.preventDefault();

    setDragOverElementName(e.target.id);

    // Find the closest parent element with the class "task-container"
    const taskContainer = e.target.closest(".task-container");
    const allTaskWithClassTaskContainer = document.querySelectorAll(".task-container");

    if (taskContainer) {
      // Check if the dragged task is over its own container
      const isDraggedTaskContainer = taskContainer.id !== draggingTaskId;

      if (isDraggedTaskContainer) {
        allTaskWithClassTaskContainer?.forEach((task) => {
          if (task.id === task.id) {
            taskContainer.classList.add(style.dragOverExistingTask);
          }
          // Remove the class from all task containers when not dragging over any task
          task.classList.remove(style.dragOverExistingTask);
        });
      }
    }

    // Calculating the position based on the mouse pointer
    const mouseY = e.clientY;
    const droppableRect = e.target.getBoundingClientRect();
    const position = calculatePosition(alltasks, mouseY, droppableRect);

    setDragoverTask({ id: draggingTaskId, position });

    // Check if any existing task has the same position as the dragging task
  };

  // Event handler for when the dragging element is dropped
  const dropOn = async (e) => {
    e.preventDefault();
    const draggingTaskId = e.dataTransfer.getData("draggingElementId");
    // This will give you the element where the item was dropped
    const droppableArea = e.target.id;
    setIsDragging(false);
    setDragOverElementName(false);

    // Getting the position from the state
    const { id, position } = dragoverTask;

    // If drop is out of the box
    if (droppableArea === "" || !isNaN(parseInt(droppableArea))) {
      setIsDropped(true);

      if (isDropped || !isDragging) {
        removeAllTaskContainerClasses();
      }
      return toast.error("Invalid area");
    }

    // Setting droppable area name to set state and local
    // State change for the latest update without delay
    setDroppableAreaName(droppableArea);
    setIsDropped(true);
    let draggingTask = alltasks.find((task) => task._id === draggingTaskId);

    if (draggingTask) {
      draggingTask.status = droppableArea;
      draggingTask.position = parseInt(position);
      draggingTask.updatedAt = new Date();
    }

    if (isDropped) {
      removeAllTaskContainerClasses();
    }

    // Patch HTTP request to change the state
    const url = `/updateTaskState?id=${id}&state=${droppableArea}&position=${position}&userEmail=${user ? user.email : ""}`;
    xios
      .patch(url)
      .then((data) => {
        const actualData = data.data;
        if (actualData.updated.modifiedCount > 0) {
          setDroppableAreaName(droppableArea);
          return toast.success(`Changed to ${actualData.state}`, {
            position: "top-right",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Scatter the data across components in its network
  const globalData = {
    alltasks,
    draggingStarted,
    dropOn,
    draggingOver,
    isDropped,
    isDragging,
    draggingTaskId,
    dragOverElementName,
    // position and id
    dragoverTask,
    droppedAreaName: droppableAreaName,
  };

  // Rendering the component with the provided children
  return (
    <taskContext.Provider value={globalData}>
      {isClient && children}
    </taskContext.Provider>
  );
};

// PropTypes for the TaskDndProvider component
TaskDndProvider.propTypes = {
  children: PropTypes.node,
};

// Exporting the TaskDndProvider component as the default export
export default TaskDndProvider;