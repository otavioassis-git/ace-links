import { Avatar, Typography, useTheme } from "@mui/material";
import { EditableUserSummaryContainer } from "./UserSummary.styles";
import { getInitials } from "../../../../utils/get-initials";
import { useEditableLinkTree } from "../../hooks/EditableLinkTreeHook";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextField } from "../../../../components/Form/FormTextField/FormTextField";
import EditIcon from "@mui/icons-material/Edit";

const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;

export const EditableUserSummary: React.FC = () => {
  const theme = useTheme();
  const { data, setData } = useEditableLinkTree();

  if (!data) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: data,
  });

  const onChange = (data: TRegisterSchema) => {
    setData((oldData) => {
      if (!oldData) return undefined;
      return { ...oldData, description: data.description, name: data.name };
    });
  };

  return (
    <EditableUserSummaryContainer onChange={handleSubmit(onChange)}>
      <Avatar
        sx={{
          width: 100,
          height: 100,
          border: `3px solid ${theme.palette.custom.avatarBorder}`,
          bgcolor: theme.palette.custom.avatarBackground,
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: theme.palette.text.primary,
        }}
      >
        {getInitials(data.name)}
      </Avatar>
      <FormTextField
        id="name"
        register={register}
        errors={errors}
        variant="filled"
        size="small"
        sx={{
          ".MuiFilledInput-input": {
            pt: 0.5,
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
          },
        }}
      />
      <Typography
        variant="body1"
        sx={{ color: theme.palette.custom.handleText }}
      >
        @{data.username.toLowerCase()}
      </Typography>
      <FormTextField
        id="description"
        register={register}
        errors={errors}
        variant="filled"
        size="small"
        sx={{
          ".MuiFilledInput-input": {
            pt: 0.5,
            textAlign: "center",
            fontSize: "0.875rem",
            color: theme.palette.text.secondary,
          },
        }}
      />
    </EditableUserSummaryContainer>
  );
};
