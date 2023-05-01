export const getDiscountedPricePercetange = (
  // a functionn that takes 2 parameters
  originalPrice, //original price of the product
  discountedPrice //price the product is offered after discount
) => {
  const discount = originalPrice - discountedPrice; //calculates the price discounted
  const discountPercentage = (discount / originalPrice) * 100; //calculates the percentage of discount
  return discountPercentage.toFixed(2); //returns the discount percentage round to 2
};
