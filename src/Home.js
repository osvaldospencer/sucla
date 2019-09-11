import React, { Component } from "react"
import  { loadGenres } from './Api'
import Login from './Login'
class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
          count: 0,
          autenticado: false,
          genres: [],
          isLoading: false
        }
      }
      componentDidMount(){
        //axios.get()
        //.then((res)=>console.log(res))
        this.setState({ isLoading: true })
        loadGenres()
        .then((res)=>{
          this.setState({
            isLoading: false,
            genres: res.data
          })
        })
    
      }
      renderGenreLink(genre){
        return(
          <span><a href=''>{genre}</a></span>
        )
      }
    render(){
        return (
            <div>
                <section id="intro" className="intro-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1><img src="images/logo.png" /></h1>
            <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
          </div>
        </div>
      </div>
    </section>
  
    <section id="services" className="services-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Para assistir</h1>
            <div id="series" className="row list-group">
              <div className="item  col-xs-4 col-lg-4">
                <div className="thumbnail">
                  <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                  <div className="caption">
                    <h4 className="group inner list-group-item-heading">
                      How I met your mother</h4>
                    <div className="row">
                      <div className="col-xs-12 col-md-6">
                        <p className="lead">
                          AÇÃO</p>
                      </div>
                      <div className="col-xs-12 col-md-6">
                        <a className="btn btn-success" href="">Gerenciar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item  col-xs-4 col-lg-4">
                <div className="thumbnail">
                  <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                  <div className="caption">
                    <h4 className="group inner list-group-item-heading">
                      How I met your mother</h4>
                    <div className="row">
                      <div className="col-xs-12 col-md-6">
                        <p className="lead">
                          AÇÃO</p>
                      </div>
                      <div className="col-xs-12 col-md-6">
                        <a className="btn btn-success" href="http://www.jquery2dotnet.com">Gerenciar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      {
        this.state.isLoading &&
        <div>
        <span> Aguarde, a carregar ...</span>
        
        </div>
      }
      { 
        !this.state.isLoading &&
        <div>
          Ver séries
          {this.state.genres.map(this.renderGenreLink) }
        </div>
      }
    </section>
            </div>
        );
    }
}

export default Home;