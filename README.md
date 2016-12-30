# Module 1 assignment.

## Dear Grader: Optional features include styling decorations, not counting empty items


## General Idea

The idea of this assignment is to create a front-end application that presents the user
with a textbox where they can list comma-separated items they usually eat for lunch.
Once that's entered, the user has to click the "Check If Too Much" button.

If the number of items in the textbox is less than or equal to 3 (e.g., 1, 2, or 3),
a message should show up under to the textbox saying "Enjoy!". If the number of
items is greater than 3 (4, 5, and above), the message "Too much!" should show up
under the textbox. (Hint: To implement this behavior you can utilize the split method.
  See documentation for that method)

If the textbox is empty and the user clicks the "Check If Too Much" button, the
message "Please enter data first" should show up. 'Empty' here means either ""
(empty string) or a string with just spaces in it. (Hint: AngularJS ng-model
  already performs the trimming for you, so there shouldn't be anything you need to do.)
Only 1 message should be shown at any given time. In other words, if you have
both messages "Enjoy!" and "Too much!" showing up at the same time, it's an error.
You are not required to handle a case where there is no item between some commas.
For example, you are free to consider this case item 1, item2,,item3 or this
case item 1, item2, ,item3 as 4 items in the list. However, you can implement
checking for an 'empty' item as a bonus feature (ungraded). Please make sure to
put a comment somewhere next to the input textbox stating that you do NOT
consider and empty item, i.e., , , as an item towards to the count.

## Following Rules

Breaking one of these rules will cause you to fail the assignment:

You are not allowed to use regular HTML onclick attribute to bind behavior to
the button. You must use the AngularJS way of binding behavior.
At no point should your Javascript code look up anything in the DOM of the browser.

## OPTIONAL IMPLEMENTATION
Additional decorations have been added:
If the message is "Enjoy!" the border color around the message is green.
If the message is "Too much!" the border color around the message is orange.
If the message is "Please enter data first", make the border color is red.

Additional validation assumptions have been added:
Cases when items appear as item 1, item2, ,item3  an 'empty' item is not counted
towards the count of how many items there are in the list.
Above the input textbox there is a note informing that we do NOT consider and
empty item, i.e., , , as an item towards to the count.
