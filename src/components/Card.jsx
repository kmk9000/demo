import styles from "./Card.module.css";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Card({
  name = "Example Name",
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
      <Button
        startIcon=<DeleteIcon />
        onClick={() => handleDelete(id)}
      ></Button>
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

Card.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  isFavourite: PropTypes.bool,
  toggleFavourite: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
