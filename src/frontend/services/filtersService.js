const productInCartWishlistChecker = ( userObjectArray , productsArray , objectArrayName ) => {
    let activationFlag = false;
    let customArray = [...productsArray];
    if( userObjectArray !== [] ) {
        for( let i = 0; i < userObjectArray.length; i++ ) {
            for( let j = 0 ; j < customArray.length; j++ ) {
                if ( userObjectArray[i]._id === customArray[j]._id ) { 
                    if( objectArrayName === 'cart') {
                        customArray[j].inCart = true;
                    }
                    if( objectArrayName === 'wishlist' ) {
                        customArray[j].inWishlist = true;
                    }
                    activationFlag = true;
                }
            }
        }
    }
    return activationFlag ? customArray : productsArray;
}

const initialFilters = {
    category: {
        formals: false,
        boots: false,
        sneakers: false,
        sports: false,
        hiking: false
    },
    rating: {
        minRating: 0
    },
    price: {
        maxPrice: 0
    },
    sort: {
        sortBy: ''
    },
    includeOutOfStock : false,
    onlyFreeDelivery : false,
    featured : false
};

const handleOutOfStock = (products, outOfStock) => {
    let activationFlag = outOfStock;
    let currentProducts = [];
    currentProducts = products.filter( product => product.Stock > 0);
    return activationFlag ? products : currentProducts; 
}

const handleFeatured = (products, featured) => {
    let activationFlag = featured;
    let currentProducts = [];
    currentProducts = products.filter( product => product.isFeatured === true);
    return activationFlag ? currentProducts : products; 
}

const handleFreeDelivery = (products, onlyFreeDelivery) => {
    let activationFlag = onlyFreeDelivery;
    let currentProducts = [];
    currentProducts = products.filter( product => product.isFreeDelivery === true);
    return activationFlag ? currentProducts : products;
}

const handleRatings = (products, ratings) => {
    return products.filter( x => x.rating >= ratings);
}

const handleRange = (products, maxPriceRange) => {
    return maxPriceRange > 0 ? products.filter( x => x.currentPrice <= maxPriceRange) : products;
}

const handleCategories = (products,categories) => {
    let currentProducts = [];
    let optionSelectedFlag = false;

    for( let key in categories ) {
        if( categories[key] ) {
            currentProducts = jodo(currentProducts , products.filter(x => x.categoryName === key));
            optionSelectedFlag = true;
        }
    }
    return optionSelectedFlag ? currentProducts : products ;
}

const handleSortBy = (products, sortType) => {
    let currentProducts = [];
    let activatedFlag = false;
    if ( sortType === 'highlow' ) {
        currentProducts = products.sort((a,b) => b.currentPrice - a.currentPrice );
        activatedFlag = true;
    } else if ( sortType === 'lowhigh' ) {
        currentProducts = products.sort((a,b) => a.currentPrice - b.currentPrice );
        activatedFlag = true;
    } else if ( sortType === '' ) {
        currentProducts = products;
        activatedFlag = true;
    } else {
        currentProducts = products;
    }
    return activatedFlag ? currentProducts : products;
}

const jodo = (...arr) => {
    const concatedProducts = arr.reduce((acc,curr) => acc.concat(curr) );
    return concatedProducts;
}

const handleAllFilters = (products,state) => {
    let currentFilteredData = products;
    currentFilteredData = handleCategories(currentFilteredData, state.category);
    currentFilteredData = handleRatings(currentFilteredData, state.rating.minRating);
    currentFilteredData = handleRange(currentFilteredData, state.price.maxPrice);
    currentFilteredData = handleOutOfStock(currentFilteredData, state.includeOutOfStock);
    currentFilteredData = handleFreeDelivery(currentFilteredData, state.onlyFreeDelivery);
    currentFilteredData = handleFeatured(currentFilteredData, state.featured);
    currentFilteredData = handleSortBy(currentFilteredData, state.sort.sortBy);
    return currentFilteredData;
}

export { handleAllFilters , initialFilters , productInCartWishlistChecker }; 