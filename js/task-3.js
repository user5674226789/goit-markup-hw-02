function checkForSpam(message) {
    const lowercasedMessage = message.toLowerCase(); // Перетворення всіх символів рядка в нижній регістр для порівняння
    if (lowercasedMessage.includes('spam') || lowercasedMessage.includes('sale')) {
        return true;
    } else {
        return false;
    }
}
console.log(checkForSpam("Buy now, great sale!")); // true
console.log(checkForSpam("Low prices, SPAM discounts")); // true
console.log(checkForSpam("Check out our latest products")); // false
