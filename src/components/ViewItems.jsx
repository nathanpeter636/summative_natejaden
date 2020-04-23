import React, { Component } from 'react';
import Axios from "axios";
import { navigate } from "@reach/router";

import BackArrow from "../images/back.png"

export default class ViewItems extends Component {


constructor(props) {
    super(props)

    this.state = { items: [] 
         
    }
}



getItems = (event) => {
    
    Axios.get("http://localhost:4000/api/user-listing")
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


    render() {
        return (
            <div>

<header className="share_header gremove_fixed">

<img src={BackArrow} onClick={this.navigatePrev} alt=""/>
<div>
<h1 className="category_header"><span style={{fontWeight: '500', fontSize: '1rem', marginLeft: '-50px'}}>Browse  >  </span> 
<span style={{fontWeight: '500'}}>Items</span></h1>
</div>

</header>



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
          src={"http://localhost:4000/assets/" + this.props.imagePath}
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




