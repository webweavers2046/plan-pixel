const fetchTasks = async () => {
    try {
        const response = await fetch("task.json");

        if (!response.ok) {
            throw new Error("Failed to fetch tasks");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
};

const useTasks = () => {
    return useQuery("tasks", fetchTasks);
};

export default useTasks;
