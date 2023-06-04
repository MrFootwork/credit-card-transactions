# Cards and Transactions Overview

The image in the folder gives a visual overview of how the page is intended to look like (as a minimum). 

The purpose of this task is to build a card and transactions overview page. The user should be able to select one of the cards, see it's transactions and be able to filter the transactions based on the amount.

Acceptance Criteria:

[x] User can select one of the cards
[x] The transactions of the selected card will be displayed
[x] The transactions have a same background color than the card
[x] There should be a filter field between the cards and the transactions
[x] The user can filter transactions by inputting amount to the filter fields. Transactions with the amount in the fields or greater should be left visible
[ ] If the user changes a selected card and there is content in the filter fields, the content should be reset

# Implementation Details

Build the overview page as an App using Vue. The `data` folder contains example data which your app would realistically acquire from a REST interface.

For the purpose of this task, consider the following:
- The result should be in the format of a Vue project 
- provide a package.json and lockfile allowing to build and run it *locally*
- You can use Vue 2 or Vue 3, VueCLI or vite or a manual build, the choice is yours
- For the data, you can simply import them statically, though you can consider the asynchronous nature of REST calls and build your app accordingly
- Consider the usage of state management, routing, typescript, linters, testing