import React from 'react'



const withChildFunction = (fn) => (Wrapped) => {
  return function(props) {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}

export default withChildFunction;