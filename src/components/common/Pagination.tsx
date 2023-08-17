import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageButtons = [];
  for (let page = 1; page <= totalPages; page++) {
    pageButtons.push(
      <button
        key={page}
        className={`px-2 w-8 py-1 rounded-md mx-1 ${
          page === currentPage
            ? "bg-orange-500 text-white"
            : "bg-gray-300 text-gray-800"
        }`}
        onClick={() => onPageChange(page)}
      >
        {page}
      </button>
    );
  }
  return (
    <div className="flex items-center">
      <button
        className="h-8 px-2 py-1 rounded-md mx-1 bg-gray-300 text-gray-800 flex items-center justify-center"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <AiOutlineLeft />
      </button>
      {pageButtons}
      <button
        className="h-8 px-2 py-1 rounded-md mx-1 bg-gray-300 text-gray-800 flex items-center justify-center"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default Pagination;
