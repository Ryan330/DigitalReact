//Init React
import React from "react";
import {Link} from "react-router-dom";


//Current Date Channel
class CurrentDate extends React.Component {
    render() {
        return (
            <Link to="/date-time">

                <div className="channelContainer timeBox channelBox" title="Date and Time Channel">
                    <span>Date and Time</span>
                </div>

            </Link>
        );
    }
}


//Export Object
export default CurrentDate;