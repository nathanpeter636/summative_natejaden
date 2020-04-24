import React, { Component } from 'react';
import Axios from "axios";
import { navigate } from "@reach/router";


import BackArrow from "../images/back.png"
import Apple from "../images/apple.png";
import Share from "../images/add.png";
import Items from "../images/items.png";

import { MdArrowBack } from "react-icons/md";

import "../css/viewcategory.css";
import "../css/footer.css";



export default class ViewFood extends Component {


constructor(props) {
    super(props)

    this.state = { food: [] 
         
    }
}



getFood = (event) => {
    
    Axios.get("http://localhost:4000/api/user-listing")
  .then((res) => {
    this.setState({
      food: res.data.filter(data => data.Category === "Food") }
      
      )

      console.table(this.state.food)
  });

  
  };

  componentDidMount() {
      this.getFood()
  }


  navigatePrev = (e) => {
    navigate(-1)
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
<div>
<h1 className="category_header">
<span>Search Food</span></h1>
</div>

</div>
</header>

<div className='footer'>

  <div className="footer_wrapper">

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

</div>

<div className="page_margin"></div>

{this.state.food.map((food, i) => {
            return (

              
              <ShowFood 
                key={i}
                title={food.Title}
                category={food.Category}
                phone={food.Phone}
                description={food.Description}
                imagePath={food.Image}
                id={food._id}
              />);
          })}
                
            </div>
        )
    }
}





export class ShowFood extends React.Component {


  navigateViewlisting = (e) => {
    navigate(`/view-listing-details/${this.props.id}`);

    

    
  };

    render() {
        return (

          <React.Fragment>
          
          
          
            <div className="listing_box_wrapper">
              <div className="listing_box_container" onClick={this.navigateViewlisting}>

              <img className="listing_image_display"
          src={"http://localhost:4000/assets/" + this.props.imagePath}
          alt=""
        />
        

        <div className="listing_details_container">

                <h2>{this.props.title}</h2>
                <h3>{this.props.phone}</h3>

                </div>
                </div>
            </div>

            

            </React.Fragment>
        )
    }
}




