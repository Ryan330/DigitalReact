//Init React
import React, { Component } from 'react';

//Current Date and Time Dashboard
class TimeDashboard extends Component {
    constructor() {
        super();

        this.state = {
            time: new Date()}
        }


        //Time Functions
        //Set Time to Current Time
        setCurrentTime() {
            this.setState({
                time: new Date()
            })
        }


        //Increase Time
        componentWillMount() {
            setInterval(() => this.setCurrentTime(), 1000);
        }




    //Render Page Content
    render() {
        return (
            <center>

                <h1 id="customFontColor">
                    {this.state.time.toDateString()}

                    <br></br>
                    {this.state.time.toLocaleTimeString()}
                </h1>
                
            </center>
        );
    }
}




//Export Object
export default TimeDashboard;