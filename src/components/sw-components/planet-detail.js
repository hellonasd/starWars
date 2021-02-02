import React from "react";
import ItemDetails from "../item-detail";
import { Record } from "../item-detail/item-detail";

import { withSwapiService } from "../hoc-helper";

const PlanetDetails = ({ itemId, swapiService }) => {
  const {getPlanet, getPlanetImage} = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="population" label="Population" />
      <Record field="rotatioPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

export default withSwapiService(PlanetDetails);
