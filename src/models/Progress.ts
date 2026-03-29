import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    bodyFat: Number,
    muscleMass: Number,
    measurements: {
      chest: Number,
      waist: Number,
      hips: Number,
      biceps: Number,
      thighs: Number,
    },
    photos: [
      {
        url: String,
        date: Date,
      },
    ],
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

export default mongoose.models.Progress || mongoose.model('Progress', progressSchema);
