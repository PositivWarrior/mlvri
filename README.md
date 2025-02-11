# ML Vri – Flytte og Oppussingstjenester

Welcome to the **ML Vri** project, a modern website for a family-owned business offering professional moving and renovation services in Norway. This site is designed to showcase the company's offerings, provide contact information, and allow visitors to leave reviews or send inquiries.

---

## 🚀 Live Demo

[ML Vri Website](https://your-live-site-link.com)

---

## 📋 Features

-   **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
-   **Interactive Animations**: Engaging animations for a dynamic user experience.
-   **Contact Form**: Users can send inquiries directly via the contact form.
-   **Customer Reviews**: Visitors can leave reviews with star ratings.
-   **Google Maps Integration**: Displays the company's physical location.
-   **SEO Optimization**: Structured data and meta tags for better search visibility.
-   **Multilingual Ready**: Content primarily in Norwegian, optimized for the local audience.

---

## 🛠️ Tech Stack

-   **Frontend**: React.js
-   **Styling**: Tailwind CSS
-   **Icons**: Heroicons
-   **Animations**: Framer Motion
-   **Email Integration**: EmailJS
-   **Hosting Options**: Compatible with platforms like Vercel, Netlify, and Render.

---

## ⚙️ Installation and Setup

1. Clone the repository:

    git clone https://github.com/positivwarrior/mlvri.git
    cd mlvri

2. Install dependencies:

    npm install

3. Set up EmailJS:

    Register at EmailJS.
    Create a new service and email template.
    Add your SERVICE_ID, TEMPLATE_ID, and USER_ID to the Contact component in src/components/Contact.js.

4. Run the development server:

    npm start

5. Open the app in your browser at:

    http://localhost:3000

## 🧰 Deployment

    Static Hosting (Vercel/Netlify)

1. Build the project:

    npm run build
    Upload the build folder to your hosting platform.

2. Dynamic Hosting (Render/DigitalOcean)

    Push your project to a Git repository (e.g., GitHub).
    Connect the repository to your hosting platform.
    Follow the platform's deployment instructions.

## 📚 Project Structure

        ├── public/
        │   ├── index.html        # HTML template
        │   ├── images/           # Static images
        │   └── ...
        ├── src/
        │   ├── components/       # Reusable React components
        │   │   ├── Navbar.jsx
        │   │   ├── Hero.jsx
        │   │   ├── About.jsx
        │   │   ├── Contact.jsx
        │   │   └── ...
        │   ├── pages/            # Pages for different routes
        │   ├── App.js x           # Main App component
        │   ├── index.js          # Entry point
        │   └── ...
        ├── package.json          # Project dependencies and scripts
        └── README.md             # Documentation

## 🌟 Key Components

-   Hero Section
    Displays a welcome message and company logo.
    Includes a call-to-action button.

-   About Section
    Overview of the company, values, and mission.

-   Services Section
    Highlights the services offered, with descriptive tiles.

-   Reviews Section
    Allows users to leave reviews and star ratings.

-   Contact Section
    Includes a contact form, company details, and an embedded Google Map.

## 📈 SEO Enhancements

    Meta Tags: Implemented title, description, and keywords for every page.
    Structured Data: Added JSON-LD for better search visibility.
    Canonical Links: Ensures the correct version of each URL is indexed.

## 🧪 Testing

    Functional Testing
    Verify form submissions with EmailJS.
    Test responsiveness on different devices.

    Lighthouse Score
        Run:
        npx lighthouse http://localhost:3000

## 🤝 Contributing

    Fork the project.

    Create a feature branch:
        git checkout -b feature-name

    Commit your changes:
        git commit -m "Add a new feature"

    Push to the branch:
        git push origin feature-name

    Open a Pull Request.

## 📧 Contact

    Company Name: ML Vri
    Email: lukmegnorge@gmail.com
    Phone: 998 54 333
    Address: Nordbybråten 16, 1592 Våler, Norway

## 📜 License

    This project is licensed under the MIT License.
