import React, { Component } from "react";


import "../css/addlisting.css";

import Axios from "axios";

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
      
      Category: "",
      Food: "",
      Items: "",
      filename: "no file chosen",
    };

    console.log(this.state.question_id)

    this.formRef = React.createRef();
  }

  navigatePrev = (e) => {
    navigate(-1)
  }

  navigateHome = (e) => {
    navigate(`/`)
  }

  handleCategoryFood = (event) => {
    this.setState({ Category: "Food" });
    console.table(this.state.Category);
  };



  handleCategoryItems = (event) => {
    this.setState({ Category: "Items" });
    console.table(this.state.Items);
  };

  onFileUpdate = (e) => {
    console.log(e.target.files[0].name);
    this.setState({ filename: e.target.files[0].name });
    // this.setState({id: Date.now()})

  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({id: Date.now()})

    
   
    var formData = new FormData(this.formRef.current);
    formData.append("Category", this.state.Category);

    var settings = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    Axios.post(
      "http://localhost:4000/api/user-listing",
      formData,
      settings
    ).then((res) => {});

    
  };

  navigateHome = (e) => {
    navigate('/')
  }



  render() {
    return (
      // style={{ color: "white", fontSize: "3.8em" }}

      <div>

<header className="share_header">
<div className="share_header_wrapper">

<img src={BackArrow} onClick={this.navigatePrev} alt=""/>
<div>
<h1 className="category_header">
<span>Share Item</span></h1>
</div>

</div>
</header>

        <div className="form_wrapper">
          <div className="form_container">
            <form onSubmit={this.handleSubmit} ref={this.formRef}>
              <div className="share_page_margin">
                <h1>
                  {" "}
                  What would you like <br /> to give?
                </h1>
              </div>

              <div className="form_icons_wrapper">
                <div className="food_icons_container">
                  <img
                    onClick={this.handleCategoryFood}
                    value={this.state.Category}
                    src={Appleadd}
                    alt=""
                  />

                  <img
                    onClick={this.handleCategoryItems}
                    value={this.state.Category}
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
                <h1 style={{ color: "gray" }}>Food or item name</h1>

                <input
                  style={{ color: "gray" }}
                  type="text"
                  name="Title"
                  required
                />

                <h1 style={{ color: "gray" }}>Please enter a description</h1>

                <textarea
                  style={{ color: "gray" }}
                  rows="4"
                  cols="30"
                  name="Description"
                  required
                ></textarea>

                <h1 style={{ color: "gray" }}>Contact details</h1>

                <input
                  style={{ color: "gray" }}
                  type="text"
                  name="Phone"
                  required
                />
              </div>

              <div className="add_image_container">
                <label
                  style={{ fontSize: "1.5rem", color: "gray" }}
                  htmlFor="files"
                >
                  <div>Select Image</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img src={uploadphoto} alt="" />
                    <div>{this.state.filename}</div>
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

              <div className="button_wrapper" onClick={this.navigateHome}>
                <button type="submit" className="add_button">
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
