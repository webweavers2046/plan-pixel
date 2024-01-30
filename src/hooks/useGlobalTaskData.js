//centralized importing task&usecontext to avoid duplication

import { taskContext } from "@/Providers/TaskDndProvider"
import { useContext } from "react"

export const useGlobalTaskData = () => {
    return useContext(taskContext)
}
