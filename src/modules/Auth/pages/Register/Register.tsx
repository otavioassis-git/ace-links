import { Button, IconButton, InputAdornment, Typography } from "@mui/material";
import { CenteredContainer } from "../../../../components/Styles/CenteredContainer.styles";
import { FormContainer } from "./Register.styles";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextField } from "../../../../components/Form/FormTextField/FormTextField";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const registerSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.confirmPassword && data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

export type TRegisterSchema = z.infer<typeof registerSchema>;

export const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const onSubmit: SubmitHandler<TRegisterSchema> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <CenteredContainer>
      <Typography variant="h4" component="h1">
        Create your account
      </Typography>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormTextField
          id="firstName"
          register={register}
          errors={errors}
          label="First Name"
          variant="outlined"
        />
        <FormTextField
          id="lastName"
          register={register}
          errors={errors}
          label="Last Name"
          variant="outlined"
        />
        <FormTextField
          id="username"
          register={register}
          errors={errors}
          label="Username"
          variant="outlined"
        />
        <FormTextField
          id="email"
          register={register}
          errors={errors}
          label="Email"
          variant="outlined"
        />
        <FormTextField
          id="password"
          type={showPassword.password ? "text" : "password"}
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
                      setShowPassword((showPassword) => {
                        return {
                          ...showPassword,
                          password: !showPassword.password,
                        };
                      })
                    }
                  >
                    {showPassword.password ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <FormTextField
          id="confirmPassword"
          type={showPassword.confirmPassword ? "text" : "password"}
          register={register}
          errors={errors}
          label="Confirm Password"
          variant="outlined"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPassword((showPassword) => {
                        return {
                          ...showPassword,
                          confirmPassword: !showPassword.confirmPassword,
                        };
                      })
                    }
                  >
                    {showPassword.confirmPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
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
          loading={isSubmitting}
        >
          Sign up
        </Button>
      </FormContainer>
    </CenteredContainer>
  );
};
