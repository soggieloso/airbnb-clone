export default function Reservations() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Reservations</h1>
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <p className="text-gray-500">No reservations yet.</p>
        <Link to="/" className="text-rose-500 mt-2 inline-block">
          Start exploring →
        </Link>
      </div>
    </div>
  );
}