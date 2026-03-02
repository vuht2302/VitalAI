import { UserProfile, DailyStats, Workout, Meal, WeightEntry } from './types';

export const mockUser: UserProfile = {
  name: "Alex Johnson",
  email: "alex.j@vital.ai",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  age: 28,
  gender: 'male',
  height: 182,
  weight: 78.5,
  goal: "Muscle Gain & Endurance"
};

export const mockDailyStats: DailyStats = {
  steps: 8432,
  calories: 2150,
  activeMinutes: 45,
  sleepScore: 82,
  waterIntake: 2.4
};

export const mockWorkouts: Workout[] = [
  { id: '1', title: 'Upper Body Power', type: 'Strength', duration: 60, calories: 450, date: '2024-05-20', completed: true },
  { id: '2', title: 'Morning Run', type: 'Cardio', duration: 30, calories: 320, date: '2024-05-21', completed: true },
  { id: '3', title: 'Leg Day', type: 'Strength', duration: 75, calories: 580, date: '2024-05-22', completed: false },
  { id: '4', title: 'Yoga Flow', type: 'Flexibility', duration: 45, calories: 180, date: '2024-05-23', completed: false },
];

export const mockMeals: Meal[] = [
  { id: '1', name: 'Oatmeal with Berries', calories: 350, protein: 12, carbs: 55, fat: 8, time: '08:00 AM', type: 'breakfast' },
  { id: '2', name: 'Grilled Chicken Salad', calories: 480, protein: 42, carbs: 15, fat: 22, time: '12:30 PM', type: 'lunch' },
  { id: '3', name: 'Protein Shake', calories: 180, protein: 25, carbs: 10, fat: 3, time: '04:00 PM', type: 'snack' },
  { id: '4', name: 'Salmon & Quinoa', calories: 620, protein: 38, carbs: 45, fat: 28, time: '07:30 PM', type: 'dinner' },
];

export const mockWeightHistory: WeightEntry[] = [
  { date: 'May 1', weight: 80.2 },
  { date: 'May 5', weight: 79.8 },
  { date: 'May 10', weight: 79.2 },
  { date: 'May 15', weight: 78.9 },
  { date: 'May 20', weight: 78.5 },
];
