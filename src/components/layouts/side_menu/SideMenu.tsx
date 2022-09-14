import SidebarConfigs, { SidebarConfigTypeCheck } from "@/configs/sidebar.config";
import { Menu } from "antd";
import SideMenuItem from "./SideMenuItem";
import { useEffect, useState } from "react";
import RouteConfig from "@/configs/route.config";

const SideMenu = () => {
    const [selectedKeys, setSelectedKeys] = useState<any>([]);
    const [openKeys, setOpenKeys] = useState<any>([]);

    const menuStateByLocation = () => {
        const tmpSelectedKeys = [];
        const tmpOpenKeys = [];

        for (const name of Object.keys(SidebarConfigs)) {
            const sidebarConfig = SidebarConfigs[name];
            if (SidebarConfigTypeCheck.isSidebarConfigSubMenu(sidebarConfig)) {
                for (const childName of Object.keys(sidebarConfig.items)) {
                    // special case for User Detail route
                    // if (
                    //     location.pathname.startsWith("/user") &&
                    //     sidebarConfig.items[childName].route.path === RouteConfig.MANAGE_USER.path
                    // ) {
                    //     tmpSelectedKeys.push(childName);
                    //     tmpOpenKeys.push(name);
                    //     break;
                    // }
                    if (location.pathname === sidebarConfig.items[childName].route.path) {
                        tmpSelectedKeys.push(childName);
                        tmpOpenKeys.push(name);
                        break;
                    }
                    if (tmpOpenKeys.length > 0) break;
                }
            }
            if (SidebarConfigTypeCheck.isSidebarConfigMenuItem(sidebarConfig)) {
                if (location.pathname === sidebarConfig.route.path) {
                    tmpSelectedKeys.push(name);
                    break;
                }
            }
        }
        return { tmpSelectedKeys, tmpOpenKeys };
    };

    useEffect(() => {
        if (
            Object.values(RouteConfig)
                .map((route) => route.path)
                .includes(location.pathname) ||
            location.pathname.startsWith("/user")
        ) {
            const { tmpSelectedKeys, tmpOpenKeys } = menuStateByLocation();
            setSelectedKeys(tmpSelectedKeys);
            setOpenKeys(tmpOpenKeys);
        }
    }, [location.pathname]);

    return (
        <Menu
            mode="inline"
            theme="dark"
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            onOpenChange={(openKeys) => setOpenKeys(openKeys)}
        >
            {Object.keys(SidebarConfigs).map((name, index) => (
                <SideMenuItem item={SidebarConfigs[name]} key={"sidebar-item-" + index} navKey={name} />
            ))}
        </Menu>
    );
};

export default SideMenu;
