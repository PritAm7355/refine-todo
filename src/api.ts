import axios from "axios";

const API_URL = "http://localhost:3001/tasks";

// Fetch all tasks
export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Add a new task
export const addTask = async (status: string, taskDetails: any) => {
    const response = await axios.patch(API_URL, {
        [status]: taskDetails
    });
    return response.data;
};

// Delete a task
export const deleteTask = async (status: string, id: string) => {
    const response = await axios.get(API_URL);
    const updatedTasks = response.data;
    updatedTasks[status] = updatedTasks[status].filter((task: any) => task.id !== id);

    await axios.put(API_URL, updatedTasks);
};

// Move task to a new status
export const moveTask = async (fromStatus: string, toStatus: string, taskId: string) => {
    const response = await axios.get(API_URL);
    const updatedTasks = response.data;
    
    const taskToMove = updatedTasks[fromStatus].find((task: any) => task.id === taskId);
    if (taskToMove) {
        updatedTasks[fromStatus] = updatedTasks[fromStatus].filter((task: any) => task.id !== taskId);
        updatedTasks[toStatus].push({ ...taskToMove, status: toStatus });
    }

    await axios.put(API_URL, updatedTasks);
};
