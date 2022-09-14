import axios from "axios";

const instance = axios.create({
    // baseURL: `${process.env.REACT_APP_BASE_URL_API}${process.env.REACT_APP_PATH_API}`,
    baseURL: "http://localhost:8080/api",
});

// custom response
instance.interceptors.response.use(
    (response) => {
        return response.data.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance;
