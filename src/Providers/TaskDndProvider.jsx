"use client";

import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import useGetSocketData from "@/hooks/useGetAllTasks";
import toast from "react-hot-toast";
import apiConnector from "@/hooks/useAxios";
import axios from "axios";

// Global context provider for managing shared state
export const taskContext = createContext(null);

export const TaskDndProvider = ({ children }) => {
  // managing states here
  const [dragOverElementName, setDragOverElementName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [droppableAreaName, setDroppableAreaName] = useState("");
  const [isDropped, setIsDropped] = useState(false);
  const [draggingTaskId, setDraggingTaskId] = useState(false);
  const [isClient, setIsClient] = useState(false);
  // const [draggingTaskId, setDraggingTaskId] = useState("");
  const xios = apiConnector();

  // Fetching all tasks here
  const alltasks  = useGetSocketData() 

  //Ensure CSR rendering and avoid running certain code during server-side rendering (SSR) in a Next.js app.
  useEffect(() => {
    setIsClient(true);
  }, []);

  // dragging start event
  const draggingStarted = (e, _id, status) => {
    setIsDragging(true);
    setDraggingTaskId(_id);
    e.dataTransfer.setData("draggingElementId", _id);
  };

  // Over the element the task being dragged
  const draggingOver = (e) => {
    e.preventDefault();
    setDragOverElementName(e.target.id);
  };

  // Droppable area where dragging element is dropped
  const dropOn = async (e) => {
    e.preventDefault();
    const draggingTaskId = e.dataTransfer.getData("draggingElementId");
    // This will give you the element where the item was dropped
    const droppableArea = e.target.id;
    setIsDragging(false);
    setDragOverElementName(false);

    // if drop out of the box
    if (droppableArea === "") {
      return toast.error("In valid area");
    }

    // setting droppable area name to set state and local
    //state change for the latest update without delay
    setDroppableAreaName(droppableArea);
    setIsDropped(true);
    const draggingTask = alltasks.find((task) => task._id === draggingTaskId);
    draggingTask.status = droppableArea;

    // Patch http request to change the state
    const url = `/updateTaskState?id=${draggingTaskId}&state=${droppableArea}`;
    xios.patch(url)
      .then((data) => {
        const actualData = data.data;
        if (actualData.updated.modifiedCount > 0) {
          setDroppableAreaName(droppableArea);
          return toast.success(`Changed to ${actualData.state}`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  //scatter the data across components in its network
  const globalData = {
    alltasks,
    draggingStarted,
    dropOn,
    draggingOver,
    isDropped,
    isDragging,
    draggingTaskId,
    dragOverElementName,
    droppedAreaName: droppableAreaName,
  };

  return (
    <taskContext.Provider value={globalData}>
      {isClient && children}
    </taskContext.Provider>
  );
};

TaskDndProvider.propTypes = {
  children: PropTypes.node,
};

export default TaskDndProvider;
