// import { useDiscoverQuery } from "@/pages/discover/discover.api";
// import { useSearchParams } from "react-router-dom";
import { getHomePlayList } from "@/pages/discover/discover.api";
import { useEffect, useState } from "react";
import DiscoverGallery from "@/pages/discover/discover_gallery/DiscoverGallery";
import DiscoverPlaylist from "@/pages/discover/discover_playlist/DiscoverPlaylist";
import DiscoverNewRelease from "@/pages/discover/discover_new_release/DiscoverNewRelease";
import DiscoverArtistChannel from "@/pages/discover/discover_artist_channel/DiscoverArtistChannel";
import DiscoverMusicOnDay from "@/pages/discover/discover_music_on_day/DiscoverMusicOnDay";
import DiscoverZingChart from "@/pages/discover/discover_zingchart/DiscoverZingChart";

type DataPropsDiscover = {
    title: string;
    data: [];
};

const Discover = () => {
    const [data, setData] = useState<Array<any> | undefined>();
    // const [searchParams, setSearchParams] = useSearchParams();
    // const { data, isLoading } = useDiscoverQuery();

    useEffect(() => {
        (async () => {
            setData(await getHomePlayList());
        })();
    }, []);

    let dataPlayList: DataPropsDiscover = { data: [], title: "" };
    let dataArtisChannel: DataPropsDiscover = { data: [], title: "" };

    if (data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].sectionType == "playlist" && data[i].sectionId == "hAutoTheme1") {
                const valuePlayList: DataPropsDiscover = { data: [], title: "" };
                valuePlayList.data = data[i].items;
                valuePlayList.title = data[i].title;
                dataPlayList = valuePlayList;
            }
            if (data[i].sectionType == "mix" && data[i].sectionId == "hMix") {
                const valuePlayList: DataPropsDiscover = { data: [], title: "" };
                valuePlayList.data = data[i].items;
                valuePlayList.title = data[i].title;
                dataArtisChannel = valuePlayList;
            }
        }
    }

    return (
        <>
            <div>
                <DiscoverGallery />
                <DiscoverNewRelease />
                <DiscoverPlaylist data={dataPlayList} />
                <DiscoverArtistChannel data={dataArtisChannel} />
                <DiscoverMusicOnDay />
                <DiscoverZingChart />
            </div>
        </>
    );
};

export default Discover;
