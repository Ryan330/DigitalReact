//Init React
import React, {Component} from "react";


//Movie Search Dashboard
class MovieDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movieList: [],
            apiData: ""
            }
        }

        
        //Search Functions
        //Obtain Movie Data from API
        movieSearch = () => {
            fetch(`http://www.omdbapi.com/?s=${this.state.apiData}&apikey=bd23d0c5`)
                .then(movies => {
                    return (movies.json());
                })
                .then(movies => {
                    this.setState({
                        movieList: movies.Search
                    });
                });
        }


        //Read and Search for User Input
        userInputSearch = (input) => {
            this.setState({
                apiData: input.target.value
            });
        }




        //Render Page Content
        render() {
            return (
                <div>
                    {/*Movie Search Bar*/}
                    <input type="text" value={this.state.apiData} onChange={this.userInputSearch}/>


                    {/*Movie Search Button*/}
                    <button onClick={this.movieSearch}><i class="fa fa-search"></i></button>
                    
                    <div> {
                        this.state.movieList.map((movie, i) => 
                        
                        <div className="movieList">

                            <div key={i}>

                                <span className="movieTitle">{movie.Title}</span>

                                <div>

                                    <img src={movie.Poster}/>

                                </div>
                                
                            </div>

                        </div>
                    )}
                    </div>

                </div>
     
    );
  }
}




//Export Object
 export default MovieDashboard;