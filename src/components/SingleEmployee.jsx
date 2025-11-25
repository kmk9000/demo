import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import styles from "./Card.module.css";

const SingleEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  console.log("Employee: ", employee);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: employee?.name || "",
    title: employee?.title || "",
    salary: employee?.salary || "",
    phone: employee?.phone || "",
    email: employee?.email || "",
    animal: employee?.animal || "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    axios
      .put(`http://localhost:3001/employees/${id}`, formData)
      .then((response) => {
        setEmployee(response.data);
        setIsEditing(false);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/employees/${id}`)
      .then((response) => {
        setEmployee(response.data);
        setFormData({
          name: response.data.name,
          title: response.data.title,
          salary: response.data.salary,
          phone: response.data.phone,
          email: response.data.email,
          animal: response.data.animal,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isEditing) {
    return (
      <div className={styles.card}>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="name">Salary</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
          <label htmlFor="name">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <label htmlFor="name">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="name">Animal</label>
          <input
            type="text"
            name="animal"
            value={formData.animal}
            onChange={handleChange}
          />
          {/* <button type="submit">Save</button> */}
        </form>
        <button onClick={toggleEdit}>Cancel editing</button>
        <button onClick={handleSave}>Save</button>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h3>Employee details</h3>
      <p>Name: {employee?.name}</p>
      <p>Title: {employee?.title}</p>
      <p>Salary: {employee?.salary}</p>
      <p>Phone: {employee?.phone}</p>
      <p>Email: {employee?.email}</p>
      <p>Animal: {employee?.animal}</p>
      <p>Is Favourtite: {employee?.isFavourite ? "Yes" : "No"}</p>
      <button onClick={toggleEdit}>Edit</button>
    </div>
  );
};

export default SingleEmployee;
