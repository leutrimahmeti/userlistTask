import React from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

type Column = "firstName" | "email";

interface TableHeaderProps {
  sortColumn: Column; // Change the type here
  userHasSorted: boolean;
  sortDirection: "asc" | "desc";
  handleSort: (column: Column) => void; // Adjust the parameter type here
}

const TableHeader: React.FC<TableHeaderProps> = ({
  sortColumn,
  userHasSorted,
  sortDirection,
  handleSort,
}) => (
  <thead>
    <tr className="p-2 text-left grid grid-cols-3 items-center cursor-pointer">
      <th
        onClick={() => handleSort("firstName")}
        className="flex items-center gap-2"
      >
        Name
        {sortColumn === "firstName" && userHasSorted && (
          <span>
            {sortDirection === "asc" ? (
              <AiOutlineSortAscending />
            ) : (
              <AiOutlineSortDescending />
            )}
          </span>
        )}
      </th>
      <th
        onClick={() => handleSort("email")}
        className="flex items-center gap-2"
      >
        Email
        {sortColumn === "email" && (
          <span>
            {sortDirection === "asc" ? (
              <AiOutlineSortAscending />
            ) : (
              <AiOutlineSortDescending />
            )}
          </span>
        )}
      </th>
      <th className="text-right">Actions</th>
    </tr>
  </thead>
);

export default TableHeader;
