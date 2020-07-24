### Notes
* Assumption: categories are not case sensitive
* Assumption: item names and category name length wont be super long
* Assumption: prices is max 999
* Possible limitations: there is no feedback if an item is added or deleted, the list just grows/shrinks
* Limitation: You can add the same item more than once
* Opted to validate `price` in component and not action.
* Assumption: price will be input via browser, this handles the validation
* I opted out of using `material-ui` too much since it felt bulky for the size of the limitation but I would proably use in different circumstances
* The sort and filter, may become expensive if the size of list grows or gets more fields
* I was learning to use Redux as I went so the implementation could possibly be better
* The styling is not really optimized for changing screen sizes and devices
* Storing and using categories could be a better: not if allowing the blank categories is a good idea.
