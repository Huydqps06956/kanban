import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../screens/auth/SignUp";
import Login from "../screens/auth/Login";

const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 d-none d-md-block">
          {/* <img src="" alt="" /> */}
          logo
        </div>
        <div className="col-8 content-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default AuthRouter;
