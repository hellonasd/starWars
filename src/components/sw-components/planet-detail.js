import React from "react";
import ItemDetails from "../item-detail";
import { Record } from "../item-detail/item-detail";

import { withSwapiService } from "../hoc-helper";

const PlanetDetails = (props) => {
  
  return (
    <ItemDetails
      {...props}
    >
      <Record field="population" label="Population" />
      <Record field="rotatioPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};
const mapMethodsToProps = (swapiService) => {
  return {
    getData : swapiService.getPlanet,
    getImageUrl : swapiService.getPlanetImage
  }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
