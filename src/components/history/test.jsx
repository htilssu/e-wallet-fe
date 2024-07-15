
import {useState} from "react";
import Pagination from "../library component/ComponentPagination.jsx";
import {PinInput} from "@mantine/core";

const Example = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

    // Lấy các item hiện tại
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Thay đổi trang
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <PinInput length={5} />
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
}

export default Example;