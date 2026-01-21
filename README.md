# Signals Shop - Udemy Course Project

Welcome to the **Signals Shop** project! This project is part of your learning journey in the **NGRX Signal Store** Udemy course.

## Project Overview

The UI for the Signals Shop is ready, and we will add state management features to the application throughout the course. After learning new features of NGRX Signals in each section, we will apply those features to this project. By the end of the course, the application will be fully functional, showcasing the power of NGRX Signals.

The application has an inventory of signal-related "fictional" products. You can search through the inventory and add items to the cart. Then you can modify the quantities of each item in the cart. Finally, you can checkout the cart. The application keeps your cart state stored in the local storage, so you can continue from where you left off.

## How to Use This Project

1. Follow the instructions provided in the course for each section.
2. Implement the state management features as you progress through the lectures.
3. Complete the project step-by-step until it becomes a fully functional shopping application.

## Current Section: Distributed stores - Refactor

In this section, we will use the techniques we learned in section 5, to refactor our application. We will divide our state management into several stores.

1. The `ShopStore` which is the main, root, store. It takes care of state management for data that is global to the entire application
2. The `ProductListStore` which belongs to the product list view, and manages the state of the product list, including all its sub components
3. The `CartStore` which manages the state of the cart view and its sub components

### The UI has already been refactored
* Ngrx signals was upgraded to version 19
* The components were divided into "features" and there are now 2 feature folders, one for the product list and one for the cart
* 2 new slice types were defined, and 2 new stores instantiated, but with no other features
* Currently the Shop Store still manages EVERYTHING
* And all components still work with the shop store.

### The target of this exercise
In this section we will do the following:
1. Move the view models into the more specific stores
2. Move all the vm builders
3. Reflect the relevant methods in the local stores
4. Add implementation to the local stores, possibly while relying on the shop store
5. Make sure all components in each feature only work with the local store


Enjoy building the Signals Shop and applying your new skills!

