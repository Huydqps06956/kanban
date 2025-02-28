import {
  Card,
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
  Space,
  message,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";
import handleApi from "../../apis/handleAPI";
import { useDispatch } from "react-redux";
import { addAuth } from "../../reduxs/reducers/authReducer";
import { localDataNames } from "../../constants/appInfos";

const { Title, Paragraph, Text } = Typography;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleLogin = async (values: { email: string; password: string }) => {
    const api = `/auth/login`;
    setIsLoading(true);
    try {
      const res: any = await handleApi(api, "post", values);
      message.success(res.message);
      res.data && dispatch(addAuth(res.data));
      if (isRemember) {
        localStorage.setItem(localDataNames.authData, JSON.stringify(res.data));
      }
    } catch (error: any) {
      message.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Card style={{ width: "100%" }}>
        <div className="text-center">
          <img
            className="mb-3"
            src="https://firebasestorage.googleapis.com/v0/b/kanban-7c749.firebasestorage.app/o/kanban-logo.png?alt=media&token=905dfef2-1036-45bb-bd45-4dc62aa1d306"
            alt="kanban-logo"
            style={{ width: "48px", height: "auto" }}
          />
          <Title level={2}>Login in to your account</Title>
          <Paragraph type="secondary">
            Welcome back! please enter your account
          </Paragraph>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={handleLogin}
          disabled={isLoading}
          size="large"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input allowClear maxLength={100} type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
          >
            <Input.Password maxLength={100} type="text" />
          </Form.Item>
        </Form>
        <div className="row">
          <div className="col">
            <Checkbox
              checked={isRemember}
              onChange={(val) => setIsRemember(val.target.checked)}
            >
              Remember for 30 days
            </Checkbox>
          </div>
          <div className="col text-right">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>

        <div className="mt-4 mb-3">
          <Button
            loading={isLoading}
            onClick={() => form.submit()}
            type="primary"
            style={{ width: "100%" }}
            size="large"
          >
            Login
          </Button>
        </div>
        <SocialLogin isRemember={isRemember} />
        <div className="mt-4 text-center">
          <Space>
            <Text>Don't have an account?</Text>
            <Link to="/sign-up">Sign up</Link>
          </Space>
        </div>
      </Card>
    </>
  );
};

export default Login;
