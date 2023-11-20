//Pizza Order

//Add an event listener to the button to run the place order function
document.getElementById("btn").addEventListener("click", placeOrder);

//Sotre order code in a function
function placeOrder() {
  //Input
  let size = prompt("Enter size of pizza (small, medium or large): ");
  let topping1 = prompt("Enter first topping: ");
  let topping2 = prompt("Enter your second topping: ");

  //Process
  let msg = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;

  //Output
  alert(msg);
}
