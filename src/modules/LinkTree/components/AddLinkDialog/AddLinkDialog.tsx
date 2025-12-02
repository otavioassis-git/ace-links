import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { LinkForm } from "../LinkForm/LinkForm";
import { useEffect, useState } from "react";
import { useEditableLinkTree } from "../../hooks/EditableLinkTreeHook";

type AddLinkDialogProps = {
  open: boolean;
  onClose: () => void;
};

const initialLink: Link = {
  id: "",
  title: "Link Name",
  url: "",
  rank: 0,
  background: "",
  icon: "",
  description: "",
};

export const AddLinkDialog: React.FC<AddLinkDialogProps> = ({
  open,
  onClose,
}) => {
  const [link, setLink] = useState<Link>({ ...initialLink });
  const [isError, setIsError] = useState(true);
  const { setData } = useEditableLinkTree();

  useEffect(() => {
    if (open) setLink({ ...initialLink });
  }, [open]);

  const onAdd = () => {
    setData((oldData) => {
      if (!oldData) return undefined;
      return {
        ...oldData,
        links: [...oldData.links, { ...link, id: `new-link-${link.title}` }],
      };
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Link</DialogTitle>
      <DialogContent>
        <LinkForm link={link} setLink={setLink} setIsError={setIsError} />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            "&:hover": {
              transform: "none !important",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={onAdd}
          disabled={isError}
          sx={{
            "&:hover": {
              transform: "none !important",
            },
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
