import createReportObject from './12-createReportObject';

export default function createIteratorObject(report) {
  const newArray = [];
  const values = Object.values(report.allEmployees);
  for (const value of values) {
    newArray.push(...value);
  }
  return newArray;
}
