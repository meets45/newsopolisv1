import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, url } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://img.icons8.com/dusk/344/google-news.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body"  style={{color : this.props.mode==="dark"?"white":"black", backgroundColor : this.props.mode==="dark"?"#198266":"white"}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className={`btn btn-sm btn-${this.props.mode==="light"?"primary":"dark"}`}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
