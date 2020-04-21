import React, { Component } from "react";
import Axios from "axios";
import "../css/home.css";
import { IoMdAdd } from "react-icons/io";

import Share from "../images/hands.png";
import { navigate } from "@reach/router";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { listings: [] };
  }

  componentDidMount() {
    this.getData();
  }

  navigateAddlisting = (e) => {


    navigate(`/addlisting`);

    
  };

  
 

  getData = (event) => {
    console.log("getData");

    Axios.get("http://localhost:4000/api/user-listing").then((res) => {
      console.table(res.data);
      this.setState({ listings: res.data });
    });
  };



  navigateFood = (e) => {
    navigate(`/view-food`)
  }

  navigateItems = (e) => {
    navigate(`/view-items`)
  }

  render() {
    return (
      <div>
        <div className="Message_container">
          <h2>
            Give and recieve <br />
            multiple items throughtout <br />
            NZ for those in need.
          </h2>

          <input
            placeholder="Type Something..."
            className="autocomplete"
            type="text"
          />
        </div>

        {/* <h2 style={{ color: "black", fontSize: "1rem", textAlign: "center" }}>
          123 Total Listings
        </h2> */}

        <div className='category_wrappers'>

          
          <div className="food_button" onClick={this.navigateFood}>
          
          
       
          </div>
         

          <div className='items_button' onClick={this.navigateItems}>
            
          </div>

         
        
        </div>

        <div className="Category_names">
            <p>Food</p>
            <p>Items</p>
          </div>

        

        <div className="home_listing_wrap">
          <div className="add_listing" onClick={this.navigateAddlisting}>
            <img src={Share} alt="" />

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
                imagePath={item.Image}
                id={item._id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export class Showdata extends React.Component {


  constructor(props) {
    super(props); 
  }


  deleteData = event => {
    console.log("deleteData");

    // this.state = {  deleteButtonClicked: false};

    Axios.delete(`http://localhost:4000/api/user-listing/${this.props.id}`).then(
      res => {
        console.table(res.data);

        if (res.data.result === true) {

          this.setState({ visible: false });

         

          
          
        }
        
      }
    )
  };


  navigateViewlisting = (e) => {
    navigate(`/view-listing-details/${this.props.id}`);

    console.log(this.props.id);

        // // Axios.put(`http://localhost:4000/api/users/${this.props.id}`)
        // // .then( res=> {
        // //     console.table(this.props.id)
  
        // // }
  
        // )
  };

 




  render() {
    return (


      <div className="data_container" onClick={this.navigateViewlisting}>
        
        <h2>{this.props.title}</h2>

        <img
          src={"http://localhost:4000/assets/" + this.props.imagePath}
          alt=""
        />
      </div>
      
    );
  }
}

export default Home;
