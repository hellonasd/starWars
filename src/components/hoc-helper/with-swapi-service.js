import React from "react";

import { SwapiServiceConsumer } from "../swapi-service-contex";

const withSwapiService = (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          return (
            <Wrapped {...props} swapiService={swapiService} hello="hello" />
          );
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
