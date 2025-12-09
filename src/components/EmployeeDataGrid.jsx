import useAxios from "../hooks/useAxios";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function EmployeeDataGrid() {
  const url = "http://localhost:3001/employees";
  const { data, loading, error } = useAxios(url);
  //   console.log("Data", data);
  const handleSave = (id, updateRow) => {
    axios.put(`${url}/${id}`, updateRow).then((response) => {
      console.log("Responses: ", response);
    });
  };

  const columns = [
    { field: "id", headerName: "ID" },

    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => {
        const statusColors = {
          active: "green",
          "on leave": "yellow",
          inactive: "red",
          pending: "orange",
        };
        const color = statusColors[params.value] || "gray";
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: color,
                display: "inline-block",
              }}
            ></span>
            <div style={{ textTransform: "capitalize" }}>
              {params.value || ""}
            </div>
          </div>
        );
      },
    },
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "position",
      headerName: "Position",
      editable: true,
      width: 180,
    },
    { field: "department", headerName: "Department", width: 150 },
    { field: "salary", headerName: "Salary" },
  ];

  return (
    <div>
      <DataGrid
        rows={data ?? []}
        columns={columns}
        loading={loading}
        style={{ margin: "24px" }}
        processRowUpdate={(updateRow, originalRow) => {
          console.log("Updated Row: ", updateRow),
            console.log("Original Row: ", originalRow),
            handleSave(originalRow.id, updateRow);
        }}
        onProcessRowUpdateError={(error) => console.log("Error: ", error)}
      />
    </div>
  );
}
