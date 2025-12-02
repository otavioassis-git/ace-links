import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { MainPage } from "./pages/MainPage/MainPage";
import { NotFound } from "./pages/NotFound/NotFound";
import { AuthRouter } from "./modules/Auth/routes/Auth.router";
import { LinkTreeRouter } from "./modules/LinkTree/routes/LinkTree.router";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/*" element={<AuthRouter />} />
          <Route path="/user/*" element={<LinkTreeRouter />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
