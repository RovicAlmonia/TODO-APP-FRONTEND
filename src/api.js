// api.js
const BASE_URL = "http://127.0.0.1:8000/api/todos/"; // Make sure this is your API URL

// Get all todos
export const getTodos = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch todos: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in getTodos:", error);
    throw error;
  }
};

// Add a new todo
export const addTodo = async (title) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed: false }),
    });
    if (!response.ok) {
      throw new Error(`Failed to add todo: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in addTodo:", error);
    throw error;
  }
};

// Update an existing todo
export const updateTodo = async (id, updatedFields) => {
  try {
    const response = await fetch(`${BASE_URL}${id}/`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFields),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to update todo: ${errorText}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in updateTodo:", error);
    throw error;
  }
};

// Delete a todo
export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}/`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error(`Failed to delete todo: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error in deleteTodo:", error);
    throw error;
  }
};
