//itemsPerPage (items) được hiển thị trên mỗi trang
//totalItems tổng số mục trong danh sách dữ liệu
//paginate hàm callback được sử dụng để xử lý sự kiện
//currentPage: Đây là số trang hiện tại đang được hiển thị

import {GrFormNext, GrFormPrevious} from "react-icons/gr";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];
    const maxPageNumbers = 5;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            paginate(currentPage + 1);
        }
    };

    return (
        <nav className="flex justify-center my-4">
            <ul className="inline-flex -space-x-px gap-1">
                <li>
                    <button
                        onClick={handlePrevPage}
                        className="rounded-full page-link px-3 py-2 leading-tight border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:text-blue-700"
                    >
                        <GrFormPrevious  size={20}/>
                    </button>
                </li>
                {pageNumbers.slice(startPage - 1, endPage).map(number => (
                    <li key={number} className="page-item">
                        <button
                            onClick={() => paginate(number)}
                            className={`page-link px-3 py-2 leading-tight border border-gray-300 ${
                                number === currentPage
                                    ? 'bg-green-500 text-white border-blue-500'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-blue-700'
                            }`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={handleNextPage}
                        className="rounded-full page-link px-3 py-2 leading-tight border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:text-blue-700"
                    >
                        <GrFormNext  size={20}/>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;