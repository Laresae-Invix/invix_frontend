import {
	FaFacebook,
	FaInstagram,
	FaMailBulk,
	FaTiktok,
	FaTwitter,
} from "react-icons/fa"; // Mengimpor ikon FontAwesome
import { Link } from "react-router-dom"; // Tetap menyertakan import Link

function FooterSection() {
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		product: [
			{ label: "Features", href: "#features" },
			{ label: "Pricing", href: "#pricing" },
			{ label: "Templates", href: "#samples" },
			{ label: "How it Works", href: "#how-it-works" },
		],
		company: [
			{ label: "About Us", href: "#about" },
			{ label: "Careers", href: "#" },
			{ label: "Blog", href: "#" },
			{ label: "Press Kit", href: "#" },
		],
		support: [
			{ label: "Help Center", href: "#" },
			{ label: "Contact Us", href: "#" },
			{ label: "FAQ", href: "#faq" },
			{ label: "Community", href: "#" },
		],
		legal: [
			{ label: "Privacy Policy", href: "#" },
			{ label: "Terms of Service", href: "#" },
			{ label: "Cookie Policy", href: "#" },
			{ label: "GDPR", href: "#" },
		],
	};

	return (
		<footer className="bg-[#111827] text-[#d1d5db]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				{/* Main Footer Content */}
				<div className="grid grid-cols-2 md:grid-cols-5 gap-8">
					{/* Brand Column */}
					<div className="col-span-2 md:col-span-1">
						<div className="footer-logo mb-4 text-2xl font-semibold text-white">
							Invix
						</div>
						<p className="footer-description mb-6 text-sm text-slate-400">
							Buat undangan digital yang indah untuk setiap kesempatan.
						</p>
						<div className="flex space-x-4">
							<Link
								to="https://web.facebook.com/profile.php?id=61578005167745"
								className="footer-social-icon hover:text-blue-500"
							>
								<FaFacebook className="h-5 w-5" />
							</Link>
							<Link to="/" className="footer-social-icon hover:text-blue-500">
								<FaTwitter className="h-5 w-5" />
							</Link>
							<Link
								to="https://www.instagram.com/invix.invitation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
								className="footer-social-icon hover:text-blue-500"
							>
								<FaInstagram className="h-5 w-5" />
							</Link>
							<Link
								to="https://www.tiktok.com/@invixinvitation"
								className="footer-social-icon hover:text-blue-500"
							>
								<FaTiktok className="h-5 w-5" />
							</Link>
						</div>
					</div>

					{/* Product Links */}
					<div>
						<h4 className="footer-heading text-lg font-semibold">Product</h4>
						<ul className="footer-links space-y-2 mt-3 text-sm text-slate-400">
							{footerLinks.product.map((link) => (
								<li key={link.label}>
									<a href={link.href} className="hover:text-white">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Company Links */}
					<div>
						<h4 className="footer-heading text-lg font-semibold">Company</h4>
						<ul className="footer-links space-y-2 mt-3 text-sm text-slate-400">
							{footerLinks.company.map((link) => (
								<li key={link.label}>
									<a href={link.href} className="hover:text-white">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Support Links */}
					<div>
						<h4 className="footer-heading text-lg font-semibold">Support</h4>
						<ul className="footer-links space-y-2 mt-3 text-sm text-slate-400">
							{footerLinks.support.map((link) => (
								<li key={link.label}>
									<a href={link.href} className="hover:text-white">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Legal Links */}
					<div>
						<h4 className="footer-heading text-lg font-semibold">Legal</h4>
						<ul className="footer-links space-y-2 mt-3 text-sm text-slate-400">
							{/* Hanya menampilkan Ketentuan dan Privasi menggunakan Link */}
							<li>
								<Link to="/terms" className="hover:text-white">
									Ketentuan
								</Link>
							</li>
							<li>
								<Link to="/privacypolicy" className="hover:text-white">
									Privasi
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Newsletter */}
				<div className="footer-newsletter mt-10 border-t border-b py-8 border-slate-600">
					<div className="max-w-md">
						<h4 className="footer-heading mb-3 text-lg font-semibold">
							Stay Updated
						</h4>
						<p className="footer-description mb-4 text-sm text-slate-400">
							Subscribe to our newsletter for tips, updates, and exclusive
							offers.
						</p>
						<div className="flex space-x-2">
							<input
								type="email"
								placeholder="Enter your email"
								className="footer-input px-4 py-2 border border-slate-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4351BC]"
							/>
							<button
								type="button"
								className="footer-subscribe-btn px-4 py-2 bg-[#4351BC] text-white rounded-md hover:bg-blue-600"
							>
								<FaMailBulk className="h-5 w-5" />
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="footer-bottom mt-12 pt-4 text-center text-xs text-slate-500 border-t border-slate-600">
					<p className="footer-copyright">
						© {currentYear} Invix. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default FooterSection;
