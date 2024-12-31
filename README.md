# React + Vite

**Overview**  
Digital Emporium is a modern e-commerce platform designed to provide a seamless shopping experience. Built using React, Firebase, and Stripe, it offers secure authentication, a dynamic product catalog, and efficient payment processing.

**Features**  
- **User Authentication**: Secure login and registration using Firebase Authentication.  
- **Dynamic Product Catalog**: Interactive product listing and filtering options for users.  
- **Secure Payment Gateway**: Seamless and secure transactions integrated with Stripe.  
- **Responsive Design**: Optimized for both desktop and mobile devices.

**Technologies Used**  
- React.js  
- Firebase (Authentication & Database)  
- Stripe (Payment Gateway)  
- HTML, CSS, JavaScript  

**Setup Instructions**  
1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/your-username/digital-emporium.git
   cd digital-emporium
   ```

2. **Install Dependencies**:  
   ```bash
   npm install
   ```

3. **Add Firebase Configuration**:  
   - Create a `.env` file in the root directory.  
   - Add your Firebase project credentials:
     ```plaintext
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

4. **Run the Application**:  
   ```bash
   npm start
   ```

5. **Set Up Stripe API Keys**:  
   Add your Stripe public and secret keys in the `.env` file:  
   ```plaintext
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
   REACT_APP_STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

**Folder Structure**  
- `src/components`: Contains React components like ProductList, Cart, and Checkout.  
- `src/pages`: Contains pages like Homepage, Product Details, and Login.  
- `src/utils`: Utility functions and helpers (e.g., Firebase configuration).  
- `src/assets`: Contains images and styling files.

---
