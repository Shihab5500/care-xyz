import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-purple-500 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <p className="text-slate-400 mt-8 mb-8 text-lg">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-purple-500/40 transition-all">
        Go Home
      </Link>
    </div>
  );
}