import { Avatar, Button, Input, Space } from "antd";
import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { colors } from "../constants/colors";

const HeaderComponent = () => {
  return (
    <div className="p-2 row bg-white">
      <div className="col">
        <Input
          placeholder="Search..."
          style={{ borderRadius: 100, width: "50%" }}
          size="large"
          prefix={<FiSearch className="text-muted" size={20} />}
        />
      </div>
      <div className="col text-right">
        <Space>
          <Button
            type="text"
            icon={
              <IoIosNotificationsOutline size={22} color={colors.gray600} />
            }
          ></Button>
          <Avatar
            src="https://lh3.googleusercontent.com/ogw/AF2bZygoWWvs9wVDGpLQtO6-7nAgVlgK_5tsos-Fij3tKYCjg_4=s64-c-mo"
            size={40}
          ></Avatar>
        </Space>
      </div>
    </div>
  );
};

export default HeaderComponent;
