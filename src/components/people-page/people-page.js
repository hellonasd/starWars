import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import PersonDetails from "../item-detail/person-details";
import ErrorBoundry from "../error-boundry";
import "./people-page.css";
import SwapiService from "../../services/swapi-service";

import Row from "../row";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 3,
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    );
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <>
        <ErrorBoundry>
          <Row left={itemList} right={personDetails} />;
        </ErrorBoundry>
      </>
    );
  }
}
