import axios from 'axios';

const loginAction = async (credentials) => {
    let actionSuccess = false;
    let actionResponse;
    await axios.post('/api/auth/login/', credentials).then((response) => {
      actionResponse = response;
      actionSuccess = true;
    }).catch((error) => {
        actionResponse = error;
        actionSuccess = false;
    });
    return {actionResponse , actionSuccess};
}

const signupAction = async (userDetails) => {
  let actionSuccess = false;
  let actionResponse;
  await axios.post('/api/auth/signup', userDetails).then((response) => {
    actionResponse = response;
    actionSuccess = true;
  }).catch((error) => {
      actionResponse = error;
      actionSuccess = false;
  });
  return {actionResponse , actionSuccess};
}

export { loginAction , signupAction };