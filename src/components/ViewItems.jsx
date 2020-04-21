import React, { Component } from 'react';
import Axios from "axios";
import { navigate } from "@reach/router";

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






    render() {
        return (
            <div>

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
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}




