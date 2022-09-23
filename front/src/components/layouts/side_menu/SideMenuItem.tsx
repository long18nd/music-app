import { SidebarConfigMenuItem, SidebarConfigTypeCheck } from "@/configs/sidebar.config";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";


type Props = {
    item:  SidebarConfigMenuItem;
    navKey: string;
};


const SideMenuItem = ({ item, navKey }: Props) => {

    if (SidebarConfigTypeCheck.isSidebarConfigMenuItem(item)) {
        return (
            <Menu.Item eventKey={navKey} >
                <NavLink to={item.route.path}>
                    {item.customName}
                </NavLink>
            </Menu.Item>
        );
    }

    return null;
};

export default SideMenuItem;
