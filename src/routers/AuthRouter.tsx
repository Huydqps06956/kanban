import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../screens/auth/SignUp";
import Login from "../screens/auth/Login";
import { Typography } from "antd";

const { Title } = Typography;

const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col d-none d-lg-block  text-center"
          style={{ marginTop: "15%" }}
        >
          <div className="mb-4">
            <img
              style={{ width: 256, objectFit: "cover" }}
              src="https://firebasestorage.googleapis.com/v0/b/kanban-7c749.firebasestorage.app/o/kanban-logo.png?alt=media&token=905dfef2-1036-45bb-bd45-4dc62aa1d306"
              alt="kanban-logo"
            />
          </div>
          <Title>KANBAN</Title>
        </div>
        <div className="col  offset-md-2 content-center">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default AuthRouter;
