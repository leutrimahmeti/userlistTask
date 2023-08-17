import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { Post, User } from "../types/types";
import { MdAddReaction } from "react-icons/md";
import { LoadingSpinner } from "../components/common/LoadingSpinner";
import PostItem from "../components/userdetails/PostItem";

const UserDetails: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const userRequest = axios.get(`https://dummyjson.com/users/${userId}`);
    const postsRequest = axios.get(
      `https://dummyjson.com/posts/user/${userId}`
    );

    Promise.all([userRequest, postsRequest])
      .then(([userResponse, postsResponse]) => {
        setUser(userResponse.data);
        const limitedPosts: Post[] = postsResponse.data.posts.slice(0, 10);
        setPosts(limitedPosts);
      })
      .catch((error) => {
        setError("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId]);

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
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-orange-500">
              <BsArrowLeftShort size={30} />
            </Link>
            <h4 className="font-semibold text-lg">
              Posts of {user?.firstName} {user?.lastName}{" "}
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {posts?.map((post, index) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default UserDetails;
