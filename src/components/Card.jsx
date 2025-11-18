import styles from "./Card.module.css";
import { useNavigate } from "react-router";

export default function Card({
  name,
  title,
  salary,
  phone,
  email,
  animal,
  isFavourite,
  toggleFavourite,
  handleDelete,
  id,
}) {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <button onClick={() => toggleFavourite(id)}>Toggle Favourite</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <h2>{name}</h2>
      <p>Title: {title}</p>
      <p>Salary: {salary}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Animal: {animal}</p>
      <div className={styles.favourite}>{isFavourite && <span>❤️</span>}</div>
      <button onClick={() => navigate(`/employees/${id}`)}>
        {" "}
        View Employee{" "}
      </button>
    </div>
  );
}
