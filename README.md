1. Project Title
     • GreenCart – A Grocery Delivery Platform 
 
2. Problem Statement
     • The project aims to develop a Grocery Delivery Web Application using the
       MERN stack to simplify online grocery shopping. It will connect customers with
       local stores for easy ordering and doorstep delivery. The system will include
       secure online payments via Stripe. This solution enhances convenience, saves time,
       and supports local vendors through digital access. 

4. System Architecture
     •  Frontend: React.js with React Router for page navigation
     •	Backend: Node.js + Express
     •	Database: MongoDB 
     •	Authentication: JWT-based login/signup
     •	Hosting:
        o	Frontend → Vercel
        o	Backend → Vercel
        o	Database → MongoDB Atlas

5. Key Features
     • Category	                                                           • Features
       Authentication & Authorization	-------------------------------------> User registration, login, logout, role-based access (admin/user)
       CRUD Operations ----------------------------------------------------> Create, read, update, delete core entities (e.g., posts, tasks, products)
       Frontend Routing ---------------------------------------------------> Pages: Home, Login, Dashboard, Details, Profile, etc.
       Feature X ----------------------------------------------------------> Searching for products, filtering products, sorting products, Pagination	
       Hosting ------------------------------------------------------------> Deployed both backend and frontend to accessible URLs via VERCEL
 
6. Tech Stack
     • Layer	                                                             • Technologies
       Frontend -----------------------------------------------------------> React.js, React Router, Axios, Tailwind CSS
       Backend ------------------------------------------------------------> Node.js, Express.js
       Database -----------------------------------------------------------> MongoDB 
       Authentication -----------------------------------------------------> JWT
       Hosting ------------------------------------------------------------> Vercel
 
7. API Overview
   • Endpoint	                         • Method	                             • Description Access

     User :-
     /api/user/register ---------------> POST -------------------------------> Register new user (Authenticated)
     /api/user/login ------------------> POST -------------------------------> Login user (Authenticated)
     /api/user/is-auth ----------------> GET --------------------------------> Authenticate user (Authenticated)
     /api/user/logout -----------------> GET --------------------------------> Logout the existing user (Authenticated)

     Seller :-
     /api/seller/login ----------------> POST -------------------------------> For seller login (Authenticated)
     /api/seller/is-auth --------------> GET --------------------------------> Authenticate seller (Authenticated)
     /api/seller/logout ---------------> GET --------------------------------> Logout the seller (Authenticated)

     Product :-
     /api/product/add -----------------> POST -------------------------------> To add the new product (Authenticated)
     /api/product/list ----------------> GET --------------------------------> To get all products
     /api/product/id ------------------> GET --------------------------------> To get product by ID 
     /api/product/stock ---------------> POST -------------------------------> To toggle the stock availability (Authenticated)

     Cart :-
     /api/cart/update -----------------> POST -------------------------------> To update the cart (Authenticated)

     Address :-
     /api/address/add -----------------> POST -------------------------------> To add new address (Authenticated)
     /api/address/get -----------------> GET --------------------------------> To get all addresses (Authenticated)

     Order :-
     /api/order/cod -------------------> POST -------------------------------> To do payment by COD (Authenticated)
     /api/order/user ------------------> GET --------------------------------> To get all orders of the user (Authenticated)
     /api/order/seller ----------------> GET --------------------------------> To get all orders for the seller placed by users (Authenticated)
     /api/order/stripe ----------------> POST -------------------------------> To do online payment through stripe payment gateway (Authenticated)


