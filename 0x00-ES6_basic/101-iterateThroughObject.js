export default function iterateThroughObject(reportWithIterator) {
  let newValue = '';
  for (const value of reportWithIterator) {
    if (value !== reportWithIterator.slice(-1)[0]) {
      newValue +=  value !== reportWithIterator.slice(-1)[0] ? value + ' | ' : value; 
  }
  return newValue;
 }
