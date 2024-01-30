"use client";

import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Global context provider for managing shared state
export const taskContext = createContext(null);

export const TaskDndProvider = ({ children }) => {

    // managing states here
    const [draggingElementId, setDraggingElementId] = useState("");
    const [dragOverElementName, setDragOverElementName] = useState("");
    const [isDragging, setIsDragging] = useState(false);
    const [droppedAreaName, setDroppedAreaName] = useState("");
    const [isClient, setIsClient] = useState(false);

    //Ensure CSR rendering and avoid running certain code during server-side rendering (SSR) in a Next.js app.
    useEffect(() => {
        setIsClient(true);
    }, []);

    // dragging start event
    const draggingStarted = (e, _id) => {
        setIsDragging(true)
        setDraggingElementId(_id);
        e.dataTransfer.setData("draggingElementId", _id);
    };


    // Over the element the task being dragged
    const draggingOver = (e) => {
        e.preventDefault();
        setDragOverElementName(e.target.id)
    };
    console.log(draggingElementId)

    const dropOn = async (e) => {
        e.preventDefault();
        const draggingTaskId = e.dataTransfer.getData("draggingElementId");
        // This will give you the element where the item was dropped
        const droppedAreaName = e.target.id;
        setIsDragging(false)
        setDroppedAreaName(droppedAreaName)
        setDragOverElementName(false)

        
        // Patch http request to change the state
        const url = `http://localhost:5000/updateTaskState?id=${draggingElementId}&state="done"`
        fetch(url, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include', 
            body: JSON.stringify({data:'nothing'}),
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {// 
              console.log('Success:', data);
            })
            .catch(error => {
              console.error('Error:', error);
            });
          
    };

    //scatter the data across components in its network
    const globalData = {
        draggingStarted,
        dropOn,
        draggingOver,
        isDragging,
        dragOverElementName,
        droppedAreaName,
    }


    // Provide the global context with a value
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


