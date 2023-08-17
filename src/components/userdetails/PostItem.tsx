import { MdAddReaction } from "react-icons/md";
import { Post } from "../../types/types";

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 border-2 border-orange-300 transition duration-300 ease-in-out transform hover:bg-orange-500 hover:text-white h-[320px] flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl ">{post.title}</div>
        <div className="text-gray-700">{post.body.substring(0, 100)}...</div>
        <div className="flex items-center">
          <MdAddReaction className="mr-1" />
          <span className="font-bold text-lg">{post.reactions}</span>
        </div>
        <div>
          {post.tags.map((tag, idx) => (
            <span
              className="bg-black text-white rounded-md px-3 py-1 text-xs mr-2 mb-2"
              key={idx}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="self-end">
        <button className="inline-block py-2 px-4 border border-black hover:border-white rounded-md hover:scale-95 transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default PostItem;
