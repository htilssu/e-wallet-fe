import {useState} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import ScrollableCardList from "../home/ScrollableCardList.jsx";
import Slider from "../library component/Slider.jsx";
import Pagination from "../library component/Pagination.jsx";

const Example = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const items = Array.from({length: 100}, (_, index) => `Item ${index + 1}`);
    // Lấy các item hiện tại
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    // Thay đổi trang
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="mt-4">
                <div className={"flex flex-col justify-center"}>
                    <div className={"rs-text-medium text-lg"}>
                        Có thể bạn quan tâm
                    </div>
                    <div>
                        <Slider/>
                    </div>
                </div>
            </div>

            <div className="App max-w-3xl">
                <h1 className="text-2xl font-bold text-center mt-8">Scrollable Card List Example</h1>
                <ScrollableCardList/>
            </div>

            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Pagination Example</h1>
                <ul className="list-disc pl-5 mb-4">
                    {currentItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={items.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};

export default Example;