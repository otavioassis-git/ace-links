import { useMutation } from "@tanstack/react-query";
import { CenteredContainer } from "../../../../components/Styles/CenteredContainer.styles";
import { EditableUserSummary } from "../../components/UserSummary/EditableUserSummary";
import { Navigate, useParams } from "react-router";
import { useLogin } from "../../../../hooks/LoginHook";
import { LinkTreeRepository } from "../../repositories";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useEditableLinkTree } from "../../hooks/EditableLinkTreeHook";
import { EditableLinkList } from "../../components/LinkList/EditableLinkList";

export const EditableLinkTree: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const { user } = useLogin();
  const { data, setData } = useEditableLinkTree();

  if (!username) return <Navigate to="/" />;

  const { mutate: fetchLinks, isPending: isLoading } = useMutation({
    mutationFn: async () => await LinkTreeRepository.getUserLinks(username),
    onSuccess: (response) => {
      setData(response);
    },
    onError: () => {
      console.log("error");
    },
  });

  useEffect(() => {
    fetchLinks();
  }, [username]);

  if (isLoading)
    return (
      <CenteredContainer>
        <CircularProgress color="primary" />
      </CenteredContainer>
    );

  if (user?.username !== username) {
    return <Navigate to={location.pathname.replace("/edit", "")} />;
  }

  if (!data) return null;

  return (
    <CenteredContainer>
      <EditableUserSummary />
      <EditableLinkList />
    </CenteredContainer>
  );
};
