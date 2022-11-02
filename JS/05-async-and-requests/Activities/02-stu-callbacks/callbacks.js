let stocks = {
  fruit: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// CALLBACK FUNCITONS, AND CALLBACK HELL

let order = (fruitName, callProduction) => {
  setTimeout(() => {
    console.log(`${stocks.fruit[fruitName]} was selected`);

    callProduction();
  }, 2000);
};

// Use setTimeout to fill in the body of the production function and using the steps in the image make the ice cream

let production = () => {
  // Your code goes here
};

// Call the order fucntion below
