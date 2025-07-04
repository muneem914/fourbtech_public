# Evaluation Task Submission – Junior Web Developer (FourBtech)

## Overview

This project is a multi-vendor eCommerce platform featuring role-based dashboards for Admin, Seller, and Customer. The goal was to implement functional UI and logic based completion on Figma prototype. The system includes authentication, protected routes, role-based redirection, order placement, seller management, and dynamic forms.

##  Tech Stack

### Frontend
- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS, SCSS
- **UI Components**:
  - ShadCN UI (selected components)
  - HeadlessUI (Dialog modals)
- **State Management**: Redux Toolkit & RTK Query
- **Deployment**: Vercel

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: MongoDB Atlas (cloud) / MongoDB (local for dev)
- **Deployment**: Vercel with serverless functions
- **Authentication**: JWT with HTTP-only cookies, hashed password using bcrypt.js
- **Middleware**: Custom error handling, async wrapper

---


## Complete folder structure
![Complete Folder Structure](https://raw.githubusercontent.com/muneem914/fourbtech_public/refs/heads/main/frontend/public/folder_structure.png)
**This is previous project structure. Added some for files.**

## Features Implemented

###  Whole Figma prototype into Next.js/Typescript application
- Added a three-layer sidebar for large (desktop), medium (tablet) and small (mobile) devices.
- Dynamic navbar based on user roles or routes.
- Fully responsive according to Figma prototype.

###  Authentication & Authorization
- Role-based login and registration for **Customer**, **Seller**, and **Admin**
- Conditional route access and redirection after login
- Session management with cookies (7-day expiry)
- Redux-persist handled login state across reloads

###  Role-Based Dashboards
- **Customer**: Storing data into database with hashed password, View profile, update info, change password, change notification preferences, create/update/delete/default address, placing orders (will be done later)
- **Seller**: Add/edit/delete products (will be done later; for now kept that static), manage shop info, view orders UI, managed sorting in orders, products.
- **Admin**: Full system access, manage users/products/orders, approve sellers, delete customer/seller

###  Public Interface
- Product listing (wishlist) page and navigation
- Floating navbar + mobile bottom navigation
- Individual shop view/products of any seller
- Add-to-cart functionality (static for now)
- Checkout logic with step validation (shipping > confirmation)
- Address form with default selection handling (later will do that.)

###  Seller Features
- Shop registration and dynamic product creation (will be done later)
- Upload multiple images with preview UI
- Add custom specifications using modal interface (done only in features section) - have a try
- Product update functionality with image re-upload
- Order management with status (e.g., Pending → Shipped) (need to handle logically with product/order API)
- For now, only seller interaction with db, rest of them are static

###  Admin Features
- For now, admin can see only his all customer and seller. But an admin is also able to:
	- Manage all users, sellers, orders, and transactions
	- Approve seller accounts 
	- Modify any user role or content
	- View system-wide data via tables

---

##  The whole process (at a glance)

### Structure
- Three separate layouts for each role
- Separate route guards (protected routes) and redirects per user role
- Modular components per feature (Profile tabs, dialogs, forms)
- Clear folder separation both in frontend and in backend for routes/controllers/models

### Assumptions
- Missing design gaps (e.g., full seller profile page) were filled with logical UX decisions
- Static cart due to no product catalog implementation in design
- Modals for adding features, Login/registration page prototype
- Backend schema design
- Default values assumed for registration (e.g., notification preferences)

### Challenges
- Handling CORS on Vercel during backend deployment
- Fixing mongodb cold start issues in serverless application
- Managing persistent auth with Redux + cookies
- Handling async dynamic fields (like product specs) efficiently
- Managing multiple form states (shipping, user update, etc.)

### Limitations & Next Steps
- Product catalog and live cart logic to be completed
- Improve form validation (auth, shipping, registration)
- Seller registration management from admin.
- Product review management.
- Address management (add, update, set default) to be finalized
- Optimize backend folder structure (e.g., move DB connection to `config`)
- Replace `<img>` with `next/image` for better SEO/performance


### Suggestions for Improvement
- Provide API documentation or JSON structure expectations with the design
- Clarify navigation flows in the Figma prototype
- Include required/optional field info for registration and checkout forms
- Improve consistency in role management (e.g., role names, approval steps)


## Future Prospects (Planned to do in next)
- Full product catalog with dynamic cart
- Implement wishlist, reviews, and order tracking
- Dashboard analytics and charts
- Full seller profile with earnings, shop analytics.
- Public view for the seller page, products, profile image, banner of the shop.
- Notification system, mailing from website and so on.

**Reason for this:** 
I was planning to practice a multi-vendor e-commerce application using next.js, and typescript. At that time I have been shortlisted for the recruitment process. Now, I will complete these whole application to showcase in my portfolio.

---

## My Submission

- **Live App Link**: https://fourbtech-frontend.vercel.app/
- **GitHub Repo**: https://github.com/muneem914/fourbtech_public

###  Separate Live Links
- Frontend Live: https://fourbtech-frontend.vercel.app/
- Backend Live: https://fourbtech-backend.vercel.app/

### Credentials:

***You can create user/seller account. No worries or you can use below accounts for testing purpose.***

**Role: customer:**\
email: muneem914@gmail.com, customer@gmail.com
password: 123456

**Role: Seller**\
email: seller@gmail.com, seller.final@gmail.com
password: 123456

**Role: Admin**\
email: admin@gmail.com
password: 123456

(Both frontend and backend code are available in the github link. Also added backend URL in the frontend code.)

**Thank you for this opportunity. Looking forward to your feedback!**

— **Muneem Hussain**\
	Date: 27th June, 2025
