# Medicine Mart Online Selling Platform | Backend

Medicine Mart is a dynamic multi-vendor online marketplace designed to streamline the purchase and sale of medicines and healthcare products. The platform concern individual sellers, and consumers, ensuring a seamless and efficient experience for all users.

## Functional Requirements

## ROLE

### User

- User can login and log out and set role every new user.
- User can manage and update their profile.
- User can be buy medicine and payments.
- User can see her/his payments history on user dashboard and status PAID/PENDING.

### Admin

- Admin can log in and log out.
- Admin can manage and update their profile.
- Admin can see all user lists.
- Admin can only change user role [USER, SELLER, ADMIN].
- Admin can see all totals revenue like total paid and pending
- Admin can can see all seller adversitements banner and approved for client side use

### Seller

- Seller can log in and log out.
- Seller can manage and update their profile.
- Seller can only update certain fields.
- Seller can see all medicines lists his added on seller dashboard.
- Seller can see be manage his/her medicines on dashboard [get, post, update, delete].
- Seller can be add for products banner advertiments.

Tech Uses 🔥;

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) : As based programming language.
- [NodeJS](https://nodejs.org/en): That allows to run javascript code in server
- [Express](https://expressjs.com/): A nodeJS minimalist web framework building server-side application
- [Mongoose](https://mongoosejs.com/): That help us to model or collection field schema validation in server-side to store data in mongodb
- [JWT](https://jwt.io/introduction): That help us to secure private resource data.
- [Stripe](https://stripe.com/): Stripe powers online and in-person payment processing and financial solutions for businesses of all sizes.

Please follow the below instructions to run your machine.

1. install nodejs -

   ```sh
   https://nodejs.org/en/download/package-manager
   ```

2. install nodemoen -
   ```sh
   npm i -g nodemon
   ```
3. clone this repository
   ```sh
   https://github.com/programming-hero-web-course1/b9a12-server-side-ramim-ahmed
   ```
4. set env variable create [.env] file
   ```sh
   DATABASE_URL = your database_url
   PORT = 8000
   access_token_secret= your accesstoken
   STRIPE_SECRET_KEY = stripe secret key
   ```
5. install all packages

   ```sh
   npm install
   ```

6. run project
   ```sh
   npm run dev
   ```
