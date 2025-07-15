import { FormContainer } from "../../../../components/Form/Form.styles";
import { z } from "zod";
import { FormTextField } from "../../../../components/Form/FormTextField/FormTextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: TRegisterSchema) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormTextField
        id="email"
        register={register}
        errors={errors}
        label="Email"
        variant="outlined"
      />
      <FormTextField
        id="password"
        type={showPassword ? "text" : "password"}
        register={register}
        errors={errors}
        label="Password"
        variant="outlined"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ width: ["100%", "50%"], mt: 1.5 }}
        // loading={isLoading}
      >
        Sign in
      </Button>
    </FormContainer>
  );
};
