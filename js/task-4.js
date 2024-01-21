function getShippingCost(country) {
    let cost;

    switch (country.toLowerCase()) {
        case 'china':
            cost = 100;
            break;
        case 'chile':
            cost = 250;
            break;
        case 'australia':
            cost = 170;
            break;
        case 'jamaica':
            cost = 120;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }

    return `Shipping to ${country} will cost ${cost} credits`;
}

