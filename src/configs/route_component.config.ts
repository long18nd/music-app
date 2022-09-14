import { RouteName } from "@/configs/route.config";
import Discover from "@/pages/discover/Discover";
import ZingChart from "@/pages/zing_chart/ZingChart";
import Radio from "@/pages/radio/Radio";
import ListByGenre from "@/pages/list_by_genre/ListByGenre";
import NewSongs from "@/pages/new_songs/NewSongs";
import Hub from "@/pages/hub/Hub";
import Top100 from "@/pages/top_100/Top100";
import Mv from "@/pages/mv/Mv";
import MyMusic from "@/pages/my_music/MyMusic";

const RouteComponentConfig: {
    public: { name: RouteName; component: any }[];
    private: { name: RouteName; component: any }[];
} = {
    public: [
        { name: "DISCOVER", component: Discover },
        { name: "ZING_CHART", component: ZingChart },
        { name: "RADIO", component: Radio },
        { name: "LIST_BY_GENRE", component: ListByGenre },
        { name: "NEW_SONGS", component: NewSongs },
        { name: "HUB", component: Hub },
        { name: "TOP_100", component: Top100 },
        { name: "MV", component: Mv },
        { name: "MY_MUSIC", component: MyMusic },
    ],
    private: [
    ],
};

export default RouteComponentConfig;
