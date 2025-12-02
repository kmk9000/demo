import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useAxios from "../hooks/useAxios";

const EmployeesTable = () => {
  const { data, loading, error } = useAxios(
    "https://demo-27y6.onrender.com/employees"
  );
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No employees found.</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Animal</TableCell>
            <TableCell>Favourite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.title}</TableCell>
              <TableCell>{employee.salary}</TableCell>
              <TableCell>{employee.phone}</TableCell>
              <TableCell>{employee.animal}</TableCell>
              <TableCell>{employee.isFavourite ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesTable;
