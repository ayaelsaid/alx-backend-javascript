import signUpUser from "./4-user-promise";
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  let promiseOne = signUpUser(firstName, lastName);
  let promiseTwo = uploadPhoto(fileName);
  
  return Promise.allSettled([promiseOne, promiseTwo]).then((results) => {
    return results.map((result) => {
      return {
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      };
    });
  });
}
