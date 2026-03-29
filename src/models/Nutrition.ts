import mongoose from 'mongoose';

const nutritionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    meals: [
      {
        name: String,
        calories: Number,
        protein: Number,
        carbs: Number,
        fat: Number,
        fiber: Number,
        mealType: {
          type: String,
          enum: ['breakfast', 'lunch', 'dinner', 'snack'],
        },
        time: Date,
      },
    ],
    totalCalories: Number,
    totalProtein: Number,
    totalCarbs: Number,
    totalFat: Number,
    totalFiber: Number,
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    notes: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Nutrition || mongoose.model('Nutrition', nutritionSchema);
