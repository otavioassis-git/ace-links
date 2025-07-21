import { Button } from "@mui/material";
import { LinkTreeFooterContainer } from "./LinkTreeFooter.styles";

export const EditableLinkTreeFooter: React.FC = () => {
  return (
    <LinkTreeFooterContainer sx={{ bottom: "3rem" }}>
      <Button variant="contained">Save changes</Button>
    </LinkTreeFooterContainer>
  );
};
