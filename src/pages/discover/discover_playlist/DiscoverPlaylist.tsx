import PlayListItems from "@/pages/discover/discover_playlist/PlayListItems";
import { Col, Row } from "antd";

type Props = {
    data: any;
};
const DiscoverPlaylist = ({ data }: Props) => {
    console.log(data);
    return (
        <Row>
            <div className="d-flex flex-direction-row pl-48 pr-48">
                {data &&
                    data.map((e: any) => {
                        return (
                            <Col span={4}>
                                <PlayListItems
                                    link={e.link}
                                    thumbnail={e.thumbnail}
                                    title={e.title}
                                    sortDescription={e.sortDescription}
                                />
                            </Col>
                        );
                    })}
            </div>
        </Row>
    );
};

export default DiscoverPlaylist;
