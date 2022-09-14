import RouteConfig, { RouteInfo } from "@/configs/route.config";


export type SidebarConfigMenuItem = {
    route: RouteInfo;
    customName?: string;
    icon?: any;
};

export const SidebarConfigTypeCheck = {
    isSidebarConfigMenuItem(object: unknown): object is SidebarConfigMenuItem {
        return typeof object === "object" && object != null && "route" in object;
    },
};

const SidebarConfigs: { [key: string]: SidebarConfigMenuItem } = {
    MY_MUSIC: {
        route: RouteConfig.MY_MUSIC,
        customName: "Cá Nhân",
    },
    DISCOVER: {
        route: RouteConfig.DISCOVER,
        customName: "Khám Phá",
    },
    ZING_CHART: {
        route: RouteConfig.ZING_CHART,
        customName: "#zingchart",
    },
    RADIO: {
        route: RouteConfig.RADIO,
        customName: "Radio",
    },
    LIST_BY_GENRE: {
        route: RouteConfig.LIST_BY_GENRE,
        customName: "Theo Dõi",
    },
    NEW_SONGS: {
        route: RouteConfig.NEW_SONGS,
        customName: "Nhạc Mới",
    },
    HUB: {
        route: RouteConfig.HUB,
        customName: "Thể Loại",
    },
    TOP_100: {
        route: RouteConfig.TOP_100,
        customName: "TOP 100",
    },
    MV: {
        route: RouteConfig.MV,
        customName: "MV",
    },
};

export default SidebarConfigs;
