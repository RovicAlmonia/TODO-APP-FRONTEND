const BASE_URL = "https://todo-app-backend-1-j1c6.onrender.com/api/todos/";

export const getTodos = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const addTodo = async (title) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, completed: false }),
  });
  return response.json();
};

export const updateTodo = async (id, updatedFields) => {
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
};

export const deleteTodo = async (id) => {
  await fetch(`${BASE_URL}${id}/`, { method: 'DELETE' });
};
