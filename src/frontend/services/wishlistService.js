import axios from 'axios';

const getWishlist = async (myToken) => {
    let actionSuccess = false;
    let actionResponse;
    await axios.get('/api/user/wishlist', { headers: { authorization: myToken }}).then((response) => {
      actionResponse = response;
      actionSuccess = true;
    }).catch((error) => {
        actionResponse = error;
        actionSuccess = false;
    });
    return {actionResponse , actionSuccess};
}

const addItemToWishlist = async (myToken, productDetails) => {
  let actionSuccess = false;
  let actionResponse;
  await axios.post('/api/user/wishlist', { product : productDetails } , { headers: { authorization: myToken }}).then((response) => {
    actionResponse = response;
    actionSuccess = true;
  }).catch((error) => {
      actionResponse = error;
      actionSuccess = false;
  });
  return {actionResponse , actionSuccess};
}

const removeItemFromWishlist = async (myToken, productId) => {
    let actionSuccess = false;
    let actionResponse;
    await axios.delete(`/api/user/wishlist/${productId}`, { headers: { authorization: myToken }}).then((response) => {
      actionResponse = response;
      actionSuccess = true;
    }).catch((error) => {
        actionResponse = error;
        actionSuccess = false;
    });
    return {actionResponse , actionSuccess};
  }

export { addItemToWishlist , removeItemFromWishlist , getWishlist };