let pizza = new Object();
pizza.crust = "plain";
pizza.cheese = "mozzarella";
pizza.sauce = "red";
pizza.addToppings = function () {
    console.log("Please add pepperoni and sausage");
}
pizza.addToppings(); 
pizza.orderPizza = function () {
    console.log(crust);
    console.log(cheese);
    console.log(sauce);
    console.log(addToppings());
}