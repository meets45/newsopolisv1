import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 15,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){
    super();
    this.state = {
        articles : [],
        loading : false,
        page : 1,
    }
  }
  async componentDidMount(){
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
   console.log(parsedData);
    this.setState({articles: parsedData.articles,
       totalArticles: parsedData.totalResults,
      loading: false});
  }
  render() {
    return (
      <div>
        <div className='container my-3'>
          <h1 className='text-center' style={{color : this.props.mode==="dark"?"white":"black",margin: "30px 0px"}}>
          Newsopolis - Top Headlines
          </h1>
          {this.state.loading && <Spinner/>}
          <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}><NewsItem mode={this.props.mode} title={element.title} description={element.description} imgUrl={element.urlToImage} url={element.url}/>  </div>
          })}
        </div>
        </div>
      </div>
    )
  }
}

export default News
