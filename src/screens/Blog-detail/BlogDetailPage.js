import React, { useEffect, useState } from "react";
import UserLayout from "../../components/Layout/userlayout";
import BlogDetail from "../../components/Blog-detail/BlogDetail";
import { getEntity } from "../../api/commonServices";
import { useParams } from "react-router";

export const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setblog] = useState();
  const getBlog = async () => {
    try {
      const response = await getEntity(`/blog/${id}`);
      setblog(response.data);
      console.log("fdffdd", response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getBlog();
  }, []);

  return (
    <UserLayout>
      <BlogDetail
        image={blog?.image}
        title={blog?.title}
        description={blog?.short_description}
      />
    </UserLayout>
  );
};
