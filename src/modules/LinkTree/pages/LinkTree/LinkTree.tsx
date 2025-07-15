import { useQuery } from "@tanstack/react-query";
import { LinkTreeRepository } from "../../repositories";
import { Navigate, useParams } from "react-router";
import { CircularProgress } from "@mui/material";
import { UserSummary } from "../../components/UserSummary/UserSummary";
import { LinkList } from "../../components/LinkList/LinkList";
import { LinkTreeFooter } from "../../components/LinkTreeFooter/LinkTreeFooter";
import { CenteredContainer } from "../../../../components/Styles/CenteredContainer.styles";

export const LinkTree: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  if (!username) return <Navigate to="/" />;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["USER_LINKS_DATA"],
    queryFn: async () => await LinkTreeRepository.getUserLinks(username),
  });

  if (isError || data?.links.length === 0) return <Navigate to="/404" />;

  if (isLoading)
    return (
      <CenteredContainer>
        <CircularProgress color="primary" />
      </CenteredContainer>
    );

  return (
    <CenteredContainer>
      <UserSummary />
      <LinkList />
      <LinkTreeFooter />
    </CenteredContainer>
  );
};
