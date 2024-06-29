export default function iterateThroughObject(reportWithIterator) {
  let newValue = '';
  for (const value of reportWithIterator) {
      newValue +=  value !== reportWithIterator.slice(-1)[0] ? value + ' | ' : value; 
  }
  return newValue;
 }
