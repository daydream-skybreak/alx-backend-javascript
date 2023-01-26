import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup () {
  const upload = uploadPhoto();
  const create = createUser();

  return Promise.all([upload, create])
    .then((res) => { console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`); })
    .catch(() => console.log('Signup system offline'));
}
