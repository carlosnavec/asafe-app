"use client"
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Error</h1>
      <p className="text-lg mb-4">An error has occurred. Please try again.</p>
      <button
        onClick={handleGoBack}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Go back to the login page
      </button>
    </div>
  );
}