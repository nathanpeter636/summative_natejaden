import React, { Component } from 'react'
import { navigate } from "@reach/router";

import "../css/addlisting.css"
import { IoIosAddCircle } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import Axios from 'axios'

import "../images/food-delivery.png"

import fooddelivery from "../images/shopping-bag.png"
import household from "../images/household (1).png"
import uploadphoto from "../images/photo.png"

export default class AddListings extends Component {

    constructor(props) {
        super(props)
      
        this.state = { Title: "", Category: "", Food: "", Items: "", Phone: "", Description: ""   };
      }

      handleCategoryFood = event => {
    
        this.setState({ Category: "Food" });
       
        
        console.table(this.state.Category)
      
      }

      handleCategoryItems = event => {

        this.setState({ Category: "Items" });

        console.table(this.state.Items)
      }


      handleTitle = event => {
        this.setState({ Title: event.target.value });
       
        console.table(this.state.Title)
        
      };
    
      

      handleDescription = event => {
    
        this.setState({ Description: event.target.value });
       
        
        console.table(this.state.Description)
    
      }


      handlePhone = event => {
    
        this.setState({ Phone: event.target.value });
       
        
        console.table(this.state.Phone)
    
      }

      handleSubmit = e => {
          e.preventDefault()
          console.log("submitting listings")
          console.table(this.state)
      }
    
      savelisting = (event) => {

        let data = {Category: this.state.Category, Title: this.state.Title, Description: this.state.Description, Phone: this.state.Phone}

        Axios.post("http://localhost:4000/api/user-listing", data).then(res =>{

        console.table(res.data)
                this.setState( {users: res.data})
        })

      }

render() {
    return (
        // style={{ color: "white", fontSize: "3.8em" }}

        
<div>

    <header className="share_header" >
       <h1 >Add</h1>
    </header>
               

        <div className="form_wrapper">

        
            <div className="form_container">
            <form onSubmit={this.handleSubmit}>



            <h1 > What would you like <br/> to Give?</h1>

            <div className='form_icons_wrapper'>

            <div className="food_icons_container">
            <img onClick={this.handleCategoryFood} value={this.state.Category} src={fooddelivery} alt=""/>
            
            <img onClick={this.handleCategoryItems} value={this.state.Category} src={household} alt=""/>
            

           
            
            </div>
             
             <div className="icon_names">
            <p>Food</p>
            <p>Items</p>
            </div>

            </div>


       

        
        <div className="input_wrapper">

        <h1 style={{color: "gray"}}>What is it? (Title)</h1>

            <input style={{color: "gray"}} type="text" 
             value={this.state.Title}
             onChange={this.handleTitle} required/>

        <h1 style={{color: "gray"}}>Give it a Description</h1>

        <textarea style={{color: "gray"}} rows="4" cols="30" name="comment" form="usrform"
         value={this.state.Description}
         onChange={this.handleDescription}>
</textarea>

<h1 style={{color: "gray"}}>Mobile no.</h1>

<input style={{color: "gray"}} type="text" value={this.state.Phone}
         onChange={this.handlePhone} required/>



        </div>
        

        <div className="add_image_container">

<h2 style={{fontSize: '1.5rem', color: "gray"}}>Add an image</h2>


                <img src={uploadphoto}  alt=""/>

                

                </div>

        <div className="button_wrapper">
                <button type="submit" onClick={this.savelisting} className="add_button">
                 Done
                </button> 
            
                </div>  
            

            </form>
        </div>
        </div>
        </div>
        
    )
}


}
