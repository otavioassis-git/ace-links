import { useQuery } from "@tanstack/react-query";
import { LinkTreeRepository } from "../../repositories";
import { Navigate, useParams } from "react-router";
import { CircularProgress } from "@mui/material";
import { UserSummary } from "../../components/UserSummary/UserSummary";
import { LinkList } from "../../components/LinkList/LinkList";
import { LinkTreeContainer } from "./LinkTree.styles";
import { LinkTreeFooter } from "../../components/LinkTreeFooter/LinkTreeFooter";

export const LinkTree: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  if (!username) return <Navigate to="/" />;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["USER_LINKS_DATA"],
    queryFn: async () => await LinkTreeRepository.getUserLinks(username),
  });

  if (isError || data?.links.length === 0) return <Navigate to="/404" />;

  if (isLoading) return <CircularProgress color="primary" />;

  return (
    <LinkTreeContainer>
      <UserSummary />
      <LinkList />
      <LinkTreeFooter />
    </LinkTreeContainer>
  );
};
