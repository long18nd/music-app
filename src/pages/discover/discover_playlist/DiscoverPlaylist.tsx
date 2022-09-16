import PlayListItems from "@/pages/discover/discover_playlist/PlayListItems";
import { Col, Row } from "antd";

type Props = {
    data: any;
};
const DiscoverPlaylist = ({ data }: Props) => {
    return (
        <div className="pl-36 pr-36">
            <Row className="fs-20 fw-700 lh-30 text-black pl-12">{data.title}</Row>
            <Row>
                <div className="d-flex flex-direction-row">
                    {data &&
                        data.data &&
                        data.data.map((e: any) => {
                            return (
                                <Col span={5} className="pl-16 pr-16">
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
        </div>
    );
};

export default DiscoverPlaylist;
