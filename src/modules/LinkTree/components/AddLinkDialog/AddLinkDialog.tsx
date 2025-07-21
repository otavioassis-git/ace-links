import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { LinkForm } from "../LinkForm/LinkForm";

type AddLinkDialogProps = {
  open: boolean;
  onClose: () => void;
};

export const AddLinkDialog: React.FC<AddLinkDialogProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Link</DialogTitle>
      <DialogContent>
        <LinkForm />
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
          onClick={onClose}
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
