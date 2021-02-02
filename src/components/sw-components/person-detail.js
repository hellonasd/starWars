import React from "react";
import ItemDetails from "../item-detail";
import { Record } from "../item-detail/item-detail";

import { withSwapiService } from "../hoc-helper";


const PersonDetails = ({ itemId, swapiService }) => {

  const {getPerson, getPersonImage} = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
