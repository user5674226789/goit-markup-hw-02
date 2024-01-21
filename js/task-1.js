def makeTransaction(quantity, pricePerDroid, customerCredits) {
    totalPrice = quantity * pricePerDroid;
    if totalPrice > customerCredit: 
    return "Insufficient funds"
    else:
    message = f"You ordered {quantity} droids worth {totalPrice} credits!"
    return message
}
