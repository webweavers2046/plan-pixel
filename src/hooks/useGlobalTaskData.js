"use client"

const { taskContext } = require("@/Providers/TaskDndProvider")
const { useContext } = require("react")

const useGlobalTaskData  = () => {
    return useContext(taskContext)
}

export default useGlobalTaskData