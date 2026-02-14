# 🌱 TerraPed – Soil Testing & FDD Reporting System

TerraPed is a modern Angular 19 web application built to manage soil testing operations and field diagnostic reporting in a clean, structured way.

The goal of this project was simple — build something that feels like a real product, not just a CRUD demo. It focuses on clarity, usability, and data-driven insights while keeping the architecture scalable.

---

## ✨ What This Project Does

TerraPed helps manage:

- Agricultural testing sites
- Different soil test categories
- Individual soil test records
- Analytical dashboard insights

It simulates how an agri-tech lab or field diagnostics team would track soil health data across multiple locations.

---

## 📊 Dashboard Overview

The dashboard provides a quick analytical summary of the entire system.

It includes:

- KPI cards (Users, Sites, Test Types, Tests)
- Test Type distribution (Doughnut chart)
- Monthly testing trend (Line chart)
- Tests per site comparison (Horizontal bar chart)
- Loading state for better UX realism

### Dashboard Preview

<img width="1454" height="801" alt="Screenshot 2026-02-14 at 6 28 39 PM" src="https://github.com/user-attachments/assets/104bd844-9941-4929-a4ee-d9b1e574beb5" />


---

## 👥 Users Module

The Users module allows:

- Adding new users
- Editing user details
- Assigning roles
- Sorting and pagination

It uses Angular Material dialogs and reactive forms to maintain clean separation of concerns.

<img width="1449" height="799" alt="Screenshot 2026-02-14 at 6 28 53 PM" src="https://github.com/user-attachments/assets/f449f91c-3f06-4b94-b27a-7ac62da03532" />


---

## 🌾 Sites Module

This section manages agricultural locations or farms where soil testing takes place.

Each site can later be associated with multiple tests.

<img width="1445" height="801" alt="Screenshot 2026-02-14 at 6 29 08 PM" src="https://github.com/user-attachments/assets/f3bb2c73-5bc4-43ef-bb03-e19910e26b39" />


---

## 🧪 Tests Module

The core part of the system.

Each test record includes:

- Site
- Test type
- Result value
- Unit
- Date
- Status

Sorting and pagination are implemented for better data handling.

<img width="1454" height="799" alt="Screenshot 2026-02-14 at 6 29 24 PM" src="https://github.com/user-attachments/assets/b69723b4-4ce5-4029-a038-1b5a5594b611" />


---

## ➕ Add Test Dialog

Test creation is handled using a Material dialog with proper validation.

The form uses reactive forms and domain-driven structure.

<img width="1191" height="759" alt="Screenshot 2026-02-14 at 6 43 49 PM" src="https://github.com/user-attachments/assets/919cdb1e-00d8-4f51-8da8-7d42f1c7f8fb" />

---

---

## 🏗️ Architecture & Design Approach

This project follows a feature-based structure using Angular 19 standalone components.

Each major domain (Users, Sites, Test Types, Tests, Dashboard) lives inside its own feature folder. Services are separated into a core layer to keep business logic independent from UI components.

The application is built with scalability in mind. Although it currently uses structured mock data, the service layer is designed in a way that allows seamless integration with a real backend API.

Key architectural decisions:

- Standalone components (no NgModules)
- Feature-driven folder structure
- Service-based data abstraction
- Observable-driven data flow
- Reusable dialog components
- Separation of UI and logic

---

## 📊 Data & Visualization Strategy

Instead of static demo data, the application uses a structured, realistic mock dataset that simulates:

- Multiple testing sites
- Multiple soil test categories
- Monthly variation in testing activity
- Uneven distribution across locations

Charts are built using Chart.js via ng2-charts and dynamically generate:

- Test type distribution
- Monthly trend analysis
- Site-level test comparison

The dashboard is intentionally designed to feel analytical rather than decorative.

---

## 🎨 UI & UX Decisions

The interface uses Angular Material with a custom soil-inspired color theme.

Design priorities were:

- Clean spacing
- Strong visual hierarchy
- Earth-tone palette
- Minimal clutter
- Clear analytics focus
- Responsive layout

A loading spinner is included to simulate real API latency and improve perceived performance.

---

## 🛠️ Tech Stack

- Angular 19 (Standalone architecture)
- TypeScript
- Angular Material
- Angular CDK
- RxJS
- Chart.js
- ng2-charts
- SCSS

---
---

## 📈 Possible Improvements

While the current version focuses on frontend architecture and structured data handling, the project is designed in a way that makes future expansion straightforward.

Some natural next steps could include:

- Integrating a real backend (REST or GraphQL)
- Implementing JWT-based authentication
- Adding role-based access control with UI restrictions
- Advanced filtering and global search capabilities
- Exporting reports in PDF or Excel format
- Real-time data updates using WebSockets
- Audit logs for tracking user activity
- Dark / Light theme toggle for better accessibility

The current architecture already separates services and UI logic, making these enhancements easy to layer on without major refactoring.

---

## 🎯 Project Intent

TerraPed was built with a clear intention — not just to demonstrate CRUD operations, but to simulate how a structured soil testing management system would behave in a real-world environment.

The focus throughout the development was on:

- Clean and maintainable Angular practices
- Feature-based organization
- Logical data modeling
- Clear UI hierarchy
- Meaningful analytics instead of decorative charts
- Production-style project structure

The aim was to build something that feels practical, extendable, and product-oriented rather than experimental.

---

