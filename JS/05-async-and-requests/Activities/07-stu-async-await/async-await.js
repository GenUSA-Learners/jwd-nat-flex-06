let stocks = {
  fruit: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

// Async Await

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("The shop is closed"));
    }
  });
}

// Turn the kitchen function into an async function and then fill in the try block with the steps from the ice cream image.
const kitchen = () => {
  try {
  } catch {
    console.log("The customer left");
  }
};

kitchen();
