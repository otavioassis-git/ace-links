import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./router";
import { getTheme } from "./theme";
import { useTheme } from "./hooks/ThemeHook";
import { LoginProvider } from "./hooks/LoginHook";
import { ToastProvider } from "./hooks/ToastHook";
import { Toast } from "./components/Toast/Toast";

const queryClient = new QueryClient();

function App() {
  const { theme } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={getTheme(theme)}>
        <LoginProvider>
          <ToastProvider>
            <Toast />
            <CssBaseline />
            <Router />
          </ToastProvider>
        </LoginProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
