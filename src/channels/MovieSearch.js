//Init React
import React from "react";
import {Link} from "react-router-dom";


//Movie Search Channel
class MovieSearch extends React.Component {
    render() {
        return (
            <Link to="/movies">

                <div className="channelContainer movieBox channelBox" title="Movie Search">
                    <span>Movie Search</span>
                </div>
                
            </Link>
        );
    }
}


//Export Object
export default MovieSearch;