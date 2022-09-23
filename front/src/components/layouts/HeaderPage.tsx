import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import MInputSearch from "@/components/input/MInputSearch";
import SettingThemeIcon from "@/components/icons/SettingThemeIcon";
import VipIcon from "@/components/icons/VipIcon";
import UploadIcon from "@/components/icons/UploadIcon";
import SettingIcon from "@/components/icons/SettingIcon";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const HeaderPage = () => {
    return (
        <div>
            <div className="d-flex justify-space-between pl-60 pr-60 pt-12 pb-4">
                <div className="d-flex items-center">
                    <ArrowLeftIcon size={16} className="mr-16" />
                    <ArrowRightIcon size={16} className="mr-16" />
                    <MInputSearch
                        className="border-radius-lg"
                        style={{ width: "540px" }}
                        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                    />
                </div>
                <div className="d-flex items-center">
                    <SettingThemeIcon size={28} />
                    <VipIcon size={28} className="ml-12" />
                    <UploadIcon size={28} className="ml-12" />
                    <SettingIcon size={28} className="ml-12" />
                    <Avatar icon={<UserOutlined />} className="ml-12" />
                </div>
            </div>
        </div>
    );
};

export default HeaderPage;
