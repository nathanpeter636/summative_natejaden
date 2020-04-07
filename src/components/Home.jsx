import React, { Component } from 'react';
import Axios from "axios";
import "../css/home.css"
import { IoMdAdd } from "react-icons/io";


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

                <header>
                    <h1>DoNate</h1>


                    


                </header>

                <div className="Message_container">
                <h2>Give and recieve <br />
                    multiple items
                 throughtout <br /> 
                 NZ for those in need.
                    </h2>

                  

                </div>



                <div className='home_listing_wrap'>

                <input
                        placeholder="Type Something..."
                        className="autocomplete"
                        type="text"

                    />

                    <div className='add_listing'>

                       
                        <IoMdAdd style={{ color: "#00ff55", fontSize: "7.8em" }}/>
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

                <h1>

                    {this.props.title}

                </h1>

                <h1>{this.props.category}</h1>


            </div>








        )
    }
}



export default Home;