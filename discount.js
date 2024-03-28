function calculatePrice(price, discountPercentage, taxPercentage) {
    const discountPer = discountPercentage / 100;
    const taxPer = taxPercentage / 100;
    const discount = price * discountPer;
    const tax = price * taxPer ;
    finalPrice = price - discount + tax;
    return finalPrice
}

calculatePrice(1000, 10, 8)
console.log(finalPrice)

calculatePrice => (price, discountPercentage, taxPercentage) => {
    const discountPer = discountPercentage / 100;
    const taxPer = taxPercentage / 100;
    const discount = price * discountPer;
    const tax = price * taxPer ;
    finalPrice = price - discount + tax;
    finalPrice
}

   