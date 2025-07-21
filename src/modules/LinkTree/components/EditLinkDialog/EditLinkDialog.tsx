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

type EditLinkDialogProps = {
  open: boolean;
  onClose: () => void;
  link: Link;
};
export const EditLinkDialog: React.FC<EditLinkDialogProps> = ({
  open,
  onClose,
  link: initialLink,
}) => {
  const { setData } = useEditableLinkTree();
  const [link, setLink] = useState<Link>({ ...initialLink });

  useEffect(() => {
    if (open) setLink({ ...initialLink });
  }, [open]);

  const onEdit = () => {
    setData((oldData) => {
      if (!oldData) return undefined;
      return {
        ...oldData,
        links: oldData.links.map((oldLink) => {
          if (oldLink.id === initialLink.id) {
            return { ...link };
          }
          return oldLink;
        }),
      };
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Link</DialogTitle>
      <DialogContent>
        <LinkForm link={link} setLink={setLink} />
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
          onClick={onEdit}
          sx={{
            "&:hover": {
              transform: "none !important",
            },
          }}
        >
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
