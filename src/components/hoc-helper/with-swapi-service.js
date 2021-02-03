import React from "react";

import { SwapiServiceConsumer } from "../swapi-service-contex";

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  return function (props) {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <Wrapped {...props} {...serviceProps}/>;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
