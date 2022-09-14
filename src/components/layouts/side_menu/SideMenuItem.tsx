import { SidebarConfigMenuItem, SidebarConfigSubMenu, SidebarConfigTypeCheck } from "@/configs/sidebar.config";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

type Props = {
    item: SidebarConfigSubMenu | SidebarConfigMenuItem;
    navKey: string;
};

const SideMenuItem = ({ item, navKey }: Props) => {
    const { t } = useTranslation();

    if (SidebarConfigTypeCheck.isSidebarConfigSubMenu(item)) {
        const items: { [key: string]: SidebarConfigMenuItem } = item.items;
        return (
            <SubMenu
                {...{
                    eventKey: navKey,
                }}
                title={t(`route:${item.title}`)}
                icon={<item.icon />}
            >
                {Object.keys(items).map((name, index) => (
                    <Menu.Item key={name + index} eventKey={name}>
                        <NavLink to={items[name].route.path}>
                            {t(`route:${items[name].customName || items[name].route.name}`)}
                        </NavLink>
                    </Menu.Item>
                ))}
            </SubMenu>
        );
    }

    if (SidebarConfigTypeCheck.isSidebarConfigMenuItem(item)) {
        return (
            <Menu.Item eventKey={navKey} icon={<item.icon />}>
                <NavLink to={item.route.path}>{t(`route:${item.customName || item.route.name}`)}</NavLink>
            </Menu.Item>
        );
    }

    return null;
};

export default SideMenuItem;
