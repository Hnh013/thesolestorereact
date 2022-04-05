import axios from 'axios';

const getCart = async (myToken) => {
    let actionSuccess = false;
    let actionResponse;
    try {
      actionResponse = await axios.get('/api/user/cart', { headers: { authorization: myToken }});
      actionSuccess = true;
    } catch(error) {
        actionResponse = error;
        actionSuccess = false;
    };
    return {actionResponse , actionSuccess};
}

const addItemToCart = async (myToken, productDetails) => {
  let actionSuccess = false;
  let actionResponse;
  try {
    actionResponse = await axios.post('/api/user/cart', { product : productDetails } , { headers: { authorization: myToken }});
    actionSuccess = true;
  } catch(error) {
      actionResponse = error;
      actionSuccess = false;
  }
  return {actionResponse , actionSuccess};
}

const updateItemInCart = async (myToken, productId, actionType) => {
    let actionSuccess = false;
    let actionResponse;
    try {
        actionResponse =await axios.post(`/api/user/cart/${productId}`, { action : { type : actionType } } , { headers: { authorization: myToken }});
        actionSuccess = true;
    } catch(error) {
        actionResponse = error;
        actionSuccess = false;
    }
    return {actionResponse , actionSuccess};
  }

const removeItemFromCart = async (myToken, productId) => {
    let actionSuccess = false;
    let actionResponse;
    try {
        actionResponse = await axios.delete(`/api/user/cart/${productId}`, { headers: { authorization: myToken }});
        actionSuccess = true;
    } catch(error) {
        actionResponse = error;
        actionSuccess = false;
    }
    return {actionResponse , actionSuccess};
  }

export { addItemToCart , removeItemFromCart , updateItemInCart , getCart };