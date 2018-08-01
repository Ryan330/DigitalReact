//Init React
import React, {Component} from "react";
import {Route} from "react-router-dom";

//Init Objects
//Template Objects
import CustomHeader from "./template/CustomHeader";
import CustomFooter from "./template/CustomFooter";

//Channels
import DateChannel from "./channels/CurrentDate";
import MovieChannel from "./channels/MovieSearch";
import EmptyChannel from "./channels/EmptyChannel";

//Dashboards
import MovieDashboard from "./dashboards/MovieDashboard";
import TimeDashboard from "./dashboards/TimeDashboard";




//Color Options
//Backgrounds
const bgColorArray = [
    "customBGWhite", 
    "customBGRed", 
    "customBGBlue", 
    "customBGGreen",
    "customBGPink",
    "customBGOrange",
    "customBGBlack",
    "customBGGold",
    "customBGPurple"
];

//Fonts
const fontColorArray = [
    "fontColorWhite", 
    "fontColorRed", 
    "fontColorBlue", 
    "fontColorGreen", 
    "fontColorPink", 
    "fontColorOrange", 
    "fontColorBlack",
    "fontColorGold",
    "fontColorPurple"
];


//Font Styles
const fontStyleArray = [
    "customFontOne",
    "customFontTwo",
    "customFontThree",
    "customFontFour",
    "customFontFive",
    "customFontSix"
];


//App Page
class App extends Component {
    constructor(props) {
        super(props);

        //State of the Style
        this.state = {
            colorSelect: 0,
            fontSelect: 0
        };
    }


    //Color Option Functions
    selectWhiteColor = () => {
        this.setState({colorSelect: 0});
    }

    selectRedColor = () => {
        this.setState({colorSelect: 1});
    }

    selectBlueColor = () => {
        this.setState({colorSelect: 2});
    }

    selectGreenColor = () => {
        this.setState({colorSelect: 3});
    }

    selectPinkColor = () => {
        this.setState({colorSelect: 4});
    }

    selectOrangeColor = () => {
        this.setState({colorSelect: 5});
    }

    selectBlackColor = () => {
        this.setState({colorSelect: 6});
    }

    selectGoldColor = () => {
        this.setState({colorSelect: 7});
    }

    selectPurpleColor = () => {
        this.setState({colorSelect: 8});
    }


    //Font Option Functions
    selectFontOne = () => {
        this.setState({fontSelect: 0});
    }

    selectFontTwo = () => {
        this.setState({fontSelect: 1});
    }

    selectFontThree = () => {
        this.setState({fontSelect: 2});
    }

    selectFontFour = () => {
        this.setState({fontSelect: 3});
    }

    selectFontFive = () => {
        this.setState({fontSelect: 4});
    }

    selectFontSix = () => {
        this.setState({fontSelect: 5});
    }


    //Render App Page
    render() {
        return (
            <div className={`${fontColorArray[this.state.colorSelect]} ${fontStyleArray[this.state.fontSelect]}`}>

                {/*Header Content*/}
                <div className={bgColorArray[this.state.colorSelect]}>
                    <CustomHeader/>
                </div>


                {/*Main Page Content*/}
                <Route path="/" exact={true} render={(props) => <RouteIndex className={bgColorArray[this.state.colorSelect]} {...props}/>}/>


                {/*Customize Page Content*/}
                <Route path="/customize" exact={true} 

                render={(props) => <RouteCustomize
                    className={bgColorArray[this.state.colorSelect]} 
                    
                    whiteSelection={this.selectWhiteColor} {...props}
                    redSelection={this.selectRedColor}
                    blueSelection={this.selectBlueColor}
                    greenSelection={this.selectGreenColor}
                    pinkSelection={this.selectPinkColor}
                    orangeSelection={this.selectOrangeColor}
                    blackSelection={this.selectBlackColor}
                    goldSelection={this.selectGoldColor}
                    purpleSelection={this.selectPurpleColor}

                    fontOneSelection={this.selectFontOne}
                    fontTwoSelection={this.selectFontTwo}
                    fontThreeSelection={this.selectFontThree}
                    fontFourSelection={this.selectFontFour}
                    fontFiveSelection={this.selectFontFive}
                    fontSixSelection={this.selectFontSix}
                    />}
                />


                {/*Movie Page Content*/}
                <Route path="/movies" exact={true} render={(props) => <RouteMovie className={bgColorArray[this.state.colorSelect]} {...props}/>}/>


                {/*Movie Page Content*/}
                <Route path="/date-time" exact={true} render={(props) => <RouteDateandTime className={`${bgColorArray[this.state.colorSelect]} ${fontColorArray[this.state.colorSelect]} pageTitle`} {...props}/>}/>
                

                {/*Footer Content*/}
                <div className={bgColorArray[this.state.colorSelect]}>
                    <CustomFooter/>
                </div>

            </div>
        );
    }
}




