import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Form from "./components/Form";
import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState(data);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
  });

  const handleClick = () => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        name: formData.name,
        title: formData.title,
        salary: formData.salary,
        phone: formData.phone,
        email: formData.email,
        animal: formData.animal,
        isFavourite: false,
      },
    ]);
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

  return (
    <div className="container">
      <Header />
      <main>
        {employees.map((employee) => (
          <Card
            key={employee.id}
            {...employee}
            toggleFavourite={toggleFavourite}
          />
        ))}
        <Counter count={count} setCount={setCount} />
        <Form
          formData={formData}
          setFormData={setFormData}
          handleClick={handleClick}
        />
      </main>
      <Footer count={count} setCount={setCount} />
    </div>
  );
}

export default App;
