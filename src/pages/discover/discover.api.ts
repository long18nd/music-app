import { ApiResponse } from "@/types/api";
import { appApi } from "@/api";
import { API } from "@/configs/api.config";

import axios from "@/utils/axios";

interface dataType {
    items: [];
    sectionType: string;
}

export type DataDiscoverResponse = ApiResponse<any>;

export const discoverApi = appApi.injectEndpoints({
    endpoints: (builder) => ({
        discover: builder.query<DataDiscoverResponse, void>({
            query: (query) => ({
                url: API.DISCOVER,
                method: "GET",
            }),
        }),
    }),
});

export const { useDiscoverQuery } = discoverApi;

const getHomePlayList = async () => {
    try {
        const data: dataType = await axios.get("/home");
        return data.items;
    } catch (err) {
        console.log(err);
    }
};

export { getHomePlayList };
