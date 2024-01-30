import { taskContext } from "@/Providers/TaskDndProvider"
import { useContext } from "react"

export const useGlobalTaskData = () => {
    return useContext(taskContext)
}
