import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import styles from "./Card.module.css";
import useAxios from "../hooks/useAxios";
import { Card as CardMui } from "@mui/material";

const SingleEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  console.log("Employee: ", employee);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: employee?.name || "",
    title: employee?.title || "",
    salary: employee?.salary || "",
    phone: employee?.phone || "",
    email: employee?.email || "",
    animal: employee?.animal || "",
  });

  const url = `https://demo-27y6.onrender.com/employees/${id}`;

  const { data, loading, error } = useAxios(url);

  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    axios.put(url, formData).then((response) => {
      setEmployee(response.data);
      setIsEditing(false);
    });
  };

  useEffect(() => {
    if (data) {
      setEmployee(data);
      setFormData({
        name: data.name,
        title: data.title,
        salary: data.salary,
        phone: data.phone,
        email: data.email,
        animal: data.animal,
      });
    }
  }, [id, data, loading]);

  if (loading || isLoading) {
    return <div>Loading...</div>;
  }

  if (isEditing) {
    return (
      <CardMui sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Edit Employee
          </Typography>

          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Animal"
            name="animal"
            value={formData.animal}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <Button onClick={toggleEdit} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </CardContent>
      </CardMui>
    );
  }

  return (
    <CardMui sx={{ p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Employee details
        </Typography>

        <Typography>Name: {employee?.name}</Typography>
        <Typography>Title: {employee?.title}</Typography>
        <Typography>Salary: {employee?.salary}</Typography>
        <Typography>Phone: {employee?.phone}</Typography>
        <Typography>Email: {employee?.email}</Typography>
        <Typography>Animal: {employee?.animal}</Typography>
        <Typography>
          Is Favourite: {employee?.isFavourite ? "Yes" : "No"}
        </Typography>

        <Button variant="contained" sx={{ mt: 2 }} onClick={toggleEdit}>
          Edit
        </Button>
      </CardContent>
    </CardMui>
  );
};

export default SingleEmployee;
