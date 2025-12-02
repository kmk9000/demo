import styles from "./Card.module.css";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card as CardMui } from "@mui/material";

import CustomButton from "./CustomButton";

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
    <CardMui>
      <CustomButton onClick={() => toggleFavourite(id)}>
        Toggle Favourite
      </CustomButton>
      <Button
        startIcon=<DeleteIcon />
        variant="contained"
        onClick={() => handleDelete(id)}
      >
        Delete
      </Button>

      <div>
        <Typography variant="h2">{name}</Typography>
        <Typography>Title: {title}</Typography>
        <Typography>Salary: {salary}</Typography>
        <Typography>Phone: {phone}</Typography>
        <Typography>Email: {email}</Typography>
        <Typography>Animal: {animal}</Typography>
      </div>

      <div className={styles.favourite}>{isFavourite && <span>❤️</span>}</div>
      <Button variant="contained" onClick={() => navigate(`/employees/${id}`)}>
        {" "}
        View Employee{" "}
      </Button>
    </CardMui>
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
