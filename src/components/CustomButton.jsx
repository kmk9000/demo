import Button from "@mui/material/Button";

const CustomButton = ({ ...props }) => {
  return (
    <Button variant="contained" {...props} sx={{ backgroundColor: "cyan" }} />
  );
};

export default CustomButton;
