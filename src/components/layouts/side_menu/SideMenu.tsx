import { Divider, Menu } from "antd";
import { useEffect, useState } from "react";
import RouteConfig from "@/configs/route.config";
import SidebarConfigs, { SidebarConfigTypeCheck } from "@/configs/sidebar.config";
import SideMenuItem from "@/components/layouts/side_menu/SideMenuItem";

const SideMenu = () => {
    const [openKeys, setOpenKeys] = useState<Array<string>>([]);

    const menuStateByLocation = () => {
        const tmpOpenKeys: Array<string> = [];

        for (const name of Object.keys(SidebarConfigs)) {
            const sidebarConfig = SidebarConfigs[name];
            if (SidebarConfigTypeCheck.isSidebarConfigMenuItem(sidebarConfig)) {
                if (location.pathname === sidebarConfig.route.path) {
                    break;
                }
            }
        }
        return { tmpOpenKeys };
    };

    useEffect(() => {
        if (
            Object.values(RouteConfig)
                .map((route) => route.path)
                .includes(location.pathname) ||
            location.pathname.startsWith("/user")
        ) {
            const { tmpOpenKeys } = menuStateByLocation();
            setOpenKeys(tmpOpenKeys);
        }
    }, [location.pathname]);

    return (
        <div>
            <Menu mode="inline" theme="dark" openKeys={openKeys} onOpenChange={(openKeys) => setOpenKeys(openKeys)}>
                {Object.keys(SidebarConfigs).map((name, index) => {
                    if (index <= 4) {
                        return <SideMenuItem item={SidebarConfigs[name]} key={"sidebar-item-" + index} navKey={name} />;
                    }
                })}
                <div className="pl-24 pr-24">
                    <Divider style={{ background: "#ffffff" }} />
                </div>
                {Object.keys(SidebarConfigs).map((name, index) => {
                    if (index > 4) {
                        return <SideMenuItem item={SidebarConfigs[name]} key={"sidebar-item-" + index} navKey={name} />;
                    }
                })}
            </Menu>
        </div>
    );
};

export default SideMenu;
