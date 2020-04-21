import React, { Component } from "react";


import "../css/addlisting.css";

import Axios from "axios";

import "../images/food-delivery.png";

import fooddelivery from "../images/shopping-bag.png";
import household from "../images/household (1).png";
import uploadphoto from "../images/photo.png";
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

    this.formRef = React.createRef();
  }

  navigatePrev = (e) => {
    navigate(-1)
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
  };

  handleSubmit = (e) => {
    e.preventDefault();

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

  render() {
    return (
      // style={{ color: "white", fontSize: "3.8em" }}

      <div>
      <header className="share_header">

<img src={BackArrow} onClick={this.navigatePrev} alt=""/>
<div>
<h1 className="category_header">
<span style={{fontWeight: '500'}}>Add</span></h1>
</div>

</header>

        <div className="form_wrapper">
          <div className="form_container">
            <form onSubmit={this.handleSubmit} ref={this.formRef}>
              <h1>
                {" "}
                What would you like <br /> to Give?
              </h1>

              <div className="form_icons_wrapper">
                <div className="food_icons_container">
                  <img
                    onClick={this.handleCategoryFood}
                    value={this.state.Category}
                    src={fooddelivery}
                    alt=""
                  />

                  <img
                    onClick={this.handleCategoryItems}
                    value={this.state.Category}
                    src={household}
                    alt=""
                  />
                </div>

                <div className="icon_names">
                  <p>Food</p>
                  <p>Items</p>
                </div>
              </div>

              <div className="input_wrapper">
                <h1 style={{ color: "gray" }}>What is it? (Title)</h1>

                <input
                  style={{ color: "gray" }}
                  type="text"
                  name="Title"
                  required
                />

                <h1 style={{ color: "gray" }}>Give it a Description</h1>

                <textarea
                  style={{ color: "gray" }}
                  rows="4"
                  cols="30"
                  name="Description"
                ></textarea>

                <h1 style={{ color: "gray" }}>Mobile no.</h1>

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

              <div className="button_wrapper">
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
