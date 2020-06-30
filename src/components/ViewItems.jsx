import React, { Component } from 'react';
import Axios from "axios";
import { navigate } from "@reach/router";

import BackArrow from "../images/back.png"
import Apple from "../images/apple.png";
import Share from "../images/add.png";
import Items from "../images/items.png";
import TroveHome from "../images/trove-home.png";
import Profile from "../images/profile.png";

import "../css/footer.css";

export default class ViewItems extends Component {


constructor(props) {
    super(props)

    this.state = { items: [] 
         
    }
}



getItems = (event) => {
    
    Axios.get("https://trove-app-nathan.herokuapp.com/api/user-listing")
  .then((res) => {
    this.setState({
      items: res.data.filter(data => data.Category === "Items") }
      
      )

      console.table(this.state.items)
  });

  
  };


  componentDidMount() {
      this.getItems()
  }



  navigatePrev = (e) => {
    navigate(-1)
  }

  navigateFood = (e) => {
    navigate(`/view-food`)
  }

  navigateItems = (e) => {
    navigate(`/view-items`)
  }
  navigateHome = (e) => {
    navigate(`/`)
  }

  navigateAddlisting = (e) => {


    navigate(`/addlisting`);

    
  };

  navigateFood = (e) => {
    navigate(`/view-food`)
  }

  navigateItems = (e) => {
    navigate(`/view-items`)
  }
 
 
  navigateAddlisting = (e) => {


    navigate(`/addlisting`);

    
  };


  


    render() {
        return (
            <div>

<header className="share_header remove_fixed">
<div className="share_header_wrapper">

<img src={BackArrow} onClick={this.navigatePrev} alt=""/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input
            placeholder="Search Items . . ."
            className="autocomplete"
            type="text"
          />


</div>
</header>

<div className="page_margin"></div>


<div className='footer'>

          <div className="footer_wrapper">

            <div className="Category_names">
              <div className="home_button" onClick={this.navigateHome}>
                <img className="TroveHome" src={TroveHome} alt="" />
                {/* <div className="space"></div>
                <p>Home</p> */}
              </div>

            </div>

            <div className="Category_names">
              <div className="profile_button">
                <img className="profile" src={Profile} alt="" />
                {/* <div className="space"></div>
                <p>Profile</p> */}
              </div>

            </div>

            <div className="Category_names">
              <div className="add_listing" onClick={this.navigateAddlisting}>
                <img className="Share" src={Share} alt="" />
                {/* <div className="upload_space"></div>
                <p>Upload</p> */}
              </div>

            </div>

            <div className="Category_names">
              <div className="food_button" onClick={this.navigateFood}>
                <img className="Apple" src={Apple} alt="" />
                {/* <div className="space"></div>
                <p>Food&nbsp;</p> */}
              </div>

              </div>

            <div className="Category_names">
              <div className='items_button' onClick={this.navigateItems}>
                <img className="Items" src={Items} alt="" />
                {/* <div className="space"></div>
                <p>Items&nbsp;</p> */}
              </div>
            </div>

          </div>

        </div>


{this.state.items.map((item, i) => {
            return (
              <ShowItem
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
        )
    }
}



export class ShowItem extends React.Component {


    navigateViewlisting = (e) => {
        navigate(`/view-listing-details/${this.props.id}`);
    

        
      };




    render() {
        return (
            <div className="listing_box_wrapper">
              <div className="listing_box_container" onClick={this.navigateViewlisting}>

              <img className="listing_image_display"
          src={"https://trove-app-nathan.herokuapp.com/assets/" + this.props.imagePath}
          alt=""
        />
        

        <div className="listing_details_container">

                <h2>{this.props.title}</h2>
                <h3>{this.props.phone}</h3>

                </div>
                </div>
            </div>
        )
    }
}




