import React, { Component } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import Menu from './Menu'

class App extends Component {
    constructor() {
        super();
        this.state = {
            status: true,
            // multiple arrays to store data from api
            dinnerItems: [],
            drinkItems: [],
        }
    }

    getPrice( min, max) {
        return ((Math.random() * (20)).toFixed(2))
    }

    componentDidMount() {
        console.log("App successfully Loaded!")
        this.loadAPI(5, 'dinnerItems');
        this.loadAPI(8, 'drinkItems');
    }
    componentDidUpdate() {
        console.log("App successfully Updated!")
    }

    loadAPI(type, array) {
        // Make a request
        console.log(type)
        axios.get(`https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type/${type}`)
            .then(response => {
                // handle success
                console.log(response.data);
                if (this.state.status) {
                    this.setState({
                        [array]: response.data,
                    })
                } 
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {

            });
    }

    render() {
        return (
            <>
                <div className="container bg-info">
                    <div className="row d-flex justify-content-center">
                        <em><h1 className="row pt-4 d-flex justify-content-center fw-bold text-decoration-underline">The Awesome Cafe</h1></em>
                        <div className="container text-muted">
                            <h5 className="row d-flex justify-content-center">348 E Main St, Lexington KY </h5>
                            <h5 className="row d-flex justify-content-center">Open daily 10am-8pm</h5>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row text-center pt-4">
                            <h2>Dinner Menu</h2>
                        </div>
                        <div className="row">
                            <div className="col">
                                {/* map over items here from this.state.(whatever you call it) */}
                                {this.state.dinnerItems.map((item) => <Menu name={item.name} 
                                description={item.description} 
                                price={`$`+this.getPrice()} 
                                key={item.id} />
                                )}
                            </div>
                        </div>
                        <div className="row text-center pt-4"><h2>Drinks</h2>
                            <div className="col">
                                {this.state.drinkItems.map((item) => <Menu name={item.name} 
                                description={item.description} 
                                price={`$`+this.getPrice()} 
                                key={item.id} />
                                )}
                            </div>
                            <div className="container pt-4 w-100">
                                <div className="row bg-light">
                                    <span className="text-muted ">© Tony Watson 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default App;