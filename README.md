🚖 Trippo -App (Flutter + Firebase)

   

> Trippo is a sleek and modern app built using Flutter and Firebase with real-time ride tracking, payment processing, and dynamic admin controls.




---

👀 App Demo

Rider App	Driver App	Admin Dashboard

		


> ✨ Smooth animations, real-time maps, and interactive dashboards power a premium experience.




---

🔑 Features

👤 Rider

🔐 Login via Email, Phone, or Socials

📍 Live Ride Tracking

💳 Pay using Stripe

🧾 Ride History

🌟 Rate Drivers

🔔 Real-Time Push Notifications


🚗 Driver

🔐 Secure Sign-In

📲 Accept/Reject Ride Requests

🗺 Turn-by-Turn Navigation

💵 View Earnings & Trips

🔔 Job Notifications


🛠 Admin

📊 Monitor Rides in Real-Time

👤 Manage Users & Drivers

📈 View Usage Analytics

🚨 Handle Issues & Reports



---

🧪 Tech Stack

Layer	Tech

Frontend	Flutter, Google Maps SDK
Backend	Firebase Auth, Firestore, FCM
Storage	Firebase Cloud Storage
Server Logic	Firebase Cloud Functions
Payments	Stripe Integration



---

⚙️ Getting Started

✅ Prerequisites

Flutter SDK

Firebase account

Android Studio / Xcode


🚀 Install & Run

git clone https://github.com/your-username/trippo-flutter.git
cd trippo-flutter
flutter pub get
flutter run

🔧 Firebase Setup

1. Create a Firebase Project


2. Enable:

Firestore

Authentication

Cloud Messaging

Cloud Functions



3. Add configuration files:

google-services.json → android/app/

GoogleService-Info.plist → ios/Runner/




💳 Stripe Setup

GOOGLE_MAPS_API_KEY=your-google-maps-api-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key


---

🧭 App Workflows

Rider Flow

graph LR
A[Login] --> B[Book Ride] --> C[Live Tracking] --> D[Pay with Stripe] --> E[Rate Driver]

Driver Flow

graph LR
A[Login] --> B[Receive Request] --> C[Navigate] --> D[Drop-off] --> E[Earnings Overview]


---

👨‍💻 Contributing

We love contributions!

1. Fork this repo 🍴


2. Create your branch: git checkout -b feature-name


3. Commit your changes: git commit -m "feat: added something cool"


4. Push: git push origin feature-name


5. Open a PR 🚀




---

📄 License

This project is under the MIT License.


---

❤️ Made with Love by Rabeel

> Trippo – A beautiful, powerful, and open-source ride-hailing app built for real-world scalability.
