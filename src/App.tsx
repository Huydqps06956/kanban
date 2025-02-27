import { ConfigProvider, message } from "antd";
import "./App.css";
import Routers from "./routers/Routers";
import { Provider } from "react-redux";
import store from "./reduxs/store";

message.config({
  top: 30,
  duration: 2,
  maxCount: 3,
  rtl: true,
  prefixCls: "my-message",
});

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {},
        token: {
          colorTextHeading: "#1570EF",
        },
      }}
    >
      <Provider store={store}>
        <Routers />
      </Provider>
    </ConfigProvider>
  );
}

export default App;
