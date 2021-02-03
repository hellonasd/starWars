import React from 'react';
import ItemList from "../item-list";
import {withData, withSwapiService} from "../hoc-helper";

const withChildFunction = (Wrapped, fn) => {
  return function(props) {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}


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



const PersonList = withSwapiService(
  withData(withChildFunction(ItemList,renderName)
  ),
  mapPersonMethodToProps
  );

const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList,renderName))
  ,mapPlanetMethodToProps
  );

const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList,renderModelAndName)),
  mapStarshipMethodToProps
  );

export { PersonList, PlanetList, StarshipList };
