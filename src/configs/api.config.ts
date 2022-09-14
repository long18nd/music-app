const viteBase = import.meta.env.VITE_API_BASE_URL;

export const API = {
    BASE: viteBase,

    AUTH_LOGIN: "/auth/login",
    AUTH_CHECK: "auth/check",
    AUTH_LOGOUT: "auth/logout",
};
