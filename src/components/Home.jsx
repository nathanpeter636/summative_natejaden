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

    this.state = { listings: [], 
    

      
      
    
    
    };
  }


  // updateSearch(event) {
  //   this.setState()
  // }

  componentDidMount() {
    this.getData();
  }

  navigateAddlisting = (e) => {


    navigate(`/addlisting`);

    
  };

  
 

  getData = (event) => {
    console.log("getData");

    Axios.get("http://localhost:4000/api/user-listing").then((res) => {
      
    

      this.setState({ listings: res.data,
      filteredlist: res.data,});

      console.table(this.state.filteredlist)
      
    })

    

  };



 

 
  



  navigateFood = (e) => {
    navigate(`/view-food`)
  }

  navigateItems = (e) => {
    navigate(`/view-items`)
  }

  render() {
    return (
      <div className="Master_container">
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

<div className="Category_names">
  <div className="food_button" onClick={this.navigateFood}>
    <img className="Apple" src={Apple} alt="" />
    <p>Food</p>
</div>

  </div>

<div className="Category_names">
  <div className="add_listing" onClick={this.navigateAddlisting}>
    <img className="Share" src={Share} alt="" />
    <p>&nbsp;Upload</p>
</div>

</div>

<div className="Category_names">
  <div className='items_button' onClick={this.navigateItems}>
    <img className="Items" src={Items} alt="" />
    <p>Items</p>
    </div>
  </div>



</div>


        

        <div className="home_listing_wrap" >

          {this.state.listings.map((item, i) => {
            return  (
              <Showdata
                key={i}
                title={item.Title}
                category={item.Category}
                phone={item.Phone}
                description={item.Description}
                imagePath={item.Image}
                id={item._id}
               
              />
            ) ;
          })}
        </div>
      </div>
    );
  }
}

export class Showdata extends React.Component {


  constructor(props) {
    super(props); 

  
   this.state = {zoom: false}
  

  }




  deleteData = event => {
    console.log("deleteData");

    // this.state = {  deleteButtonClicked: false};

    Axios.delete(`http://localhost:4000/api/user-listing/${this.props.id}`).then(
      res => {
        console.table(res.data);

        if (res.data.result === true) {

       

        
        }
        
      }
    )
  };


  navigateViewlisting = (e) => {
    navigate(`/view-listing-details/${this.props.id}`);


    
   
  };

  handleZoom = (e) => {

    this.setState({zoom: true})

  }

 




  render() {
    return (

      //className={this.state.zoom ? 'zoom' : null} onTransitionEnd={this.navigateAdduser}

      <div className={"data_container"}  onClick={this.navigateViewlisting}>
        
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
