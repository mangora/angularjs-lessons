### Introductory Recap ###

Hello boys and girls,

After a while it is time for a recap.
In order to fully grasp the previous lessons you will be given a set of three tasks.

1. Meal quantity $watch
2. Meal details
3. Meal and Restaurant custom filter search

##### These tasks should be done by yourself. Helping each other is **not** allowed.
Note: Only if a colleague of yours is stuck with something and can not solve it, then you are encouraged to help.

##### Important! The solutions for all these tasks should be in one project and you should put in a JSFiddle.
##### After that send me an email with a [Plunker](http://plnkr.co/) link. Thank you.

##### A more detailed description of tasks is going to follow.


#### 1. Meal quantity watch ####

User should be able to order multiple quantities of meals, calculate the total cost amount and
if applicable show an appropriate discount.

e.g. User should be able to order two chicken drumsticks and the app should show :
- 2 x Chicken drumsticks - 500

**Additional bonus**:
Make a Numeric stepper for the Meal item quantity on Restaurant Detail view. So that you can order a specific quantity
of selected meals and based on that do a refactor of the order discount calculate function.


#### 2. Meal details ####

User should be able to click on a meal and see its details on a separate page. The Meal Details page should be similar
to the Restaurant Details page.

*Small hint*:
You should have a Meal view, controller and a service for getting the meal. For now, the service should get all
restaurants and load up the specified meal based on the meal id.


#### 3. Meal and Restaurant custom filter search ####

User should be able to do a filter search for meals on the Restaurant Detail page.
(similar to restaurant search on Restaurants page)

**Additional bonus**:
Implement a custom filter function for both filter searches (meals and restaurants) so that the filter functions do a
search only by the following parameters:

*Restaurant*:
- title
- address
- telephone

*Meal*:
- name