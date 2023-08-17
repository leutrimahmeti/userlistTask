import React from "react";
import { AiFillWarning } from "react-icons/ai";

interface DeleteUserModalProps {
  showModal: boolean;
  handleConfirmDelete: () => void;
  handleCancelDelete: () => void;
}

const DeleteUserModal = ({
  showModal,
  handleConfirmDelete,
  handleCancelDelete,
}: DeleteUserModalProps) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 gap-6 flex flex-col rounded-xl shadow-md">
        <div className="flex gap-4 items-center">
          <AiFillWarning className="text-red-600 w-10 h-10" />
          <div className="text-lg font-semibold">
            Are you sure you want to delete this user?
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
            onClick={handleConfirmDelete}
          >
            Confirm
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            onClick={handleCancelDelete}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
