import axios from 'axios';

const getProducts = async () => {
    let actionSuccess = false;
    let actionResponse;
    try {
        actionResponse = await axios.get('/api/products');
        actionSuccess = true;
    } catch(error) {
        actionResponse = error;
        actionSuccess = false;
    }
    return { actionResponse , actionSuccess }
};

const getFeaturedProducts = (productsArray) => {
    return productsArray.filter(product => product.isFeatured === true);
}

export { getProducts , getFeaturedProducts };