import styles from "./Form.module.css";

const Form = ({ formData, setFormData, handleClick }) => {
  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
    setFormData({
      name: "",
      title: "",
      salary: "",
      phone: "",
      email: "",
      animal: "",
    }); // optional reset of the form after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="salary">Salary</label>
        <input
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="animal">Animal</label>
        <input
          id="animal"
          name="animal"
          value={formData.animal}
          onChange={handleChange}
        />
        <button type="submit">Add employee</button>
        {/* Alternatively, you can use just button without submit type */}
        {/* <button type="button" onClick={handleClick}>Add Employee</button> */}
        <button
          type="button"
          onClick={() =>
            setFormData({
              name: "",
              title: "",
              salary: "",
              phone: "",
              email: "",
              animal: "",
            })
          }
        >
          Reset Form
        </button>
        <div className={styles.output}>
          <p>Name: {formData.name}</p>
          <p>Title: {formData.title}</p>
          <p>Salary: {formData.salary}</p>
          <p>Phone: {formData.phone}</p>
          <p>Email: {formData.email}</p>
          <p>Animal: {formData.animal}</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
