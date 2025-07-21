import {
  Autocomplete,
  Divider,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { LinkItem } from "../LinkItem/LinkItem";
import z, { url } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer } from "../../../../components/Form/Form.styles";
import { FormTextField } from "../../../../components/Form/FormTextField/FormTextField";
import { ColorOptionPreview, LinkFormContainer } from "./LinkForm.styles";
import * as MuiIcons from "@mui/icons-material";
import { useMemo } from "react";
import { IconComponent } from "../../../../components/IconComponent/IconComponent";
import { useForm } from "react-hook-form";
import { catppuccinLatte, catppuccinMocha } from "../../../../theme";
import { useTheme } from "../../../../hooks/ThemeHook";

type LinkFormProps = {
  link: Link;
  setLink: (link: Link) => void;
};

export const registerSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  url: url().min(1, { message: "URL is required" }),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;

export const LinkForm: React.FC<LinkFormProps> = ({ link, setLink }) => {
  const { theme } = useTheme();
  const allIconNames = Object.keys(MuiIcons) as (keyof typeof MuiIcons)[];
  const allColors = Object.keys(
    catppuccinMocha
  ) as (keyof typeof catppuccinMocha)[];

  const uniqueIconNames = useMemo(() => {
    const seenBaseNames = new Set<string>();
    const suffixes = ["TwoTone", "Outlined", "Rounded", "Sharp"];

    const getBaseName = (name: string): string => {
      const sortedSuffixes = suffixes.sort((a, b) => b.length - a.length);
      for (const suffix of sortedSuffixes) {
        if (name.endsWith(suffix)) {
          return name.slice(0, -suffix.length);
        }
      }
      return name;
    };

    return allIconNames.filter((name) => {
      const baseName = getBaseName(name);
      if (seenBaseNames.has(baseName)) {
        return false;
      } else {
        seenBaseNames.add(baseName);
        return true;
      }
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: link,
    shouldFocusError: false,
  });

  const getBackgroundColor = (background: keyof typeof catppuccinMocha) => {
    return theme === "dark"
      ? catppuccinMocha[background]
      : catppuccinLatte[background];
  };

  const onChange = (data: TRegisterSchema) => {
    setLink({ ...link, title: data.title, url: data.url });
  };

  return (
    <LinkFormContainer>
      <Typography>Preview</Typography>
      <LinkItem noRedirect link={link} index={0} />
      <Divider sx={{ my: 1 }} />
      <FormContainer onChange={handleSubmit(onChange)}>
        <FormTextField
          id="title"
          register={register}
          errors={errors}
          label="Title"
          variant="outlined"
        />
        <FormTextField
          id="url"
          register={register}
          errors={errors}
          label="URL"
          variant="outlined"
        />
        <Autocomplete
          sx={{ width: "100%" }}
          options={uniqueIconNames}
          onChange={(_, data) => {
            setLink({ ...link, icon: data ?? undefined });
          }}
          value={link.icon}
          renderOption={(props, option) => (
            <MenuItem {...props} key={option} value={option}>
              <IconComponent icon={option} />
              <Typography sx={{ ml: 1 }}>{option}</Typography>
            </MenuItem>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              slotProps={{
                input: {
                  ...params.InputProps,
                  startAdornment: link.icon && (
                    <InputAdornment position="start">
                      <IconComponent icon={link.icon} />
                    </InputAdornment>
                  ),
                },
              }}
              label="Icon"
              variant="outlined"
            />
          )}
        />
        <Autocomplete
          sx={{ width: "100%" }}
          options={allColors}
          onChange={(_, data) => {
            setLink({ ...link, background: data ?? undefined });
          }}
          value={link.background}
          renderOption={(props, option) => (
            <MenuItem {...props} key={option} value={option}>
              <ColorOptionPreview
                bgcolor={getBackgroundColor(
                  option as keyof typeof catppuccinMocha
                )}
              />
              <Typography sx={{ ml: 1 }}>{option}</Typography>
            </MenuItem>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              slotProps={{
                input: {
                  ...params.InputProps,
                  startAdornment: link.background && (
                    <InputAdornment position="start">
                      <ColorOptionPreview
                        bgcolor={getBackgroundColor(
                          link.background as keyof typeof catppuccinMocha
                        )}
                      />
                    </InputAdornment>
                  ),
                },
              }}
              label="Background Color"
              variant="outlined"
            />
          )}
        />
      </FormContainer>
    </LinkFormContainer>
  );
};
