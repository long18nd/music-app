import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import MInputSearch from "@/components/input/MInputSearch";

const HeaderPage = () => {
    return (
        <div className="pt-12">
            <div className="d-flex items-center">
                <ArrowLeftIcon size={16} className="mr-16" />
                <ArrowRightIcon size={16} className="mr-16" />
                <MInputSearch
                    className="border-radius-lg"
                    style={{ width: "540px" }}
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                />
            </div>
        </div>
    );
};

export default HeaderPage;
