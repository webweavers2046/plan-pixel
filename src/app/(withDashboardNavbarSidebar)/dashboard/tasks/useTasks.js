const fetchTasks = async () => {
    try {
        // const response = await fetch("https://plan-pixel-backend-jet.vercel.app/tasks");
        const response = await fetch("http://localhost:5000/tasks");

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
