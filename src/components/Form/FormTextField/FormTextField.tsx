import { TextField, Typography, type TextFieldProps } from "@mui/material";
import { FormTextFieldContainer } from "./FormTextField.styles";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

type FormTextFieldProps = TextFieldProps & {
  id: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
};

export const FormTextField: React.FC<FormTextFieldProps> = ({
  id,
  register,
  errors,
  ...props
}) => {
  return (
    <FormTextFieldContainer>
      <TextField
        error={errors[id] !== undefined}
        {...register(id)}
        {...props}
      />
      {errors[id] && (
        <Typography color="error" variant="caption">
          {errors[id].message as String}
        </Typography>
      )}
    </FormTextFieldContainer>
  );
};
