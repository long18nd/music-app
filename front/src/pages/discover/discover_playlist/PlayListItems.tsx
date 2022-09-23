import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PlayIcon from "@/components/icons/PlayIcon";
import AddLibraryIcon from "@/components/icons/AddLibraryIcon";
import ThreeDotsIcon from "@/components/icons/ThreeDots";
type Props = {
    link: string;
    thumbnail: string;
    title: string;
    sortDescription: string;
};
const PlayListItems = ({ link, thumbnail, title, sortDescription }: Props) => {
    const navigate = useNavigate();

    const [isCoverHover, setIsCoverHover] = useState<boolean>(false);

    return (
        <div style={{ maxHeight: "282px", maxWidth: "238px" }}>
            <div className="avatar-container bg-gray-70 position-relative">
                <img
                    className={`cursor-pointer w100p ${
                        isCoverHover ? "transform-scale-85 filter-blur-4 transition-duration-100" : ""
                    }`}
                    src={thumbnail}
                    alt={title}
                />
                <div
                    onMouseOver={() => {
                        setIsCoverHover(true);
                    }}
                    onMouseOut={() => {
                        setIsCoverHover(false);
                    }}
                    className="avatar-overlay d-none bg-gray-100 opacity-80 position-absolute cursor-pointer items-center justify-space-around"
                >
                    <AddLibraryIcon size={32} className="cursor-pointer" />
                    <PlayIcon size={32} className="cursor-pointer" />
                    <ThreeDotsIcon size={32} className="cursor-pointer" />
                </div>
            </div>

            <div>
                <div className="text-black fs-14 fw-700 text-purple-100-hover cursor-pointer">
                    <div onClick={() => navigate(link)}>{title}</div>
                </div>

                <div
                    className="text-gray-90 fs-14 fw-400 opacity-60"
                    style={{
                        maxWidth: "100%",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {sortDescription}
                </div>
            </div>
        </div>
    );
};

export default PlayListItems;
