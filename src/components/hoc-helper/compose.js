
const compose = (...fn) => (Wrapped) => {
  return fn.reduceRight((prevVal, f) => f(prevVal),Wrapped)
} 

export default compose;