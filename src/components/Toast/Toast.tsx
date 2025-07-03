import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useToast } from "../../hooks/ToastHook";

export const Toast: React.FC = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (toast) {
      setOpen(true);
    }
  }, [toast]);

  return (
    <>
      {toast && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          onClose={() => setOpen(false)}
          autoHideDuration={5000}
        >
          <Alert severity={toast.type} onClose={() => setOpen(false)}>
            {toast.title && <AlertTitle>{toast.title}</AlertTitle>}
            {toast.message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};
