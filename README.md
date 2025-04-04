# 🌱 Grow Revolution (React Native Frontend)

Grow Revolution is a mobile app designed to empower individuals and communities to grow their own food and connect with others who share the same passion. Built using React Native and powered by Supabase and NestJS, the app supports user learning, helps them share local growing tips, post ads, network with their community and build resilient, food-conscious communities.

---

## 🚀 Features

- 📆 Monthly growing calendar with guidance on what to grow and how
- 📍 Geo-tagged community messaging and location-based updates
- 📝 Blog and note-sharing tools for gardeners
- 🔐 Supabase authentication and secure file storage
- 🌐 Integrated with a modular NestJS backend (see link below)

---

## 🛠️ Tech Stack

| Layer              | Tech                                   |
|--------------------|----------------------------------------|
| Frontend           | React Native (with Expo)               |
| Backend            | NestJS                                 |
| Database           | Supabase (PostgreSQL + Auth + Storage) |
| State Mgmt         | React Context                          |
| Forms & Validation | Formik & Yup                           |
| Styling            | StyleSheet.create                      |
| Hosting            | (TBD – Dev only for now)               |

---

## 📂 Repo Structure

```bash
grow-revolution-native/
|
├── assets/          # Images, fonts, etc.
├── components/      # Reusable UI components
├── contexts/        # Global context providers
├── navigation/      # Stack / Tab navigation
├── screens/         # App screens
├── services/        # API logic
├── styles/          # Modular styles, theme and colours
├── app.json         # Expo config
├── package.json
└── README.md
