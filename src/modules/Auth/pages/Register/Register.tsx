import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from "@mui/material";
import { CenteredContainer } from "../../../../components/Styles/CenteredContainer.styles";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextField } from "../../../../components/Form/FormTextField/FormTextField";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useMutation } from "@tanstack/react-query";
import { AuthRepository } from "../../repositories";
import { useNavigate } from "react-router";
import { useToast } from "../../../../hooks/ToastHook";
import { FormContainer } from "../../../../components/Form/Form.styles";
import { useLogin } from "../../../../hooks/LoginHook";

const registerSchema = z
  .object({
    name: z.string().min(1, { message: "First name is required" }),
    surname: z.string().min(1, { message: "Last name is required" }),
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
  const navigate = useNavigate();
  const { setToast } = useToast();
  const { setUser } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const { mutate: registerUser, isPending: isLoading } = useMutation({
    mutationFn: async (data: RegisterRequest) =>
      await AuthRepository.registerUser(data),
    onSuccess: (response) => {
      setToast({
        title: "Account registered successfully",
        type: "success",
      });
      setUser(response);
      navigate(`/user/${response.username}`);
    },
    onError: () =>
      setToast({
        title: "Error creating account",
        message: "Please try again later",
        type: "error",
      }),
  });

  const onSubmit: SubmitHandler<TRegisterSchema> = async (data) => {
    const { confirmPassword, ...payload } = data;
    registerUser({ ...payload, role: "USER" });
  };

  return (
    <CenteredContainer>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          Create your account
        </Typography>
        <Typography variant="caption">
          Or{" "}
          <Link
            onClick={() => navigate("/login")}
            underline="hover"
            sx={{ cursor: "pointer" }}
          >
            login
          </Link>{" "}
          with your existing account
        </Typography>
      </Box>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormTextField
          id="name"
          register={register}
          errors={errors}
          label="First Name"
          variant="outlined"
        />
        <FormTextField
          id="surname"
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
          loading={isLoading}
        >
          Sign up
        </Button>
      </FormContainer>
    </CenteredContainer>
  );
};
