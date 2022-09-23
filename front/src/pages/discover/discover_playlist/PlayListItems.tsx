import { useNavigate } from "react-router-dom";
import { useState } from "react";
type Props = {
    link: string;
    thumbnail: string;
    title: string;
    sortDescription: string;
};
const PlayListItems = ({ link, thumbnail, title, sortDescription }: Props) => {
    const [isCoverHover, setCoverHover] = useState(false);
    const navigate = useNavigate();
    return (
        <div style={{ maxHeight: "282px", maxWidth: "238px" }}>
            <div>
                <div onClick={() => navigate(link)}>
                    <img
                        className="cursor-pointer w100p"
                        src={thumbnail}
                        alt={title}
                        onMouseOver={() => {
                            setCoverHover(true);
                        }}
                        onMouseOut={() => {
                            setCoverHover(false);
                        }}
                    />
                </div>

                {/*<div*/}
                {/*    //           className={`absolute top-3 w-full h-full z-[-1] bg-cover rounded-xl blur-lg scale-95 transition-opacity duration-300 ${*/}
                {/*    //               isCoverHover === false ? "opacity-0" : "opacity-100"*/}
                {/*    //           }*/}
                {/*    // `}*/}
                {/*    // className={isCoverHover === false ? "opacity-0" : "opacity-100"}*/}
                {/*    style={{*/}
                {/*        backgroundImage: `url(${thumbnail})`,*/}
                {/*    }}*/}
                {/*/>*/}
            </div>

            <div>
                <div className="text-black fs-14 fw-700">
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
