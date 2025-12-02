import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Card.module.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [todosResponse, usersResponse] = await Promise.all([
          axios.get("https://jsonplaceholder.typicode.com/todos"),
          axios.get("https://jsonplaceholder.typicode.com/users"),
        ]);
        setTodos(todosResponse.data);
        setUsers(usersResponse.data);
      } catch (error) {
        console.log("Error: ", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Connect todos to users */}
      {todos.map((todo) => (
        <div key={todo.id} className={styles.card}>
          <p style={{ padding: "16px" }}>ID: {todo.id}</p>
          <p style={{ padding: "8px" }}>Title: {todo.title}</p>
          <p style={{ padding: "8px" }}>
            User: {users.find((user) => user.id === todo.userId)?.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
