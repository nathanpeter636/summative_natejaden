import React, { Component } from 'react';
import Axios from "axios";
import { navigate } from "@reach/router";

export default class ViewCategory extends Component {


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






    render() {
        return (
            <div>

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
              />
            );
          })}
                
            </div>
        )
    }
}



export class ShowFood extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}




