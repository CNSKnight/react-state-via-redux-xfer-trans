# Backbase Front End Assignment: Make A Transaction

## Assignment Purpose

The purpose of this test is to show off your level of front-end development skills and to show your knowledge of modern front-end frameworks and practices.

## Brief Description

For this assignment you need to develop a single page application according to the provided PSD (in the design folder) with the functionality of transferring money and showing the past transactions in a historical transactions list. Historical transactions are provided in a JSON file.

## Functional Requirements

### Transfer Money

As a user I should be able to transfer money using the Transfer Money form as shown in the UI Design. I should be able to:
1. Fill in the TO and AMOUNT fields of the form. Assume that the FROM field is pre-filled with the data shown in the UI Design and is DISABLED.
2. Press "Submit" and preview the entered data.
3. Press "Transfer" on the preview screen. When transfer is pressed assume that the transfer should now appear at the top of the transactions list, and the balance in the FROM field should have decreased by the amount of the transfer.


### Transaction History
As a user I should be able to view recent transactions as shown in the UI Design. I should be able to:
1. Consume a list of recent transactions provided in the transactions.json file, and display them properly.
2. Update the transactions list when a new money transfer has taken place.

## Technology Restrictions
### Please Read Thoroughly
1. Design your application anyway you want, but focus on clean, reusable code. You code should be DRY, with a focus on frontend best practices.
2. We are open to seeing applications written in any modern framework.
3. Please create a README.md file that explains what you’ve done.
4. Dependency management tools and task runners are okay, but please make sure your project is very easy to run on any machine. An ideal exercise will run simply by opening the index.html file in a browser.
5. Please make sure your delivered package contains an unminified and human readable version of your source files.
6. Please refrain from leveraging scaffolding tools like yeoman or boilerplate templates.
7. Please don’t use plugins.

## Helpful Information
1. Images and icons have been provided via the assets folder. Transaction images are provided as base64 images in the transaction JSON.
2. The font for the UI Design can be found on Google fonts: https://fonts.google.com/specimen/Kanit
3. There should be no need for a backend in this project.
