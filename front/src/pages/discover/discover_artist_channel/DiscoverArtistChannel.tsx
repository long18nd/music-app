import { Col, Row } from "antd";
import ArtisChannelItem from "@/pages/discover/discover_artist_channel/ArtisChannelItem";

type Props = {
    data: any;
};
const DiscoverArtistChannel = ({ data }: Props) => {
    return (
        <div className="discover_playlist pl-36 pr-36">
            <Row className="fs-20 fw-700 lh-30 text-black pl-12">{data.title}</Row>
            <Row>
                <div className="d-flex flex-direction-row">
                    {data &&
                        data.data &&
                        data.data.map((e: any, index: number) => {
                            if (index < 5) {
                                return (
                                    <Col key={index} span={5} className="pl-16 pr-16">
                                        <ArtisChannelItem
                                            artistsNames={e.artistsNames}
                                            title={e.title}
                                            link={e.link}
                                            thumbnail={e.thumbnail}
                                            song={e.song}
                                        />
                                    </Col>
                                );
                            }
                        })}
                </div>
            </Row>
        </div>
    );
};

export default DiscoverArtistChannel;
