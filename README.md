# LukMeg – Flytte og Oppussingstjenester

Welcome to the **LukMeg** project, a modern website for a family-owned business offering professional moving and renovation services in Norway. This site is designed to showcase the company's offerings, provide contact information, and allow visitors to leave reviews or send inquiries.

---

## 🚀 Live Demo

[LukMeg Website](https://www.lukmeg.no/)

---

## 📋 Features

-   **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
-   **Interactive Animations**: Engaging animations for a dynamic user experience.
-   **Contact Form**: Users can send inquiries directly via the contact form with EmailJS integration.
-   **Customer Reviews**: Real-time reviews system with Firebase Firestore backend and star ratings.
-   **Google Maps Integration**: Displays the company's physical location.
-   **SEO Optimization**: Structured data and meta tags for better search visibility.
-   **Multilingual Ready**: Content primarily in Norwegian, optimized for the local audience.
-   **Real-time Data**: Firebase Firestore integration for dynamic content management.

---

## 🛠️ Tech Stack

-   **Frontend**: React.js with React Router for routing
-   **Backend**: Firebase Firestore (NoSQL database)
-   **Styling**: Tailwind CSS
-   **Icons**: Heroicons
-   **Animations**: Framer Motion
-   **Email Integration**: EmailJS
-   **Testing**: Jest and React Testing Library
-   **SEO**: React Helmet Async
-   **Hosting**: Vercel (live site) with Firebase backend

---

## ⚙️ Installation and Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/positivwarrior/mlvri.git
    cd mlvri
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up Firebase:**

    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
    - Enable Firestore Database
    - Copy your Firebase configuration
    - Update `src/firebaseConfig.js` with your configuration:
        ```javascript
        const firebaseConfig = {
        	apiKey: 'your-api-key',
        	authDomain: 'your-project.firebaseapp.com',
        	projectId: 'your-project-id',
        	storageBucket: 'your-project.firebasestorage.app',
        	messagingSenderId: 'your-sender-id',
        	appId: 'your-app-id',
        };
        ```

4. **Configure Firestore Security Rules:**

    ```javascript
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        // Comments collection
        match /comments/{commentId} {
          // Anyone can read comments
          allow read: if true;

          // Anyone can create comments, but they must be valid
          allow create: if isValidComment();

          // No deletes or updates allowed
          allow delete, update: if false;
        }

        function isValidComment() {
          let commentData = request.resource.data;
          return commentData.keys().hasAll(['author', 'text', 'rating', 'createdAt'])
            && commentData.author is string
            && commentData.author.size() > 0
            && commentData.author.size() <= 100
            && commentData.text is string
            && commentData.text.size() > 0
            && commentData.text.size() <= 500
            && commentData.rating is number
            && commentData.rating >= 0
            && commentData.rating <= 5
            && commentData.createdAt is timestamp
            && request.time >= commentData.createdAt;
        }
      }
    }
    ```

5. **Set up EmailJS:**

    - Register at [EmailJS](https://www.emailjs.com/)
    - Create a new service and email template
    - Update the EmailJS configuration in `src/components/Contact.jsx`

6. **Run the development server:**

    ```bash
    npm start
    ```

7. **Open the app in your browser at:**
    ```
    http://localhost:3000
    ```

---

## 🧰 Deployment

### Static Hosting (Vercel/Netlify)

1. **Build the project:**

    ```bash
    npm run build
    ```

2. **Deploy to Vercel (recommended):**

    ```bash
    npx vercel
    ```

3. **Environment Variables:**
    - Set up your Firebase configuration as environment variables in your hosting platform
    - Ensure Firestore security rules are properly configured for production

---

## 📚 Project Structure

```
├── public/
│   ├── index.html              # HTML template
│   ├── images/                 # Static images
│   └── ...
├── src/
│   ├── components/             # Reusable React components
│   │   ├── Navbar.jsx         # Navigation component
│   │   ├── Hero.jsx           # Hero section
│   │   ├── About.jsx          # About page
│   │   ├── Services.jsx       # Services page
│   │   ├── Reviews.jsx        # Reviews component with Firebase
│   │   ├── Contact.jsx        # Contact form with EmailJS
│   │   ├── Home.jsx           # Home page
│   │   ├── Footer.jsx         # Footer component
│   │   └── ...
│   ├── __tests__/             # Test files
│   │   ├── App.test.js        # App component tests
│   │   ├── Comments.test.js   # Reviews component tests
│   │   ├── Services.test.js   # Services component tests
│   │   ├── About.test.js      # About component tests
│   │   └── Contact.test.js    # Contact component tests
│   ├── firebaseConfig.js      # Firebase configuration
│   ├── setupTests.js          # Jest setup
│   ├── App.jsx               # Main App component with routing
│   ├── index.js              # Entry point
│   └── ...
├── package.json              # Project dependencies and scripts
└── README.md                 # Documentation
```

---

## 🌟 Key Components

### Hero Section

-   Displays a welcome message and company branding
-   Includes call-to-action buttons
-   Responsive design with animations

### About Section

-   Company overview, values, and mission
-   Professional service tiles with icons
-   Animated content loading

### Services Section

-   Detailed service offerings with images
-   Interactive cards with hover effects
-   Responsive grid layout

### Reviews Section (Firebase-powered)

-   Real-time comment system using Firestore
-   Star rating functionality (1-5 stars)
-   Form validation and error handling
-   Automatic timestamp generation

### Contact Section

-   Contact form with EmailJS integration
-   Company contact information
-   Google Maps integration (if configured)
-   Form validation and success/error messaging

---

## 🔥 Firebase Integration

### Firestore Database Structure

```
comments/ (collection)
├── {documentId}/
│   ├── author: string (max 100 chars)
│   ├── text: string (max 500 chars)
│   ├── rating: number (0-5)
│   └── createdAt: timestamp
```

### Security Features

-   Read-only access for displaying comments
-   Validated write access for new comments
-   Input sanitization and length limits
-   No delete or update permissions for public users
-   Automatic timestamp validation

---

## 📈 SEO Enhancements

-   **Meta Tags**: Implemented title, description, and keywords for every page
-   **Structured Data**: Added JSON-LD for better search visibility
-   **Canonical Links**: Ensures the correct version of each URL is indexed
-   **React Helmet Async**: Dynamic head management for SPA
-   **Optimized Images**: Proper alt tags and loading strategies

---

## 🧪 Testing

### Test Organization

-   All tests are located in `src/__tests__/` directory
-   Uses Jest and React Testing Library
-   Comprehensive component testing coverage

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watchAll

# Run tests with coverage
npm test -- --coverage
```

### Test Coverage

-   **App.test.js**: Main application and routing tests
-   **Comments.test.js**: Reviews component with Firebase mocking
-   **Services.test.js**: Services page component tests
-   **About.test.js**: About page component tests
-   **Contact.test.js**: Contact form with EmailJS mocking

### Functional Testing

-   Form submissions with EmailJS
-   Firebase Firestore operations
-   React Router navigation
-   Responsive design testing

---

## 🚨 Known Issues & Solutions

### React Router Warnings

The application currently shows these warnings in development:

-   `v7_startTransition` future flag warning
-   `v7_relativeSplatPath` future flag warning

These are compatibility warnings for React Router v7 and don't affect functionality.

### Firebase Permissions

Ensure Firestore security rules match the collection name used in code (`comments` collection).

---

## 🔧 Environment Variables

For production deployment, set up these environment variables:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

---

## 🤝 Contributing

1. **Fork the project**
2. **Create a feature branch:**
    ```bash
    git checkout -b feature-name
    ```
3. **Commit your changes:**
    ```bash
    git commit -m "Add a new feature"
    ```
4. **Push to the branch:**
    ```bash
    git push origin feature-name
    ```
5. **Open a Pull Request**

---

## 📧 Contact

-   **Company Name**: LukMeg
-   **Email**: lukmegnorge@gmail.com
-   **Phone**: 998 54 333
-   **Address**: Nordbybråten 16, 1592 Våler, Norway
-   **Website**: [www.lukmeg.no](https://www.lukmeg.no/)

---

## 📜 License

This project is licensed under the MIT License.

---

## 📋 Recent Updates

### v2.0.0 (Latest)

-   ✅ **Firebase Integration**: Added Firestore for real-time reviews system
-   ✅ **Test Organization**: Moved all tests to `src/__tests__/` directory
-   ✅ **Security Rules**: Implemented comprehensive Firestore security rules
-   ✅ **Bug Fixes**: Resolved Firebase permission errors
-   ✅ **Code Quality**: Updated import paths and test configurations
-   ✅ **Documentation**: Comprehensive README updates

### Previous Versions

-   **v1.0.0**: Initial React application with static content
-   Added EmailJS integration for contact forms
-   Implemented responsive design with Tailwind CSS
-   Added React Router for navigation
