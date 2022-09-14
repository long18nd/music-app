import RouteConfig, { RouteInfo } from "@/configs/route.config";

export type SidebarConfigSubMenu = {
    title: string;
    items: { [key: string]: SidebarConfigMenuItem };
    icon?: any;
};

export type SidebarConfigMenuItem = {
    route: RouteInfo;
    customName?: string;
    icon?: any;
};

export const SidebarConfigTypeCheck = {
    isSidebarConfigSubMenu(object: unknown): object is SidebarConfigSubMenu {
        return typeof object === "object" && object != null && "items" in object;
    },
    isSidebarConfigMenuItem(object: unknown): object is SidebarConfigMenuItem {
        return typeof object === "object" && object != null && "route" in object;
    },
};

const SidebarConfigs: { [key: string]: SidebarConfigSubMenu | SidebarConfigMenuItem } = {
    MY_MUSIC: {
        route: RouteConfig.MY_MUSIC,
        customName: "MY_MUSIC",
    },
    DISCOVER: {
        route: RouteConfig.DISCOVER,
        customName: "DISCOVER",
    },
    ZING_CHART: {
        route: RouteConfig.ZING_CHART,
        customName: "ZING_CHART",
    },
    RADIO: {
        route: RouteConfig.RADIO,
        customName: "RADIO",
    },
    LIST_BY_GENRE: {
        route: RouteConfig.LIST_BY_GENRE,
        customName: "LIST_BY_GENRE",
    },
    NEW_SONGS: {
        route: RouteConfig.NEW_SONGS,
        customName: "NEW_SONGS",
    },
    HUB: {
        route: RouteConfig.HUB,
        customName: "HUB",
    },
    TOP_100: {
        route: RouteConfig.TOP_100,
        customName: "TOP_100",
    },
    MV: {
        route: RouteConfig.MV,
        customName: "MV",
    },
};

export default SidebarConfigs;
