import { useDispatch, useSelector } from "react-redux";
import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";
import {
  addAuth,
  authSelector,
  AuthState,
} from "../reduxs/reducers/authReducer";
import { useEffect, useState } from "react";
import { localDataNames } from "../constants/appInfos";
import { Spin } from "antd";

const Routers = () => {
  const [isLoading, setIsLoading] = useState(false);

  const auth: AuthState = useSelector(authSelector);
  console.log(auth);
  const dispatch = useDispatch();

  const getData = () => {
    const res = localStorage.getItem(localDataNames.authData);
    res && dispatch(addAuth(JSON.parse(res)));
  };

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? <Spin /> : !auth.token ? <AuthRouter /> : <MainRouter />;
};

export default Routers;
