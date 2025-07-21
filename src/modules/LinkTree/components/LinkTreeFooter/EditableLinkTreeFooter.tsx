import { Button } from "@mui/material";
import { LinkTreeFooterContainer } from "./LinkTreeFooter.styles";
import { useMutation } from "@tanstack/react-query";
import { LinkTreeRepository } from "../../repositories";
import { useEditableLinkTree } from "../../hooks/EditableLinkTreeHook";
import { useLogin } from "../../../../hooks/LoginHook";
import { useNavigate } from "react-router";
import { useToast } from "../../../../hooks/ToastHook";
import type { AxiosError } from "axios";

export const EditableLinkTreeFooter: React.FC = () => {
  const navigate = useNavigate();
  const { setToast } = useToast();
  const { user } = useLogin();
  const { data } = useEditableLinkTree();

  if (!user || !data) return null;

  const { mutate: saveChanges, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      const payload = {
        description: data.description,
        links: data.links.map((link) => {
          return {
            ...link,
            id: link.id.includes("new-link-") ? null : link.id,
            delete: link.delete ?? false,
          };
        }),
      };

      return await LinkTreeRepository.saveUserLinks(user, payload);
    },
    onSuccess: (response) => {
      console.log(response);
      setToast({
        title: "User links updated",
        type: "success",
      });
      navigate(`/user/${user.username}`);
    },
    onError: (error: AxiosError) => {
      console.log(error.message);
    },
  });

  return (
    <LinkTreeFooterContainer sx={{ bottom: "3rem" }}>
      <Button
        variant="contained"
        loading={isLoading}
        onClick={() => saveChanges()}
      >
        Save changes
      </Button>
    </LinkTreeFooterContainer>
  );
};
