# React-Native-Custom-Multi-Selector
Sample example for customize Multi Selector

React Native Custom Multi Selector


  A lot of times when we are looking for a multi-selector list or dropdown, we are using this filters to speed up the process of getting to the desired results, but very few results available for multi-selector, So here I came up with a solution by creating my own Custom Multi Selector.
Multiple select

  A single press on an item will select or unselect the item, based on the select, it is a straightforward solution for presenting a list of selectable options. Make sure to signal selected values, they should look distinctive from non-selected items. If you have two to three items, using multiple selections might not be the best option.
Let's make one basic yet beautiful multi-selector in React Native or Expo using simple React Native components.
Note: This article assumes that you are familiar with React-Native and know basic jargon like components, state, and props. If not, getting started with React-Native is a good point to start.

Step 1: Create a view for your page.
I'll keep it simple for this example. ( Black Theme🖤).
Edit Your App.js, remove all previous code, and create your own view.
We are going to divided page into three sections:
a. Header Part: Menu button, Title, and Add Icon. 
b. Main Body: View for showing a list of cards.
c. Footer Part: Small organized static footer.
<script src="https://gist.github.com/Vanns35/46b45fc33a04408292c2ca457a579fee.js"></script>

Step 2: Create a picker modal.
We will create a modal that will show all the data items, from which we can allow the user to select multiple options.
In the modal view, we are going to divide it again into three sections:
a. Title of the modal: Choose your pokemon` 🐣
b. Listing of data items:
c. Button for saving items:
<script src="https://gist.github.com/Vanns35/638f4e24c6b34ada7fe279476a84bc58.js"></script>

Step 3: Selected item ArrayList
This is the main section of this article, we will create a function to save the selected item in ArrayList. We will further use this list to perform different operations, to handle the selected items, to save these items, and display items to users.
<script src="https://gist.github.com/Vanns35/191671e666eeaf4e8389d7cc2bc171ce.js"></script>

Step 4: Displaying saved ArrayList to users.
Now, we are going to create a view that will display all the list selected by users in cards.
<script src="https://gist.github.com/Vanns35/54e0cb0bc0dea0c99ef2fa64ed5b1bf7.js"></script>
