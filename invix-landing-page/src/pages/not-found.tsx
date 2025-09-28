import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="grid place-items-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">404</h1>
        <p className="mt-2 text-gray-600">Halaman yang lu cari nggak ketemu.</p>
        <Link
          to="/"
          className="mt-4 inline-block rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-black"
        >
          Balik ke Home
        </Link>
      </div>
    </div>
  );
}
