import React, { Component } from "react";
import Axios from "axios";
import "../css/home.css";
import { IoMdAdd } from "react-icons/io";

import Share from "../images/add.png";
import Apple from "../images/apple.png";
import Items from "../images/items.png";
import Trovelogo from "../images/trove.png";
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
      <div div className="Master_container">
        <div className="Message_container">
          
          <img className="Trovelogo" src={Trovelogo} alt="" />
          

          <input
            placeholder="Search with Trove . . ."
            className="autocomplete"
            type="text"
          />
        </div>

        {/* <h2 style={{ color: "black", fontSize: "1rem", textAlign: "center" }}>
          123 Total Listings
        </h2> */}

        <div className='category_wrappers'>

          <div className="food_button" onClick={this.navigateFood}>
            <img className="Apple" src={Apple} alt="" />


          </div>

          <div className="add_listing" onClick={this.navigateAddlisting}>
            <img className="Share" src={Share} alt="" />
          </div>


          <div className='items_button' onClick={this.navigateItems}>
            <img className="Items" src={Items} alt="" />

          </div>



        </div>

        <div className="Category_names">
            <p>Food</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Upload</p>
            <p>Items</p>
        </div>

        

        <div className="home_listing_wrap">

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
