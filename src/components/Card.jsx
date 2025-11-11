import styles from "./Card.module.css";

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
    </div>
  );
}
