import React from 'react';
import ItemList from "../item-list";
import {withData, withSwapiService, withChildFunction, compose} from "../hoc-helper";




const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({model, name }) => <span>{name} ({model}) </span>

const mapPersonMethodToProps = (swapiServise) => {
  return {
    getData : swapiServise.getAllPeople,
  }
}
const mapPlanetMethodToProps = (swapiServise) => {
  return {
    getData : swapiServise.getAllPlanets,
  }
}
const mapStarshipMethodToProps = (swapiServise) => {
  return {
    getData : swapiServise.getAllStarships,
  }
}



const PersonList = compose(
  withSwapiService(mapPersonMethodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)

const PlanetList = compose(
  withSwapiService(mapPlanetMethodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)
const StarshipList = compose(
  withSwapiService(mapStarshipMethodToProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList)

export { PersonList, PlanetList, StarshipList };
