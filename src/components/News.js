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
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70d295416b8f40969b971d8bda89d60c&page=1&pageSize=${this.props.pageSize}`;
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
   console.log(parsedData);
    this.setState({articles: parsedData.articles,
       totalArticles: parsedData.totalResults,
      loading: false});
  }

  handleNextClick = async () =>{
    if(!(this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pageSize))){   
      this.setState({loading: true})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70d295416b8f40969b971d8bda89d60c&page=${this.state.page + 1 }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page : this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }
  handlePrevClick = async () =>{
    this.setState({loading: true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70d295416b8f40969b971d8bda89d60c&page=${this.state.page - 1 }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page : this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
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
        {/* <div className="container d-flex justify-content-between">
    <button disabled={this.state.page<=1} className='btn btn-primary' onClick={this.handlePrevClick}>&larr; Previous</button>
    <button disabled={this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pageSize)} className='btn btn-primary' onClick={this.handleNextClick}>Next &rarr;</button>
  </div>   */}
      </div>
    )
  }
}

export default News