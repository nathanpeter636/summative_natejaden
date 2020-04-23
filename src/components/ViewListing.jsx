import React, { Component } from "react";


import SkyLight from 'react-skylight';
import { navigate } from "@reach/router";
import Axios from "axios";
import "../css/viewlisting.css"

import { MdDelete } from "react-icons/md";



import { MdEdit } from "react-icons/md";

import { MdQuestionAnswer } from "react-icons/md";
import { MdSettingsPhone } from "react-icons/md";

import BackArrow from "../images/back.png"






export default class ViewBook extends Component {


  constructor(props) {
    super(props);


    this.state = { listing: [], }
  
  }


  navigatePrev = (e) => {
    navigate(-1)
  }



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


        navigate(`/`);
        // if (res.data.result === true) {

        //   this.setState({ visible: false });



        // }

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

          <img src={BackArrow} onClick={this.navigatePrev} alt="" />
          <div>
            <h1 className="category_header"><span style={{ fontWeight: '500', fontSize: '1rem' }}></span>
              <span style={{ fontWeight: '500' }}>View</span></h1>
          </div>


<div className="tertiary_actions">
          <MdDelete onClick={() => this.deleteDialog.show()}
         


            style={{ color: "black", fontSize: "1.8em" }}
          />

          
          <MdEdit  onClick={this.navigateEditListing} style={{ color: "black", fontSize: "1.8em" }}/>

          </div>
        </header>








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


    this.state = { questions: [], Name:"", Description: "", listing_id: 0}
    this.questionsRef = React.createRef();

    console.log(this.state);


  }


  onCommentsSubmit = e => {
    this.setState({ listing_id: this.state.id });

    console.log(this.state.id)

    
  };


  render() {

  

    return (


     <React.Fragment>

     {/* {this.state.questions.map((question, i) => {
      return (
        <ShowQuestions
          key={i}
          name={question.Name}
          comment={question.description}
          
         
        />
      );
    })} */}



      <div>

{/* <form onSubmit={this.handleSubmit} ref={this.formRef}> */}

        <div className="skylight_container">
      <form onSubmit={this.onCommentsSubmit} ref={this.questionsRef}>

          <SkyLight hideOnOverlayClicked ref={ref => this.questionDialog = ref} title="Make a Comment">

            <h2> Name </h2>

            <input style={{ color: "gray" }} type="text" name="Title" required />

            <h2> Comment</h2>

            <input style={{ color: "gray" }} type="text" name="Title" required />

            <button type='submit' style={{ color: 'red', fontSize: '2rem' }} >Done</button>

          </SkyLight>

          </form>
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



          <MdSettingsPhone style={{ fontSize: '4rem', color: '' }} />

          {/* <h3 style={{ fontSize: "1.5rem" }}>{this.props.phone}</h3> */}


          <MdQuestionAnswer style={{ fontSize: '4rem' }}
            onClick={() => this.questionDialog.show()}
          />









        </div>




      </div>

      </React.Fragment>
    )
  }

}
