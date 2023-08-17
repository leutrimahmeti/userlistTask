import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import DeleteUserModal from "../components/userslist/DeleteUserModal";
import { LoadingSpinner } from "../components/common/LoadingSpinner";
import { Column, User } from "../types/types";
import SearchSection from "../components/userslist/SearchSection";
import TableHeader from "../components/userslist/TableHeader";
import TableBody from "../components/userslist/TableBody";
import PaginationSection from "../components/userslist/PaginationSection";

const UsersList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const columnMappings: { [key: string]: keyof User } = {
    firstName: "firstName",
    email: "email",
  };
  const [sortColumn, setSortColumn] = useState<Column>("firstName");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [userHasSorted, setUserHasSorted] = useState(false);

  const handleSort = useCallback(
    (column: Column) => {
      if (!userHasSorted) {
        setUserHasSorted(true);
      }

      if (column === sortColumn) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      } else {
        setSortColumn(column);
        setSortDirection("asc");
      }
    },
    [userHasSorted, sortColumn, sortDirection]
  );
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get<{ users: User[] }>(
          "https://dummyjson.com/users"
        );
        setData(response.data.users);
        setFilteredData(response.data.users);
      } catch (error) {
        setError("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteClick = (id: number) => {
    const selectedUser = filteredData.find((user) => user.id === id);
    if (selectedUser) {
      setSelectedUserId(selectedUser.id);
      setShowModal(true);
    }
  };

  const handleConfirmDelete = () => {
    const updatedData = data.filter((user) => user.id !== selectedUserId);
    setData(updatedData);
    setFilteredData(updatedData);
    setShowModal(false);
  };

  const handleSearchInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value.toLowerCase();
      setSearchQuery(query);

      const filtered = data.filter((user) => {
        return (
          user.firstName.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
        );
      });

      setFilteredData(filtered);
      setCurrentPage(1);
    },
    [data]
  );

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const renderTableRows = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let sortedData = [...filteredData];
    if (userHasSorted) {
      sortedData = [...filteredData].sort((a, b) => {
        const columnA = a[columnMappings[sortColumn]];
        const columnB = b[columnMappings[sortColumn]];

        if (typeof columnA === "string" && typeof columnB === "string") {
          const valueA = columnA.toLowerCase();
          const valueB = columnB.toLowerCase();
          return sortDirection === "asc"
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        } else if (typeof columnA === "number" && typeof columnB === "number") {
          return sortDirection === "asc"
            ? columnA - columnB
            : columnB - columnA;
        } else {
          return 0;
        }
      });
    }

    const currentData = sortedData.slice(startIndex, endIndex);

    return (
      <TableBody
        currentData={currentData}
        handleDeleteClick={handleDeleteClick}
      />
    );
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedTableRows = useMemo(
    () => renderTableRows(),
    [currentPage, filteredData, sortColumn, sortDirection]
  );

  if (error) {
    return (
      <div className="w-full h-full justify-center flex items-center text-3xl font-bold">
        {error}
      </div>
    );
  }
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SearchSection
            value={searchQuery}
            onChange={handleSearchInputChange}
          />

          <div className="overflow-x-auto">
            <table className="w-full">
              <TableHeader
                sortColumn={sortColumn}
                userHasSorted={userHasSorted}
                sortDirection={sortDirection}
                handleSort={handleSort}
              />
              {memoizedTableRows}
            </table>
          </div>

          <PaginationSection
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
      <DeleteUserModal
        showModal={showModal}
        handleConfirmDelete={handleConfirmDelete}
        handleCancelDelete={() => setShowModal(false)}
      />
    </>
  );
};

export default UsersList;
