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