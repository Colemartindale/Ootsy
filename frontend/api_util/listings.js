export const fetchListings = () => (
    $.ajax({
        url: "/api/listings"
    })
);

export const fetchListing = listingId => (
    $.ajax({
        url: `/api/listings/${listingId}`
    })
);

export const fetchCategoryListings = category => (
    $.ajax({
        url: `/api/listings/category/${category}`
    })
);

export const fetchSearchListings = query => (
    $.ajax({
        url: `/api/listings/search/${query}`
    })
);