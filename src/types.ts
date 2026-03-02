export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  height: number;
  weight: number;
  goal: string;
}

export interface DailyStats {
  steps: number;
  calories: number;
  activeMinutes: number;
  sleepScore: number;
  waterIntake: number;
}

export interface Workout {
  id: string;
  title: string;
  type: string;
  duration: number;
  calories: number;
  date: string;
  completed: boolean;
}

export interface Meal {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  time: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
}

export interface WeightEntry {
  date: string;
  weight: number;
}
