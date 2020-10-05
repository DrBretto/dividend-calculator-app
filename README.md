**Welcome to the Dividend Calculator App!**

Client: Live - https://dividend-calculator-app.vercel.app/

Github - https://github.com/DrBretto/dividend-calculator-app

Api: Live - https://dashboard.heroku.com/apps/agile-peak-39361

Github - https://github.com/DrBretto/dividend-calculator-api

This app is a tool to help you evaluate your potential dividend
allocation. Simply navigate to _investopedia.com_ to get the required
info on the stocks you want to preview.

You can then create a portfolio strategy by adding stocks and
playing around with the values and see the effects of the changes
in realtime

For testing purposes, please log in with the following credentials:
Username: Demo
password: Passw0rd!

How to use:

**After creating an account or logging in, begin by entering the name of your first strategy:**

![Add a Strategy](https://github.com/DrBretto/dividend-calculator-app/blob/master/images/AddStrat.JPG?raw=true)

**Then, add as many stocks as you want to compare:**

![Add a Stock](https://github.com/DrBretto/dividend-calculator-app/blob/master/images/AddStock.JPG?raw=true)

**Every time you open the "+stock" window, it will generate a random color, but if you want to manually set colors, you can click on this dot here:**

![Main View](https://github.com/DrBretto/dividend-calculator-app/blob/master/images/ChangeColor.JPG?raw=true)

**If you've added too many stocks, you can delete it by clicking/tapping on the red x, followed by the green confirmation button.**

![Main View](https://github.com/DrBretto/dividend-calculator-app/blob/master/images/DeleteStock.JPG?raw=true)

## _API Endpoints_

\* - Requires Authentication

- _`/api/auth`_

  - POST `/login` Verifies passed login credentials. Returns JWT object if successful login.

- _`/api/users`_

  - POST `/` Register new user after verifying passed user data. Returns new user id and user data if successful.
  - GET `/:user_id` Returns username of requested user_id. Returns string.

- _`/api/strategy`_

  - \*GET `/` Returns list of all strategies for user. Returns array of objects.
  - \*POST `/` Adds new strategy to db. Returns 201 and strategy object on success.
  - \*GET `/:id` Returns strategy with matching ID.
  - \*DELETE `/:id` Deletes strategy with matching ID and all related stocks. Returns empty object.

- _`/api/stock`_

  - \*GET `/` Returns list of all stocks for user. Returns array of objects.
  - \*POST `/` Adds new stock to db. Returns stock.
  - \*GET `/:id` Returns stock with matching ID.
  - \*DELETE `/:id` Deletes stock with matching ID. Returns empty object.

- _`/api`_
  - GET `/` Returns 'Hello, world!'

## _Technologies Used_

- Node.js
- bcryptjs
- cors
- dotenv
- express
- helmet
- jsonwebtoken
- knex
- morgan
- pg
- postgrator-cli
- xss
- PostgreSQL
