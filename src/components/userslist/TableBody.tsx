import React from "react";
import { User } from "../../types/types";
import UserRow from "./UserRow";

interface TableBodyProps {
  currentData: User[];
  handleDeleteClick: (id: number) => void;
}

const TableBody: React.FC<TableBodyProps> = ({
  currentData,
  handleDeleteClick,
}) => (
  <tbody>
    {currentData.map((user) => (
      <UserRow
        key={user.id}
        user={user}
        handleDeleteClick={handleDeleteClick}
      />
    ))}
  </tbody>
);

export default TableBody;
