# FoodDeliveryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



Food Delivery Application using Angular

In this assignment, you will be building a food delivery application using Angular. The application will simulate a platform where users can browse restaurants, view their menus, place orders, and track deliveries

Requirements:

1. Restaurant Listing: Display a list of restaurants with their names, images, ratings, and delivery time estimates. Use Angular's built-in directives to iterate over the restaurant list and display the data dynamically.
2. Restaurant Details: Implement a feature that allows users to view detailed information about a selected restaurant, including its menu, address, contact information, and customer reviews.
3. Menu and Ordering: Enable users to view the menu of a selected restaurant, add items to their cart, and place orders. Implement a shopping cart component that displays the added items, quantities, and total prices. Allow users to update quantities or remove items from the cart.
4. User Authentication: Add user authentication functionality to the application. Implement a user registration and login system using Angular's authentication libraries or third-party packages like Firebase Authentication.
5. Order Tracking: Implement a feature that allows users to track the status of their orders. Display real-time updates on the order status, such as "order received," "preparing," "out for delivery," and "delivered."
6. Address Selection: Provide users with the ability to add and manage their delivery addresses. Implement a feature that allows users to select a delivery address during the checkout process.
7. Responsive Design: Ensure that the application is responsive and works well on different screen sizes. Implement a mobile-friendly layout using CSS media queries.

Guidelines:

1. Use Angular CLI to generate the project and scaffold the initial components.
2. Organize your project structure by creating separate components for restaurant listing, restaurant details, menu and ordering, order tracking, and user authentication. Also don’t forgot to split the functionality in various modules.
3. Utilize Angular services to manage the restaurant and menu data, as well as the cart and order tracking functionality. (No need of backend/DB)
4. Utilize Angular routing to navigate between different views of the application, such as the restaurant listing, restaurant details, menu, and order tracking pages.
5. Implement form validation to ensure the correctness of user input during the ordering process.
6. Apply appropriate styling using CSS or a CSS framework of your choice (e.g., Bootstrap, Material Design).
7. Write clear and concise code comments to explain your implementation.
8. Feel free to make assumptions but make sure to specify the assumptions in readme file.

Submission:

1. Create a GitHub repository for your project and commit your code regularly or share the code in zip file without node_modules.
2. Include a README.md file with mentioning the assumptions or any other required details.

Bonus Tasks (Optional):

- Implement a user rating system that allows users to rate and provide reviews for restaurants.
- Add a favourite restaurants feature that allows users to save their preferred restaurants for quick access.
- Create 5 Unit Test Cases each for at least 2 components and 1 service.  

