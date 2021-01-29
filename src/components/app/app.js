import React from "react";

import Header from "../header";

import ErrorIndicator from "../error-indicator";
// import ItemList from "../item-list";
// import ErrorButton from "../error-button/";
import SwapiService from "../../services/swapi-service";
// import PeoplePage from "../people-page";
import "./app.css";
import Row from "../row";
import ItemDetails from "../item-detail";

export default class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onItemSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const {
      getPerson, 
      getStarship, 
      getPersonImage,
      getStarshipImage} = this.swapiService;

    const personDetails = (
      <ItemDetails 
      itemId={11}
      getData={getPerson}
      getImageUrl={getPersonImage}
      />
    )

    const starshipDetails = (
      <ItemDetails itemId={5} 
      getData={getStarship}
      getImageUrl={getStarshipImage}
      />
    )
    return (
      <div className="stardb-app">
        <Header />
        {/* {planet} */}

        {/* <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div> */}
        <Row
        left={personDetails}
        right={starshipDetails}
        />
      </div>
    );
  }
}
