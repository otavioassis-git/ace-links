import { useQuery } from "@tanstack/react-query";
import { LinkTreeRepository } from "../../repositories";
import { Navigate, useParams } from "react-router";
import { CircularProgress } from "@mui/material";
import { UserSummary } from "../../components/UserSummary/UserSummary";
import { LinkList } from "../../components/LinkList/LinkList";
import { LinkTreeFooter } from "../../components/LinkTreeFooter/LinkTreeFooter";
import { CenteredContainer } from "../../../../components/Styles/CenteredContainer.styles";
import { useEffect } from "react";
import { NotFound } from "../../../../pages/NotFound/NotFound";
import { useLogin } from "../../../../hooks/LoginHook";

export const LinkTree: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const { user } = useLogin();

  if (!username) return <Navigate to="/" />;

  const { data, isLoading, isRefetching, isError, refetch } = useQuery({
    queryKey: ["USER_LINKS_DATA"],
    queryFn: async () => await LinkTreeRepository.getUserLinks(username),
  });

  useEffect(() => {
    refetch();
  }, [username]);

  if (isLoading || isRefetching)
    return (
      <CenteredContainer>
        <CircularProgress color="primary" />
      </CenteredContainer>
    );

  if (isError) return <Navigate to="/404" />;

  if (!data) return null;

  if (data?.links.length === 0 && user?.username !== username) {
    return <NotFound />;
  }

  return (
    <CenteredContainer>
      <UserSummary />
      <LinkList />
      <LinkTreeFooter />
    </CenteredContainer>
  );
};