//Route Functions
//Home Page
const RouteIndex = (props) => {
    return (
        <div className={props.className}>

            <div className="channelContainer">

                <DateChannel/>

                <MovieChannel/>
                
                <EmptyChannel/>

                <EmptyChannel/>

                <EmptyChannel/>

                <EmptyChannel/>

            </div>

        </div>
    );
}


//Customize Page
const RouteCustomize = (props) => {
        return (
            <div className={props.className}>

                <div className="optionsContainer">

                    {/*Background Color Options*/}
                    <div className="optionsBox">

                        <span>Choose Background Color</span>

                        <div className="colorBoxWhite" onClick={() => {props.whiteSelection(props)}}></div>

                        <div className="colorBoxRed" onClick={() => {props.redSelection(props)}}></div>

                        <div className="colorBoxBlue" onClick={() => {props.blueSelection(props)}}></div>

                        <div className="colorBoxGreen" onClick={() => {props.greenSelection(props)}}></div>

                        <div className="colorBoxPink" onClick={() => {props.pinkSelection(props)}}></div>

                        <div className="colorBoxOrange" onClick={() => {props.orangeSelection(props)}}></div>

                        <div className="colorBoxBlack" onClick={() => {props.blackSelection(props)}}></div>

                        <div className="colorBoxGold" onClick={() => {props.goldSelection(props)}}></div>

                        <div className="colorBoxPurple" onClick={() => {props.purpleSelection(props)}}></div>
                    
                    </div>


                    {/*Font Style Options*/}
                    <div className="optionsBox">
                    
                        <span>Choose App Font Style</span>

                        <div className="fontBoxOne" onClick={() => {props.fontOneSelection(props)}}>ABC</div>

                        <div className="fontBoxTwo" onClick={() => {props.fontTwoSelection(props)}}>ABC</div>

                        <div className="fontBoxThree" onClick={() => {props.fontThreeSelection(props)}}>ABC</div>
                
                        <div className="fontBoxFour" onClick={() => {props.fontFourSelection(props)}}>ABC</div>

                        <div className="fontBoxFive" onClick={() => {props.fontFiveSelection(props)}}>ABC</div>

                        <div className="fontBoxSix" onClick={() => {props.fontSixSelection(props)}}>ABC</div>

                    </div>

                </div>
            
            </div>
        );
}


//Movie Search Page
const RouteMovie = (props) => {
    return (
        <div className={props.className}>

            <div className="movieContainer">

                <span className="pageTitle">Movie Search</span>

                {/*Movie List*/}
                <MovieDashboard />

            </div>

        </div>
    );
}


//Date and Time Page
const RouteDateandTime = (props) => {
    return (
        <div className={props.className}>

            <div className="dateTimeContainer">

                <span className="pageTitle">Current Date and Time</span>

                {/*Movie List*/}
                <TimeDashboard />

            </div>

        </div>
    );
}




//Export App
export default App;