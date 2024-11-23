import React from "react";
import "./BlogDetail.css";
import { imgUrl } from "../../utils/convertToFormData";
import CustomBanner from "../CustomBanner";

const BlogDetail = ({ image, title, description }) => {
  const img = `${imgUrl}/${image}`;
  return (
    <>
      <CustomBanner text="blog detail" />

      <div className="blog-container">
        <img src={img} alt={title} className="blog-image" />
        <div className="text-content">
          <h1 className="blog-title">{title}</h1>
          <p className="blog-description">{description}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
