import React, { Component } from 'react';
import Axios from "axios";



class Home extends React.Component {
    constructor(props) {
        super(props);



        this.state = { listings: [] };


    }


    componentDidMount() {
        this.getData();
    }

    getData = event => {
        console.log("getData");

        Axios.get("http://localhost:4000/api/user-listing").then(res => {
            console.table(res.data);
            this.setState({ listings: res.data });
        });



    };


    render() {
        return (
            <div>

                <p>Freebies</p>

                {this.state.listings.map((item, i) => {
                    return (
                        <Showdata

                            key={i}
                            title={item.Title}
                            category={item.Category}
                            phone={item.Phone}
                            description={item.Description}


                        />
                    )
                })}

            </div>
        )
    }


}



export class Showdata extends React.Component {


    constructor(props) {
        super(props);

        // console.log("hello from getData component");


        // this.state = { FadeOut: false }
        // this.state = { visible: true }

        console.log(this.state)
    }







    render() {
        return (
            <React.Fragment>


                <h1>

                    {this.props.title}

                </h1>

                <h1>{this.props.category}</h1>






            </React.Fragment>
        )
    }
}



export default Home;