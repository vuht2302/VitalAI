import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Please provide a workout name'],
    },
    description: String,
    category: {
      type: String,
      enum: ['cardio', 'strength', 'flexibility', 'sports', 'other'],
      default: 'other',
    },
    exercises: [
      {
        name: String,
        sets: Number,
        reps: Number,
        weight: Number,
        duration: Number, // in minutes
        notes: String,
      },
    ],
    duration: {
      type: Number, // in minutes
      required: true,
    },
    calories: Number,
    intensity: {
      type: String,
      enum: ['low', 'moderate', 'high', 'very-high'],
      default: 'moderate',
    },
    notes: String,
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Workout || mongoose.model('Workout', workoutSchema);
