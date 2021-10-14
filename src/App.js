import React, { Component } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import MenuItem from './MenuItem'

class App extends Component {
    constructor() {
        super();
        this.state = {
            // currentItem: "",
            awesomeApiData: {},
            // items: [],
        }
    }

    componentDidMount() {
        console.log("App successfully Loaded!")
        this.loadAPI();
    }
    componentDidUpdate() {
        console.log("App successfully Updated!")
        // if (!this.state.awesomeApiData.length) {
        //     this.loadAPI()
        // }
    }

    loadAPI() {
        // Make a request
        axios.get('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type/5')
            .then(response => {
                // handle success
                console.log(response.data);
                this.setState({
                    awesomeApiData: response.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    render() {
        return (
            <>

            {/* ? ensures this.state.awesomeApiData exists before trying to get name*/}
                <p>{this.state.awesomeApiData[0]?.name}</p>
                <div className="container text-center">
                    <div className="row">
                        <div className="container"></div>
                        <div className="col">
                            <h1 className="row pt-4">The Awesome Cafe</h1>
                            <h5 className="row">348 E Main St, Lexington KY </h5>
                            <h5 className="row">Open daily 12pm-8pm</h5>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                            </div>
                            <div className="col">
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                            </div>
                            <div className="col">
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <p>{this.state.awesomeApiData}</p> */}
            </>
        );
    }
}
export default App;