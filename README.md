# MERN User System with Task Management

A full-stack web application built with the MERN stack featuring user authentication, role-based access control, and comprehensive task management with assignment capabilities.

## 🚀 Features

### Authentication & Authorization
- User registration and login with JWT tokens
- Role-based access control (Admin/User)
- Secure password hashing with bcrypt
- Token refresh mechanism
- Protected routes and middleware

### User Management
- Admin dashboard for user oversight
- User profile management (view, edit, delete)
- Admin can create, update, and delete users
- User role assignment (Admin/User)

### Task Management
- Personal task creation and management
- Task status tracking (Pending, Started, Completed)
- Due date management
- Task assignment system (Admin to User)
- Accept/Reject functionality for assigned tasks
- Real-time task status updates

### UI/UX Features
- Fully responsive design (Mobile, Tablet, Desktop)
- Modern UI with Tailwind CSS
- Custom confirmation modals
- Toast notifications for user feedback
- Intuitive navigation with role-based menus
- Back button navigation on all pages

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **React Toastify** - Toast notifications
- **Vite** - Build tool and dev server

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Cookie Parser** - Cookie handling
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Mern_User_System/
├── backend/
│   ├── controllers/
│   │   ├── authController.js      # Authentication logic
│   │   ├── userController.js      # User management
│   │   └── taskController.js      # Task management
│   ├── middleware/
│   │   └── authMiddleware.js      # JWT verification & role checking
│   ├── models/
│   │   ├── user.js               # User schema
│   │   └── task.js               # Task schema
│   ├── routes/
│   │   ├── auth.js               # Auth routes
│   │   ├── user.js               # User routes
│   │   └── task.js               # Task routes
│   ├── utils/
│   │   └── clearAuth.js          # Token utilities
│   ├── server.js                 # Express server setup
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Navigation component
│   │   │   ├── PrivateRoute.jsx  # Route protection
│   │   │   ├── BackButton.jsx    # Navigation helper
│   │   │   └── ConfirmModal.jsx  # Confirmation dialogs
│   │   ├── context/
│   │   │   └── AuthContext.jsx   # Authentication context
│   │   ├── pages/
│   │   │   ├── Login.jsx         # Login page
│   │   │   ├── Register.jsx      # Registration page
│   │   │   ├── AdminDashboard.jsx # Admin dashboard
│   │   │   ├── UserDashboard.jsx # User dashboard
│   │   │   ├── CreateTask.jsx    # Task assignment
│   │   │   ├── Tasks.jsx         # Task management
│   │   │   ├── UserProfile.jsx   # User profiles view
│   │   │   └── AddUser.jsx       # User creation
│   │   ├── store/
│   │   │   ├── store.js          # Redux store
│   │   │   └── slices/           # Redux slices
│   │   ├── utils/
│   │   │   └── axiosConfig.js    # Axios configuration
│   │   ├── App.jsx               # Main app component
│   │   └── main.jsx              # Entry point
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── README.md
└── .gitignore
```

## 🔌 API Endpoints

### Authentication APIs (4)
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/refresh` - Refresh access token

### User Management APIs (7)
- `GET /api/users` - Get all users (Admin only)
- `POST /api/users` - Create user (Admin only)
- `PUT /api/users/:id` - Update user by ID (Admin only)
- `DELETE /api/users/:id` - Delete user by ID (Admin only)
- `GET /api/users/me` - Get own profile
- `PUT /api/users/me` - Update own profile
- `DELETE /api/users/me` - Delete own account

### Task Management APIs (11)
#### User Task APIs
- `GET /api/tasks` - Get user's own tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update own task
- `PATCH /api/tasks/:id/status` - Update task status
- `DELETE /api/tasks/:id` - Delete own task

#### Admin Task APIs
- `GET /api/tasks/admin/all` - Get all users' tasks
- `PUT /api/tasks/admin/:id` - Update any task
- `DELETE /api/tasks/admin/:id` - Delete any task

#### Task Assignment APIs
- `POST /api/tasks/assign` - Admin assigns task to user
- `PATCH /api/tasks/:id/respond` - User accepts/rejects task
- `GET /api/tasks/assigned` - Get assigned tasks

**Total: 22 REST APIs**

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern_user_system
   ACCESS_TOKEN_SECRET=your_access_token_secret_here
   REFRESH_TOKEN_SECRET=your_refresh_token_secret_here
   NODE_ENV=development
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open browser and navigate to `http://localhost:5173`

## 🔐 Default Admin Account

Create an admin account by registering a user and manually updating the role in MongoDB:

```javascript
// In MongoDB, update user role to admin
db.users.updateOne(
  { email: "laxman@gmail.com" },
  { $set: { role: "admin" } }
)
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile** (320px - 767px)
- **Tablet** (768px - 1023px)
- **Laptop** (1024px - 1439px)
- **Desktop** (1440px+)

## 🎯 User Roles & Permissions

### Admin Capabilities
- View and manage all users
- Create, update, and delete users
- Assign tasks to users
- View all tasks across the system
- Monitor task assignment responses
- Edit and delete any task

### User Capabilities
- Manage personal profile
- Create and manage personal tasks
- View assigned tasks from admin
- Accept or reject assigned tasks
- Update task status and progress

## 🔄 Task Assignment Workflow

1. **Admin assigns task** → Task status: `assigned`
2. **User receives notification** → Task appears in user's task list
3. **User responds** → Accept (`accepted`) or Reject (`rejected`)
4. **Admin monitors** → View responses in admin dashboard
5. **Task progression** → User can update status to `started` or `completed`

## 🛡️ Security Features

- JWT-based authentication with access and refresh tokens
- Password hashing using bcrypt
- Role-based route protection
- CORS configuration for cross-origin requests
- Input validation and sanitization
- Secure cookie handling for refresh tokens

## 🎨 UI Components

- Custom confirmation modals (no browser alerts)
- Responsive navigation with mobile hamburger menu
- Toast notifications for user feedback
- Loading states and error handling
- Consistent design system with Tailwind CSS
- Accessible form controls and buttons

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/Render)
1. Set environment variables
2. Configure MongoDB connection
3. Deploy using platform-specific instructions

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure environment variables for API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Laxman**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- React team for the amazing library
- MongoDB team for the database
- Tailwind CSS for the utility-first CSS framework
- All open-source contributors who made this project possible

---

⭐ **Star this repository if you found it helpful!**