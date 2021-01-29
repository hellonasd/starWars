import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorButton from "../error-button";

import "./item-detail.css";

export default class itemDetails extends Component {
  swapiServise = new SwapiService();

  state = {
    item: null,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    

    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.setState({
        item,
        image: getImageUrl(item),
      });
    });
  }

  render() {
    const { item, image } = this.state;

    if (!item) {
      return <span>SElect a person from a list</span>;
    }

    const { name, gender, birthYear, eyeColor } = item;

    return (
      <div className="person-details card">
        <img className="person-image" src={image} alt="character" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">eye color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}