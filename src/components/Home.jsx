import { useEffect, useState } from "react";

import Card from "../components/Card";
import Counter from "../components/Counter";
import Form from "../components/Form";
import axios from "axios";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// you can either import like this for mui icons and components

function Home() {
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
  });

  const [loading, setLoading] = useState(true);
  const url = "https://demo-27y6.onrender.com";

  useEffect(() => {
    axios
      .get("https://demo-27y6.onrender.com/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://demo-27y6.onrender.com/employees/${id}`)
      .then((response) => {
        setEmployees(employees.filter((employee) => employee.id !== id));
      });
  };

  const handleClick = () => {
    axios
      .post("https://demo-27y6.onrender.com/employees", {
        name: formData.name,
        title: formData.title,
        salary: formData.salary,
        phone: formData.phone,
        email: formData.email,
        animal: formData.animal,
        isFavourite: false,
      })
      .then((response) => {
        setEmployees([...employees, response.data]);
      });
  };

  const toggleFavourite = (id) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id && employee.isFavourite === undefined) {
        return { ...employee, isFavourite: false };
      } else if (employee.id === id) {
        return { ...employee, isFavourite: !employee.isFavourite };
      } else {
        return employee;
      }
    });
    setEmployees(updatedEmployees);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Button
        variant="contained"
        sx={{ backgroundColor: "limeGreen.main", padding: 2, margin: 2 }}
        startIcon={<DeleteIcon />}
      >
        Click me I'm from MUI!
      </Button>
      <main>
        {employees.map((employee) => (
          <Card
            key={employee.id}
            {...employee}
            toggleFavourite={toggleFavourite}
            handleDelete={handleDelete}
          />
        ))}
        <Counter count={count} setCount={setCount} />
        <Form
          formData={formData}
          setFormData={setFormData}
          handleClick={handleClick}
        />
      </main>
    </div>
  );
}

export default Home;
