const API_BASE_URL = "http://localhost:8000/api";

// Fetch all todos
export const fetchTodos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/`);
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

// Add a new todo
export const addTodo = async (title: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, completed: false }),
    });
    if (!response.ok) {
      throw new Error("Failed to add todo");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding todo:", error);
    return null;
  }
};

// Toggle todo completion status
export const toggleComplete = async (id: number, completed: boolean) => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed }),
    });
    if (!response.ok) {
      throw new Error("Failed to update todo");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating todo:", error);
    return null;
  }
};

// Delete a todo
export const deleteTodo = async (id: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/todos/${id}/`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }
    return true;
  } catch (error) {
    console.error("Error deleting todo:", error);
    return false;
  }
};
