import React, { Component } from "react";


import SkyLight from 'react-skylight';
import { navigate } from "@reach/router";
import Axios from "axios";
import "../css/viewlisting.css"
import "../css/footer.css";

import { MdEdit } from "react-icons/md";
import { MdQuestionAnswer } from "react-icons/md";
import { MdSettingsPhone } from "react-icons/md";

import BackArrow from "../images/back.png"
import Apple from "../images/apple.png";
import Share from "../images/add.png";
import Items from "../images/items.png";
import TroveHome from "../images/trove-home.png";
import Profile from "../images/profile.png";







export default class ViewBook extends Component {


  constructor(props) {
    super(props);


    this.state = { listing: [] }
  }


  navigatePrev = (e) => {
    navigate(-1)
  }

  navigateHome = (e) => {
    navigate('/')
  }
  

  navigateFood = (e) => {
    navigate('/view-food')
  }

  navigateItems = (e) => {
    navigate('/view-items')
  }

  navigateAddlisting = (e) => {


    navigate('/addlisting');

    
  };


  componentDidMount() {


    Axios.get(`http://localhost:4000/api/user-listing/${this.props.id}`).then(res => {

      console.log(`http://localhost:4000/api/user-listing/${this.props.id}`);
      this.setState({ listing: res.data });
    });


  }



  deleteData = event => {
    console.log("deleteData");

    // this.state = {  deleteButtonClicked: false};

    Axios.delete(`http://localhost:4000/api/user-listing/${this.props.id}`).then(
      res => {
        console.table(res.data);


        navigate('/');
        // if (res.data.result === true) {


      }


    )


  };



    navigateEditListing = e => {

      navigate(`/edit-listing/${this.props.id}`)

      console.log(this.props.id)

    }






  render() {

    var appModal = {
      backgroundColor: 'white',
      color: 'black',
      width: '50vw',
      height: '30vh',
      minHeight: '30vh',

      marginTop: '-150px',
      marginLeft: '-28%',
      textAlign: 'center',


      // display: 'flex',
      // flexDirection: 'column',
      // alignItems: 'center',
      // justifyContent: 'center',

      display: 'flex',
      flexDirection: 'column',

      justifyContent: 'space-evenly',
      alignItems: 'center',
      alignContent: 'stretch',




    };


    return (
      <div>





<header className="share_header">
  <div className="share_header_wrapper">

          <img src={BackArrow} onClick={this.navigatePrev} alt="" />
          {/* <div>
            <h1 className="category_header">
              <span></span></h1>
          </div> */}
          <MdEdit  onClick={this.navigateEditListing} 
          style={{ color: "rgba(12,154,70,1)", fontSize: "2.5rem" }}/>
  </div>


        </header>


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







        <SkyLight dialogStyles={appModal} hideOnOverlayClicked ref={ref => this.deleteDialog = ref} title="Are you sure you want to Delete?">


          <button onClick={this.deleteData} >Yes</button>

        </SkyLight>


        {this.state.listing.map((item, i) => {
          return (
            <ShowListing
              key={i}
              title={item.Title}
              category={item.Category}
              phone={item.Phone}
              description={item.Description}
              imagePath={item.Image}
              id={item._id}
              unique_id={item.id}
            />

            
          );
        })}


      </div>
    );
  }

}

export class ShowListing extends React.Component {

  constructor(props) {
    super(props);


    console.log(this.state);
  }

  render() {










    // const HorizontalLine = ({ color }) => (
    //   <hr
    //     style={{

    //       position: 'absolute',
    //       bottom: '150px',
    //       zIndex: '10',
    //       opacity: '0.5',
    //       backgroundColor: color,

    //       width: '100vw',
    //     }}
    //   />
    // );

    return (



      <div>


        <div className="skylight_container">
          <SkyLight hideOnOverlayClicked ref={ref => this.questionDialog = ref} title="Ask a question">

            <h2> Name </h2>

            <input style={{ color: "gray" }} type="text" name="Title" required />

            <h2> Question</h2>

            <input style={{ color: "gray" }} type="text" name="Title" required />

            <button style={{ color: 'red', fontSize: '2rem' }} onClick={this.deleteData} >Done</button>

          </SkyLight>
        </div>






        <img className="listing_image"
          src={"http://localhost:4000/assets/" + this.props.imagePath}
          alt=""
        />




        <div className="listing_wrapper">


          <div className="lisitng_title">

            <h1 style={{ marginTop: '0%' }}>{this.props.title}</h1>
            <h2>{this.props.description}</h2>

          </div>



          <div className="action_message">

            <h3>This item can be sent to you during lockdown level 3.</h3>

          </div>






        </div>



        <div className="contact_box_container">



          <MdSettingsPhone style={{ fontSize: '3rem', color: '' }} />

          {/* <h3 style={{ fontSize: "1.5rem" }}>{this.props.phone}</h3> */}


          <MdQuestionAnswer style={{ fontSize: '3rem' }}
            onClick={() => this.questionDialog.show()}
          />









        </div>




      </div>
    )
  }

}