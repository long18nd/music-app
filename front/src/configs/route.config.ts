export type RouteName =
    | "MY_MUSIC"
    | "DISCOVER"
    | "ZING_CHART"
    | "RADIO"
    | "LIST_BY_GENRE"
    | "NEW_SONGS"
    | "HUB"
    | "TOP_100"
    | "MV";
export type RouteInfo = {
    path: string;
    name: string;
    roles?: string[];
};

const RouteConfig: { [name in RouteName]: RouteInfo } = {
    MY_MUSIC: {
        path: "/my-music",
        name: "My music",
    },
    DISCOVER: {
        path: "/",
        name: "Discover",
    },
    ZING_CHART: {
        path: "/zing-chart",
        name: "Zing chart",
    },
    RADIO: {
        path: "/radio",
        name: "Radio",
    },
    LIST_BY_GENRE: {
        path: "/list-by-genre",
        name: "List by genre",
    },
    NEW_SONGS: {
        path: "/new-songs",
        name: "New songs",
    },
    HUB: {
        path: "/hub",
        name: "Hub",
    },
    TOP_100: {
        path: "/top-100",
        name: "Top",
    },
    MV: {
        path: "/mv",
        name: "MV",
    },
};

export default RouteConfig;
