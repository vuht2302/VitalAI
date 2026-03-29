export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to VitalAI
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your personal health & fitness companion
        </p>
        <div className="space-y-4">
          <p className="text-gray-700">✅ Backend API is ready</p>
          <p className="text-gray-700">📚 Frontend is being built</p>
          <p className="text-gray-700">🚀 Coming soon!</p>
        </div>
      </div>
    </div>
  );
}
