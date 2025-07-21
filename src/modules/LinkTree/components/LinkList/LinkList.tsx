import { useLinkTree } from "../../hooks/LinkTreeHook";
import { LinkListContainer } from "./LinkList.styles";
import { LinkItem } from "../LinkItem/LinkItem";

export const LinkList: React.FC = () => {
  const { data } = useLinkTree();

  if (!data) return null;

  const { links } = data;

  return (
    <LinkListContainer>
      {links.map((link, index) => (
        <LinkItem link={link} index={index} key={`link-item-${index}`} />
      ))}
    </LinkListContainer>
  );
};
