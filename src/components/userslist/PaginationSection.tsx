import React from "react";
import Pagination from "../common/Pagination";

interface PaginationSectionProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationSection: React.FC<PaginationSectionProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => (
  <div className="flex justify-end mt-4">
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  </div>
);

export default PaginationSection;
