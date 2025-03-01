import { Typography } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appInfo } from "../constants/appInfos";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

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
              src={appInfo.logo}
              alt="kanban-logo"
            />
          </div>
          <Title>KANBAN</Title>
        </div>
        <div className="col  content-center">
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
