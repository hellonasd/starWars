import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator";
import PropTypes from 'prop-types';
import Spiner from "../spiner";
import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  static propTypes = {
    updateInterval : PropTypes.number
}

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false,
    });
  };
  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spiner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

RandomPlanet.defaultProps = {
  updateInterval: 10000,
};

const PlanetView = ({ planet }) => {
  const { id, population, rotationPeriod, diameter, name } = planet;
  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="g"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
