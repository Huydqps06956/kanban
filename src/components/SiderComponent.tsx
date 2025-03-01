import { Layout, Menu, MenuProps, Typography } from "antd";
import { BiUserCircle } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { FiBarChart, FiBox, FiHome } from "react-icons/fi";
import { MdOutlineInventory } from "react-icons/md";
import { Link } from "react-router-dom";
import { appInfo } from "../constants/appInfos";
import { colors } from "../constants/colors";
const { Sider } = Layout;
const { Text } = Typography;

type MenuItem = Required<MenuProps>["items"][number];

const SiderComponent = () => {
  const menus: MenuItem[] = [
    {
      key: "dashboard",
      label: <Link to="/">Dashboard</Link>,
      icon: <FiHome size={20} />,
    },
    {
      key: "inventory",
      label: <Link to="/inventory">Inventory</Link>,
      icon: <MdOutlineInventory size={20} />,
    },
    {
      key: "report",
      label: <Link to="/report">Report</Link>,
      icon: <FiBarChart size={20} />,
    },
    {
      key: "suppliers",
      label: <Link to="/suppliers">Suppliers</Link>,
      icon: <BiUserCircle size={20} />,
    },
    {
      key: "orders",
      label: <Link to="/orders">Orders</Link>,
      icon: <FiBox size={20} />,
    },
    {
      key: "manage store",
      label: <Link to="/manage-store">Manage Store</Link>,
      icon: <CiViewList size={20} />,
    },
  ];
  return (
    <Sider theme="light" style={{ height: "100vh" }}>
      <div className="p-2 d-flex align-items-center ">
        <img src={appInfo.logo} alt="logo" width={48} />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: "1.5",
            color: colors.primary500,
            margin: 0,
          }}
        >
          {appInfo.title}
        </Text>
      </div>
      <Menu items={menus} theme="light" />
    </Sider>
  );
};

export default SiderComponent;
