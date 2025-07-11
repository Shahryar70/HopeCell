🧬 HopeCell - Lifeline in Every Healing Cell

HopeCell is a comprehensive platform designed to support individuals battling blood cancers by streamlining stem cell and bone marrow donation, financial support, and patient care coordination. It empowers patients, donors, and volunteers through an intuitive and responsive web interface.
🔒 Note: This project currently runs locally and is not yet deployed publicly.

📸 Preview
<img src="./build/Assets/Images/Readme/modified_image.png" alt="Preview" width="100%" />




💡 Project Objective
The goal of HopeCell is to build a localized donor registry and support network for patients suffering from blood disorders such as leukemia, lymphoma, and other cancers.

Key objectives:

✅ Register Blood, Stem Cell, and Bone Marrow Donors

✅ Enable people to Donate Funds for medical needs

✅ Allow users to Join as Volunteers, Partners, or Refer Friends

✅ Help Patients Get Support (transportation, medication, funds, housing)

✅ Provide an Admin Dashboard to view dynamic data, urgent needs, and registry status

🚀 Features
💉 Donor Registry
Register as a Blood Donor

Register as a Stem Cell / Bone Marrow Donor

💰 Donate
Donate funds securely through a simple form

Track how much has been donated via Admin Panel

🙌 Get Involved
Join as a Volunteer

Become a Partner Organization

Refer a Friend to increase donor base

🤝 Request Support
Multi-step form for patients to request:

Financial Aid

Transportation

Medication Assistance

Housing Near Hospitals

Built-in Eligibility Checker

All submissions securely saved via the backend

📊 Admin Dashboard (ASP.NET + SQL)
View and manage:

Total registered donors (Blood, Stem Cell, Bone Marrow)

Number of volunteers and partners

Total donations received

List of active support requests

Urgent needs and real-time data

🛠️ Tech Stack

| Category         | Technologies                      |
| ---------------- | --------------------------------- |
| **Frontend**     | React.js, Tailwind CSS, Swiper.js |
| **Backend**      | ASP.NET Core Web API              |
| **Database**     | SQL Server                        |
| **API Handling** | Axios                             |
| **State/Logic**  | React Hooks                       |



🧪 How to Run Locally
📦 Frontend Setup (React.js)
# Clone the repository
git clone https://github.com/Shahryar70/HopeCell.git

# Navigate into the frontend project directory
cd HopeCell

# Install dependencies
npm install

# Start the frontend development server
npm start

# Clone the repository
git clone https://github.com/your-username/hopecell.git

# Navigate into the frontend project directory
cd hopecell

# Install dependencies
npm install

# Start the frontend development server
npm start

⚙️ Backend Setup (ASP.NET Core API)
Open the backend project in Visual Studio or VS Code

🔐 Data Handling & Security
All user-submitted data (forms, support requests, donations) is validated on both client and server

API endpoints are protected from unauthorized access

Sensitive data is securely stored in the database

🧭 Future Improvements
📱 Mobile app version with React Native

📤 Email notifications for donors and patients

📍 Geo-based donor matching

🧾 Admin approval system for support requests

❤️ A Project That Saves Lives
HopeCell is more than software — it’s a lifeline. Every donor registered, every referral made, every rupee donated — brings someone closer to healing.



Ensure connection string to SQL Server is correctly configured

Run database migrations (if applicable)

Start the API project (usually runs on https://localhost:7260 or similar)

🔗 Ensure your React frontend's proxy is configured to your backend API base URL (like https://localhost:7260) inside package.json.
