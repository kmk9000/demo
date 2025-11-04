import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Counter from "./components/Counter";
import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState(data);

  const handleClick = () => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        name: "John Doe",
        title: "Developer",
        salary: "4500",
        phone: "000-000-0000",
        email: "john@company.com",
        anime: "Dog",
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
        <button onClick={handleClick}>Add Employee</button>
        {employees.map((employee) => (
          <Card
            key={employee.id}
            {...employee}
            toggleFavourite={toggleFavourite}
          />
        ))}
        <Counter count={count} setCount={setCount} />
      </main>
      <Footer count={count} setCount={setCount} />
    </div>
  );
}

export default App;
