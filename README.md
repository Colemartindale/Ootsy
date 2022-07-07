[Ootsy](https://ootsy.herokuapp.com/#/) is a single-page fullstack replica of Etsy, that features product listings of all kinds from various shops. Ootsy allows users to create and save account information as well as browse products and categories to find what suits them. Also, Ootsy lets users who have an account leave reviews on products with delete and edit review functionality. 

With PostgresSQL as a database and Rails as a backend, Ootsy is able to store user credentials, reviews, listing information, and AWS (S3) photo URLs successfully. ReactJS and ReduxJS were implemented as frontend in order to create a seemless single-page application. For UI and visuals, SCSS was used to facilitate a smooth user experience.

The header includes a navigation bar with search functionality that looks up items by keywords and eight different links that take the user to unique category pages. A sign in/sign up modal is in the nav bar as well that enables users to leave reviews. 

[Ootsy Live Url](https://ootsy.herokuapp.com/#/)

---

## Features

1. Sign in/ Register Modal

Next to the search bar in the header there is a link to the sign in/register modal. A user's sign in status will affect what feature they have access to. If the user is not signed in and tries to use a feature that requires log in, the sign in/ register modal will appear and prompt them to sign in/ register. Users have the option to use a demo account to navigate the site. 

![](https://github.com/Colemartindale/Ootsy/blob/main/app/assets/images/signin-modal.png)

2. Reviews

On a listing's show page, the user will have the option to leave a review along with a star rating. After posting a review, the user can edit or delete said review by clicking the corresponding buttons. Only reviews made by the current user can be edited and deleted.

![](https://github.com/Colemartindale/Ootsy/blob/main/app/assets/images/reviews.png)

3. Search

Based a key words typed into the search input, Ootsy will render a index page of related items.

![](https://github.com/Colemartindale/Ootsy/blob/main/app/assets/images/search.gif)

4. Splash Page

Ootsy's splash page implements SCSS grid layouts to add style and shape to photos from different categories. 

![](https://github.com/Colemartindale/Ootsy/blob/main/app/assets/images/splash.png)

5. Cart

Users can add specified quantities of listings to cart and checkout for demonstration purposes.

![](https://github.com/Colemartindale/Ootsy/blob/main/app/assets/images/cart.png)

---

## Technologies

* AWS
* React.js
* Redux.js
* Javascript
* CSS / SCSS
* HTML
* Ruby on Rails
* PostgresSQL



