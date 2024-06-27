import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const promiseTwo = await uploadPhoto();
    const promiseOne = await createUser();
    return {
      photo: promiseTwo,
      user: promiseOne,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
