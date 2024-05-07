import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country: "in",
    catagary: "general",
    pageSize: 8,
  }
  static propTypes={
    country: PropTypes.string,
    catagary:PropTypes.string,
    pageSize:PropTypes.number
  }
constructor(){
  super()
  this.state={
    article: [],
    Loding: false,
    page:1
  }
}
async componentDidMount(){
  console.log(`${this.props.country}`)
    let url=`Give the NEWS APP API HERE `;
    this.setState({Loding : true});
    let data=await fetch(url);
    let pdata= await data.json();
    this.setState({article: pdata.articles,pageSize: pdata.totalResults,Loding:false}) 
}
prevclicked= async ()=>{
  console.log("pclicked");
          let url=`Give the NEWS APP API HERE`;
          this.setState({Loding : true});
          let data=await fetch(url);
          let pdata= await data.json();

          this.setState({page:this.state.page-1,
           article:pdata.articles,
           Loding :false
          })
}
nextcc= async ()=>{
  console.log("nextclicked");

  
  let url=`Give the NEWS APP API HERE`;
  this.setState({Loding : true});
  let data=await fetch(url);
  let pdata= await data.json();

  this.setState({page:this.state.page+1,
   article:pdata.articles,
   Loding:false
  })
}
  render() {
    return (
      <>
      <div className='container my-3 '>
      <h1 className='text-center'>TOP NEWS TODAY</h1>
      {this.state.Loding && <Spinner/>}
        <div className='row'>
          {!this.state.Loding && this.state.article.map((element)=>{
              return <div className='col-md-4' key={element.url}>        
                      <NewsItem title={element.title} discription={element.description} imageurl={element.urlToImage} url={element.url}/>
              </div>
              }
             )
          }
              <div className='container d-flex justify-content-between'>
              <button type="button" disabled={this.state.page<=1}className="btn btn-dark" onClick={this.prevclicked}> &larr; Previous</button>
              <button type="button" disabled={this.state.page+1>Math.ceil(this.state.pageSize/20)} className="btn btn-dark"  onClick={this.nextcc}>Next &rarr;</button>
              </div>
          
        </div>
      </div>
      </>
    )
  }
}

export default News
