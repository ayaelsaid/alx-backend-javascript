import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promiseOne = signUpUser(firstName, lastName);
  const promiseTwo = uploadPhoto(fileName);

  return Promise.allSettled([promiseOne, promiseTwo]).then((results) => (
    results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : String(result.reason),
      }))
    ));
}
