import PlayIcon from "@/components/icons/PlayIcon";
import { useState } from "react";
import { Col, Row } from "antd";

type Props = {
    link: string;
    thumbnail: string;
    title: string;
    artistsNames: string;
    song: any;
};

const ArtisChannelItem = ({ link, thumbnail, title, artistsNames, song }: Props) => {
    const [isCoverHover, setIsCoverHover] = useState<boolean>(false);

    return (
        <div style={{ maxHeight: "244px", maxWidth: "238px" }}>
            <div className="avatar-container bg-gray-70 position-relative">
                <img
                    className={`cursor-pointer w100p ${
                        isCoverHover ? "transform-scale-95 transition-duration-100" : ""
                    }`}
                    src={thumbnail}
                    alt={title}
                />
                <div className="pl-12 pr-12 w-152 items-center justify-center position-absolute fs-22 t-160 fw-800 text-white">
                    <div>{artistsNames}</div>
                </div>

                <div className="w100p d-flex flex-direction-row items-center justify-space-around pl-12 pr-12 w-152 position-absolute t-240">
                    {song.items.map((e: any, index: number) => {
                        if (index < 3) {
                            return (
                                <div key={index}>
                                    <img className="w-56 h-56" src={e.thumbnail} alt={e.title} />
                                </div>
                            );
                        }
                    })}
                </div>
                <div
                    onMouseOver={() => {
                        setIsCoverHover(true);
                    }}
                    onMouseOut={() => {
                        setIsCoverHover(false);
                    }}
                    className="avatar-overlay d-none bg-gray-100 opacity-80 position-absolute cursor-pointer items-center justify-center"
                >
                    <PlayIcon size={32} className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default ArtisChannelItem;
