# 🚀 VitalAI Backend API Documentation

## Cấu trúc Backend

```
src/
├── lib/
│   └── mongodb.ts          # MongoDB connection
├── models/
│   ├── User.ts
│   ├── Workout.ts
│   ├── Nutrition.ts
│   ├── Progress.ts
│   └── BlogPost.ts
└── middleware/
    ├── auth.ts             # JWT authentication
    └── errorHandler.ts     # Error handling

app/api/
├── auth/
│   ├── register/route.ts   # POST /api/auth/register
│   └── login/route.ts      # POST /api/auth/login
├── users/
│   └── profile/route.ts    # GET/PUT /api/users/profile
├── workouts/
│   ├── route.ts            # GET/POST /api/workouts
│   └── [id]/route.ts       # GET/PUT/DELETE /api/workouts/[id]
├── nutrition/
│   ├── route.ts            # GET/POST /api/nutrition
│   └── [id]/route.ts       # GET/PUT/DELETE /api/nutrition/[id]
├── progress/
│   ├── route.ts            # GET/POST /api/progress
│   └── [id]/route.ts       # GET/PUT/DELETE /api/progress/[id]
└── blog/
    ├── route.ts            # GET/POST /api/blog
    └── [id]/route.ts       # GET/PUT/DELETE /api/blog/[id]
```

## 🔑 Cấu hình Environment

Tạo file `.env.local` với:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vitalai
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 📌 API Endpoints

### Authentication (Xác thực)

#### 1. Register - POST `/api/auth/register`

```javascript
// Request
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}

// Response
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

#### 2. Login - POST `/api/auth/login`

```javascript
// Request
{
  "email": "user@example.com",
  "password": "password123"
}

// Response (như register)
```

### User Profile (Hồ sơ người dùng)

#### 3. Get Profile - GET `/api/users/profile`

**Headers:** `Authorization: Bearer <token>`

```javascript
// Response
{
  "success": true,
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "name": "John Doe",
    "age": 30,
    "height": 180,
    "weight": 75,
    "goal": "muscle-gain",
    "activityLevel": "moderately-active"
  }
}
```

#### 4. Update Profile - PUT `/api/users/profile`

**Headers:** `Authorization: Bearer <token>`

```javascript
// Request
{
  "name": "John Doe",
  "age": 30,
  "height": 180,
  "weight": 75,
  "goal": "muscle-gain",
  "activityLevel": "very-active"
}
```

### Workouts (Bài tập)

#### 5. Get All Workouts - GET `/api/workouts`

**Headers:** `Authorization: Bearer <token>`

```javascript
// Response
{
  "success": true,
  "count": 5,
  "workouts": [
    {
      "id": "...",
      "userId": "...",
      "name": "Morning Run",
      "category": "cardio",
      "duration": 30,
      "calories": 300,
      "intensity": "moderate",
      "date": "2024-03-29T10:00:00.000Z"
    }
  ]
}
```

#### 6. Create Workout - POST `/api/workouts`

**Headers:** `Authorization: Bearer <token>`

```javascript
// Request
{
  "name": "Morning Run",
  "description": "5km run at steady pace",
  "category": "cardio",
  "exercises": [
    {
      "name": "Running",
      "duration": 30,
      "notes": "At 10 km/h"
    }
  ],
  "duration": 30,
  "calories": 300,
  "intensity": "moderate",
  "notes": "Felt great!"
}
```

#### 7. Get Single Workout - GET `/api/workouts/[id]`

#### 8. Update Workout - PUT `/api/workouts/[id]`

#### 9. Delete Workout - DELETE `/api/workouts/[id]`

### Nutrition (Dinh dưỡng)

#### 10. Get All Nutrition Logs - GET `/api/nutrition`

```javascript
// Response
{
  "success": true,
  "count": 3,
  "nutritionLogs": [...]
}
```

#### 11. Create Nutrition Log - POST `/api/nutrition`

```javascript
// Request
{
  "meals": [
    {
      "name": "Oatmeal",
      "calories": 250,
      "protein": 10,
      "carbs": 40,
      "fat": 5,
      "fiber": 4,
      "mealType": "breakfast",
      "time": "2024-03-29T08:00:00.000Z"
    }
  ],
  "totalCalories": 2000,
  "totalProtein": 150,
  "totalCarbs": 250,
  "totalFat": 70,
  "totalFiber": 30,
  "notes": "High protein day"
}
```

### Progress (Tiến độ)

#### 12. Get Progress Logs - GET `/api/progress`

#### 13. Create Progress Log - POST `/api/progress`

```javascript
// Request
{
  "weight": 75,
  "bodyFat": 15,
  "muscleMass": 60,
  "measurements": {
    "chest": 100,
    "waist": 85,
    "hips": 95,
    "biceps": 35,
    "thighs": 55
  },
  "photos": [
    {
      "url": "https://...",
      "date": "2024-03-29T10:00:00.000Z"
    }
  ],
  "notes": "Making good progress!"
}
```

### Blog (Blog)

#### 14. Get All Blog Posts - GET `/api/blog`

**Query Parameters:** `?category=fitness&featured=true`

```javascript
// Response
{
  "success": true,
  "count": 10,
  "posts": [...]
}
```

#### 15. Create Blog Post - POST `/api/blog`

**Headers:** `Authorization: Bearer <token>`

```javascript
// Request
{
  "title": "Top 5 Workout Tips",
  "content": "Here are the top 5 workout tips...",
  "excerpt": "Learn the best workout tips",
  "category": "fitness",
  "tags": ["workout", "fitness", "tips"],
  "featured": true,
  "image": "https://..."
}
```

#### 16. Get Single Blog Post - GET `/api/blog/[id]`

(Hay dùng slug thay vì ID: `/api/blog/top-5-workout-tips`)

#### 17. Update Blog Post - PUT `/api/blog/[id]`

#### 18. Delete Blog Post - DELETE `/api/blog/[id]`

## 🔐 Headers Required

Hầu hết các endpoint (GET profile, POST workout, etc.) yêu cầu JWT token:

```
Authorization: Bearer <your_jwt_token>
```

Lấy token từ response của `/api/auth/login` hoặc `/api/auth/register`

## ❌ Error Responses

Tất cả lỗi trả về định dạng:

```javascript
{
  "success": false,
  "message": "Error message here"
}
```

## 🚀 Chạy Backend

```bash
# Dev server
npm run dev

# Production build
npm run build
npm start
```

Backend sẽ chạy tại `http://localhost:3000`

Tất cả các API endpoints sẽ ở `/api/*`

---

## 📋 Checklist Cấu hình

- [ ] MongoDB URI được cấu hình trong `.env.local`
- [ ] JWT_SECRET được đặt bằng một chuỗi bảo mật
- [ ] Chạy `npm install` để cài dependencies
- [ ] Chạy `npm run dev` để khởi động server
- [ ] Test các endpoints với Postman hoặc Insomnia

Chúc mừng! Backend của bạn đã sẵn sàng! 🎉
