import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

// Fetch all todos
export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/todos/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

// Add a new todo
export const addTodo = async (title: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/todos/`, {
      title,
      completed: false,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding todo:", error);
    return null;
  }
};

// Toggle todo completion status
export const toggleComplete = async (id: number, completed: boolean) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/todos/${id}/`, {
      completed,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating todo:", error);
    return null;
  }
};

// Delete a todo
export const deleteTodo = async (id: number) => {
  try {
    await axios.delete(`${API_BASE_URL}/todos/${id}/`);
    return true;
  } catch (error) {
    console.error("Error deleting todo:", error);
    return false;
  }
};
