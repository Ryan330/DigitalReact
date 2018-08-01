//Init React
import React from "react";
import {Link} from "react-router-dom";


//Custom Header
class CustomHeader extends React.Component {
    render() {
        return (
            <header className="customHeader">

                {/*Logo*/}
                <div className="customHeaderLeft">
                
                    <Link to="/" id="customFontColor">DigitalReact</Link>

                </div>

                {/*Settings and About*/}
                <div className="customHeaderRight">
                
                    <ul>
                        <li><Link to="/customize" id="customFontColor"><i className="fa fa-cogs"></i> Customize</Link></li>

                        {/*<li><Link to="/about" id="customFontColor"><i className="fa fa-user"></i> About App</Link></li>*/}
                    </ul>

                </div>

            </header>
        );
    }
}


//Export Object
export default CustomHeader;