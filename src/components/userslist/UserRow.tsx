import { AiFillDelete } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { User } from "../../types/types";

export interface UserRowProps {
  user: User;
  handleDeleteClick: (userId: number) => void;
}
const UserRow = ({ user, handleDeleteClick }: UserRowProps) => {
  return (
    <tr
      key={user.id}
      className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-3 items-center cursor-pointer"
    >
      <td>
        <div className="flex gap-4 items-center">
          <div className="bg-orange-100 p-3 rounded-lg">
            <img
              className="w-8 h-8"
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
            />
          </div>
          <h4 className="font-semibold">
            {user.firstName} {user.lastName}
          </h4>
        </div>
      </td>
      <td>
        <h4 className="font-semibold">{user.email}</h4>
      </td>
      <td className="flex gap-3 justify-end">
        <button
          className="text-black  hover:text-orange-600"
          onClick={() => handleDeleteClick(user.id)}
        >
          <AiFillDelete size={25} />
        </button>
        <Link
          to={`/user/${user.id}`}
          className="text-black hover:text-orange-600"
        >
          <BsArrowRightShort size={30} />
        </Link>
      </td>
    </tr>
  );
};

export default UserRow;
