export type RouteName = "LOGIN" | "HOME";
export type RouteInfo = {
    path: string;
    name: string;
    roles?: string[];
};

const RouteConfig: { [name in RouteName]: RouteInfo } = {
    LOGIN: {
        path: "/login",
        name: "Login",
    },
    HOME: {
        path: "/",
        name: "Home",
    },
};

export default RouteConfig;
