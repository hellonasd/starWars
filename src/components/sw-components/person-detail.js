import React from "react";
import ItemDetails from "../item-detail";
import { Record } from "../item-detail/item-detail";

import { withSwapiService } from "../hoc-helper";


const PersonDetails = (props) => {

  
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};


const mapMethodsToProps = (swapiService) => {
  return {
    getData : swapiService.getPerson,
    getImageUrl : swapiService.getPersonImage
  }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);
