import React, { useEffect } from "react";
import api from "../../hooks/AxiosApi";
import moment from "moment";
import { Link } from "react-router-dom";
import "./Blog.scss";
import { userContext } from "../../context/userContext";
import { useUserDetails } from "../../hooks/userDetails";

class Blog extends React.Component<{}, { blogData: any; author: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      blogData: {},
      author: {},
    };
  }

  componentDidMount(): void {
    api
      .get("/getBlog/" + window.location.pathname.split("/")[2])
      .then((res) => {
        this.setState({ blogData: res.data });
        return api.get(`/getAuthor/${res.data[0]?.user_id}`);
      })
      .then((res) => {
        this.setState({ author: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="BlogPage">
        <div className="BlogPage__links">
          <div className="BlogPage__links--left">
            <p>2 minutes read</p>
            <span />
            <p>
              {moment(this.state.blogData[0]?.blog_date).format(
                "MMMM Do, YYYY"
              )}
            </p>
          </div>
          <div className="BlogPage__links--right">
            <Link to="">
              <img src="/images/icons/linkedin.svg" alt="" />
            </Link>
            <Link to="">
              <img src="/images/icons/facebook.svg" alt="" />
            </Link>
            <Link to="">
              <img src="/images/icons/instagram.svg" alt="" />
            </Link>
            <Link to="">
              <span data-icon={String.fromCharCode(59405)} />
            </Link>
            <button>
              <span data-icon={String.fromCharCode(58836)} />
            </button>
          </div>
        </div>

        <div className="BlogPage__blog">
          <h1 className="BlogPage__blog--title">
            {this.state.blogData[0]?.blog_title}
          </h1>
          <div className="BlogPage__blog--header">
            <div className="BlogPage__blog--header-author">
              <img
                src={`https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${this.state.author[0]?.user_name}`}
                alt="User avatar"
              />
              <div className="BlogPage__blog--header-column">
                <p>{this.state.author[0]?.Name}</p>
                <p>Blog Tags</p>
              </div>
            </div>
            <div className="BlogPage__blog--header-stats">
              <div className="BlogPage__blog--header-stat">
                <span data-icon={String.fromCharCode(59517)} />
                <p>{this.state.blogData[0]?.blog_like_count}</p>
              </div>
              <div className="BlogPage__blog--header-stat">
                <span data-icon={String.fromCharCode(57529)} />
                <p>{this.state.blogData[0]?.blog_comment_count}</p>
              </div>
            </div>
          </div>
          <img
            src={this.state.blogData[0]?.blog_image}
            alt=""
            className="BlogPage__blog--coverImage"
          />
          <p className="BlogPage__blog--body">
            {this.state.blogData[0]?.blog_content}
          </p>
        </div>
        <userContext.Consumer>
          {(value) => {
            return (
              <div className="BlogPage__floatingButtons">
                <button>
                  <span data-icon={String.fromCharCode(59517)} />
                </button>
                <button>
                  <span data-icon={String.fromCharCode(57527)} />
                </button>
                {value.user?.id === this.state.blogData[0]?.user_id && (
                  <button>
                    <span data-icon={String.fromCharCode(58313)} />
                  </button>
                )}
              </div>
            );
          }}
        </userContext.Consumer>
      </div>
    );
  }
}

export default Blog;
