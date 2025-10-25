import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../../assets/Logo.webp";

export default function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img
						src={logo} //engarahkan ke file logo.webp
						alt="Logo"
						className="h-8 w-8 rounded-2xl object-contain"
					/>
          </div>
          <p className="mt-3 text-sm text-slate-600">Undangan digital modern untuk semua acara.</p>
        </div>
        <div>
          <p className="font-semibold">Produk</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="#templates" className="hover:text-blue-700">Template</a></li>
            <li><a href="#pricing" className="hover:text-blue-700">Harga</a></li>
            <li><a href="#features" className="hover:text-blue-700">Fitur</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Bantuan</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="#faq" className="hover:text-blue-700">FAQ</a></li>
            <li><a href="/privacypolicy" className="hover:text-blue-700">Pusat Bantuan</a></li>
            <li><a href="/privacypolicy" className="hover:text-blue-700">Hubungi Kami</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link to="/terms" className="hover:text-blue-700">Ketentuan</Link>
            </li>
            <li>
              <Link to="/privacypolicy" className="hover:text-blue-700">Privasi</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Invix. All rights reserved.
      </div>
    </footer>
  );
}
