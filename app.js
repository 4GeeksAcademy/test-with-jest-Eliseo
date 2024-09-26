// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // Japanese Yen
    "USD": 1.07,  // US Dollar
    "GBP": 0.87,  // British Pound
  };
  
  // Convert from Euro to Dollar
  function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs["USD"];
  }
  
  // Convert from Dollar to Yen
  function fromDollarToYen(dollarAmount) {
    // Convert dollar to euro first, then euro to yen
    let euroAmount = dollarAmount / oneEuroIs["USD"];
    return euroAmount * oneEuroIs["JPY"];
  }
  
  // Convert from Yen to Pound
  function fromYenToPound(yenAmount) {
    // Convert yen to euro first, then euro to pound
    let euroAmount = yenAmount / oneEuroIs["JPY"];
    return euroAmount * oneEuroIs["GBP"];
  }
  
  module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound  };