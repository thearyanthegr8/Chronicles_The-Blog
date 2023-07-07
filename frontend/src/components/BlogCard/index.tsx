import React from "react";
import "./BlogCard.scss";
import moment from "moment";
import { Link } from "react-router-dom";

interface BlogCardProps {
  data: {
    blog_id: number;
    blog_title: string;
    blog_content: string;
    blog_date: string;
    user_id: number;
    blog_image: string;
  };
}

function BlogCard(props: BlogCardProps) {
  return (
    <Link to={`/blog/${props.data.blog_id}`}>
      <div className="BlogCard">
        <img src={props.data.blog_image} alt="" className="BlogCard__image" />
        <p className="BlogCard__date">
          {moment(props.data.blog_date).format("MMMM Do, YYYY")}
        </p>
        <h1 className="BlogCard__title">{props.data.blog_title}</h1>
        <p className="BlogCard__content">
          {props.data.blog_content.length > 250
            ? `${props.data.blog_content.substring(0, 100)}...`
            : props.data.blog_content}
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;
