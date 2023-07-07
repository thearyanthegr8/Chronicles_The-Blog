import React, { useEffect } from "react";
import "./BlogCard.scss";
import moment from "moment";
import { Link } from "react-router-dom";
import api from "../../hooks/AxiosApi";
import Skeleton from "@mui/material/Skeleton";

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
  const [author, setAuthor] = React.useState<any>({});

  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    api
      .get(`/getAuthor/${props.data.user_id}`)
      .then((res) => {
        setAuthor(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Link to={`/blog/${props.data.blog_id}`}>
      <div className="BlogCard">
        <div className="BlogCard__left">
          <div className="BlogCard__left--author">
            {loading ? (
              <Skeleton variant="circular" width={35} height={35} />
            ) : (
              <img
                src={`https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${author[0]?.user_name}`}
                alt=""
                className="BlogCard__left--author-image"
              />
            )}
            {loading ? (
              <Skeleton variant="rectangular" width={200} height={35} />
            ) : (
              <div className="BlogCard__left--author-column">
                <div className="BlogCard__left--author-row">
                  <div className="BlogCard__left--author-name">
                    {author[0]?.Name}
                  </div>
                  <span className="BlogCard__left--author-span" />
                  {moment(props.data.blog_date).format("MMMM Do, YYYY")}
                </div>
                Founder of chronicles
              </div>
            )}
          </div>
          <div className="BlogCard__left--contents">
            <h1 className="BlogCard__left--contents-title">
              {loading ? (
                <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
              ) : (
                props.data.blog_title
              )}
            </h1>
            {loading ? (
              <Skeleton variant="rectangular" height={70} width={600} />
            ) : (
              <p className="BlogCard__left--contents-content">
                {props.data.blog_content.length > 300
                  ? `${props.data.blog_content.substring(0, 300)}...`
                  : props.data.blog_content}
              </p>
            )}
          </div>
          <div className="BlogCard__left--tags">
            {loading ? (
              <Skeleton variant="rectangular" height={35} width={300} />
            ) : (
              <>
                <span className="BlogCard__left--tags-tag">UI Design</span>
                <span className="BlogCard__left--tags-tag">AI</span>
                <span className="BlogCard__left--tags-tag">4 min read</span>
              </>
            )}
          </div>
        </div>
        <div className="BlogCard__right">
          {loading ? (
            <Skeleton variant="rounded" height={135} width={240} />
          ) : (
            <img src={props.data.blog_image} alt="" />
          )}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
