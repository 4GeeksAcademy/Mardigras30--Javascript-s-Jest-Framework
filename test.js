// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
    
     
});

test("one dollar should be 127.9 yen", function(){

    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(1);

    expect(yens).toBe(127.9); // 1 dollar should be 127.9 yen

    expect(fromDollarToYen(0)).toBe(0); // 0 dollar should be 0 yen
    expect(fromDollarToYEn(5)).toBe(639.5); // 5 dollars should be 639.5 yen
    expect(fromDollarToYEn(-2)).toBe(-255.8); // -2 dollars should be -255.8 yen
    expect(fromDollarToYEn(0.5)).toBe(63.95); // 0.5 dollars should be 63.95 yen
});
test("one yen should be 106.58 yens", function(){
    const{ fromYenToPound } = require('./app.js')

    const yens = fromYenToPound(127.9);
    const expexted = 127.9 / 127.9 * 0.8;

    expect(pounds).toBeCloseTo(expected, 5); // 127.9 yen should be 0.0063 pounds
    
    expect( fromYenToPound(0)).toBe(0); // 0 yen should be 0 pounds
    expect( fromYenToPound(500)).toBeCloseTo(3.92, 2); // 500 yen should be 3.91 pounds
    expect( fromYenToPound(-200)).toBeCloseTo(-1.57, 2); // -200 yen should be -1.57 pounds
    expect( fromYenToPound(1000)).toBeCloseTo(7.82, 2); // 1000 yen should be 7.82 pounds
})
