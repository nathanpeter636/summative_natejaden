import React, { Component } from 'react';
import Axios from "axios";
import "../css/home.css"
import { IoMdAdd } from "react-icons/io";

import Share from "../images/hands.png"
import { navigate } from "@reach/router";



class Home extends React.Component {
    constructor(props) {
        super(props);



        this.state = { listings: [] };


    }


    componentDidMount() {
        this.getData();
    }

    navigateAddlisting = e => {
        navigate(`/addlisting`);
    
        
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


             

                <div className="Message_container">

               


                <h2>Give and recieve <br />
                    multiple items
                 throughtout <br /> 
                 NZ for those in need.
                    </h2>

                    <input
                        placeholder="Type Something..."
                        className="autocomplete"
                        type="text"

                    />

                </div>

                <h2 style={{ color: "black", fontSize: "1rem", textAlign: 'center' }}>123 Total Listings</h2>

                <div className='home_listing_wrap'>

            

                    <div className='add_listing' onClick={this.navigateAddlisting}>

                    <img src={Share} alt=""/>
                        
                        <p>Share with others</p>
                    </div>

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






            <div className='data_container'>

                <h2>

                    {this.props.title}

                </h2>

                <h2>{this.props.category}</h2>


            </div>








        )
    }
}



export default Home;