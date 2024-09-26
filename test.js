const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');
test("One euro should be 1.07 dollars", function() {
    

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One YEN should be 1.07 dollars", function() {

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

// Test for fromDollarToYen function
test("One dollar should be 146.26 yen", () => {
    // Conversion steps: 1 USD -> EUR -> JPY
    const yen = fromDollarToYen(1); // 1 USD to Yen
    const expected = (1 / 1.07) * 156.5; // First convert 1 USD to Euro, then Euro to Yen
    expect(yen).toBeCloseTo(expected, 2); // Check up to 2 decimal places
});

// Test for fromYenToPound function
test("1000 yen should be 5.56 pounds", () => {
    // Conversion steps: 1000 JPY -> EUR -> GBP
    const pounds = fromYenToPound(1000); // 1000 JPY to Pounds
    const expected = (1000 / 156.5) * 0.87; // First convert Yen to Euro, then Euro to GBP
    expect(pounds).toBeCloseTo(expected, 2); // Check up to 2 decimal places
});