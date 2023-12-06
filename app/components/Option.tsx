import {
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
} from "@mui/material";

const Option: React.FC<{ choice: string }> = (props) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "#A4FFAF",
            },
          }}
        />
      }
      label={props.choice}
      sx={{
        color: "white",
      }}
    />
  );
};

export default Option;
