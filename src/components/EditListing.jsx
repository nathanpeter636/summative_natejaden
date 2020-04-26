import React, { Component } from "react";


import "../css/addlisting.css";
import "../css/viewlisting.css"
import Axios from "axios";

import SkyLight from 'react-skylight';
import { MdDelete } from "react-icons/md";

import "../images/food-delivery.png";

import Appleadd from "../images/appleadd.png";
import Itemadd from "../images/itemadd.png";
import uploadphoto from "../images/uploadimg.png";
import BackArrow from "../images/back.png"

import { navigate } from "@reach/router";


export default class AddListings extends Component {
  constructor(props) {
    super(props);

    this.state = {


        updatelisting: []
      
 
    };

   

    // this.editRef = React.createRef();
  }



  componentDidMount() {
    this.getData();
  }



  getData = event => {
    console.log("getData");

    Axios.get(`http://localhost:4000/api/user-listing/${this.props.id}`).then(res => {
      this.setState({ updatelisting: res.data });
    });
  };

 


 

  

  render() {
      return (
          <div>
              {this.state.updatelisting.map((item, i) => {
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
      )
  }
}

  export class Showdata extends React.Component {

  constructor(props) {
      super(props)
  
      this.state = { 

     
      }

        this.editRef = React.createRef();
           
      
    }
  

    editListing = e => {
        e.preventDefault();
       
        var formData = new FormData(this.editRef.current);
        var settings = {
            headers: { "Content-Type": "multipart/form-data" },
          };
        console.table(formData)
       
        Axios.put(
        `http://localhost:4000/api/user-listing/${this.props.id}`,
        formData, settings ).then(res => {
        console.table(res.data);
       
        });
        };

        

       


      navigatePrev = (e) => {
        navigate(-1)
      }

      navigateHome = (e) => {
        navigate(`/`)
      }
    


      getData = event => {
        console.log("getData");
    
        Axios.get(`http://localhost:4000/api/user-listing/${this.props.id}`).then(res => {
          console.table(res.data);
          this.setState({ updatelisting: res.data });
        });
      };
    


      navigateViewlisting = (e) => {
        
          
            navigate(`/view-listing-details/${this.props.id}`)
          
          
     
        
      };


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
    
     

      navigateViewlisting = (e) => {
        navigate(`/view-listing-details/${this.props.id}`);
    
        console.log(this.props.id);
    
            // // Axios.put(http://localhost:4000/api/users/${this.props.id})
            // // .then( res=> {
            // //     console.table(this.props.id)
      
            // // }
      
            // )
      };
    
    


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

<img src={BackArrow} onClick={this.navigatePrev} alt=""/>
<div>
<h1 className="category_header">
&nbsp;&nbsp;
<span>Edit Item</span></h1>
</div>
<MdDelete onClick={() => this.deleteDialog.show()}
style={{ color: "rgba(12,154,70,1)", fontSize: "2.5rem" }}/>

</div>
</header>

<SkyLight dialogStyles={appModal} hideOnOverlayClicked ref={ref => this.deleteDialog = ref} title="Are you sure you want to Delete?">


<button className="delete_button" onClick={this.deleteData} >Yes</button>

</SkyLight>

        <div className="form_wrapper">
          <div className="form_container">
            <form onSubmit={this.editListing} ref={this.editRef}>
            <div className="share_page_margin">
              <h1>
                {" "}
                Food or Item?
              </h1>
            </div>

              <div className="form_icons_wrapper">
                <div className="food_icons_container">
                  <img
                    
                    value=''
                    src={Appleadd}
                    alt=""
                  />

                  <img
                    
                    value=''
                    src={Itemadd}
                    alt=""
                  />
                </div>

                <div className="icon_names">
                  <p>Food</p>
                  <p>Items</p>
                </div>
              </div>

              <div className="input_wrapper">
                <h1 style={{ color: "gray" }}>Update Title</h1>

                <input
                  style={{ color: "gray" }}
                  type="text"
                  name="Title"
                //   placeholder={this.props.title}
                  defaultValue={this.props.title}
                  required
                />

                <h1 style={{ color: "gray" }}>New Description</h1>

                <textarea
                  style={{ color: "gray" }}
                  rows="4"
                  cols="30"
                //   placeholder={this.props.description}
                  defaultValue={this.props.description}
                  name="Description"
                ></textarea>

                <h1 style={{ color: "gray" }}>Change Mobile no.</h1>

                <input
                  style={{ color: "gray" }}
                  type="text"
                //   placeholder={this.props.phone}
                  defaultValue={this.props.phone}
                  name="Phone"
                  required
                />
              </div>

              <div className="add_image_container">
                <label
                  style={{ fontSize: "1.5rem", color: "gray" }}
                  htmlFor="files"
                  
                >
                  <div>Update Image</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      
                      flexDirection: "column",
                    }}
                  >
                    <img src={uploadphoto} alt="" />
                    <div></div>
                  </div>
                </label>

                <input
                  id="files"
                  style={{ visibility: "hidden" }}
                  name="Image"
                  type="file"

                  onChange={this.onFileUpdate}
                ></input>
              </div>

              <input type="hidden" name="id" value={Date.now()} />

              <div className="button_wrapper" onClick={this. navigateViewlisting}>
                <button type="submit" className="add_button">
                  Done
                </button>
              </div>
            </form>

            
          </div>
        </div>
      </div>
    );
  
                }}
