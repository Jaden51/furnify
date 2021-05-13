<h1 align='center'>Furnify</h1>

Online store where people sell us used furniture, we refurbish it and re-sell it.

## Description

This online web application is for a furniture refurbishing store who needs a website to display all their furniture for sale while also making it easy for customers to sell any old furniture to the store. 

Customers can make an account and upload furniture to the website. From there, the stores admins can look at the old furniture and decide whether they wish to purchase the furniture from the customer. They refurbish the furniture and upload it to the store. 

## Demo

[Link to website](https://shielded-eyrie-84672.herokuapp.com/)

Home page of the website

![home page](client\src\assets\furnify2.png)

Upload furniture to the website

![upload page](client\src\assets\upload.png)

## Technologies

- **React** and **Redux** for client side front end
- **Node.js** for the web server
- **MongoDB** for the database
- **Express.js** for the web ramework

## Technical Description

### Install server dependencies

```
npm install
```
### Install client dependencies

```
cd client
npm install
```

### Staring the app

To run both express and react from the root folder

```
npm run dev
```

## Deploying and Updating Production

Create a new, local branch called production
```
git checkout -b production
```
Add the production config file
```
git add -f config/production.json
```
Commit the changes but do not push to GitHub. Push the produciton branch to the Heroku
```
git push heroku production:main
```
Where 'main' is the your development branch.

If you want to make changes, you can make changes on your main branch and merge those changes into the production branch.
```
git checkout production
git merge main
```
Once merged, push to heroku using the command above and the site will be rebuilt and updated.