import { FileText } from "lucide-react";

export default function TermsAndConditions() {
	return (
		<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
			<div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10 md:p-12">
				<div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-200">
					<div
						className="p-3 rounded-xl"
						style={{ backgroundColor: "#4351BC20" }}
					>
						<FileText className="w-7 h-7" style={{ color: "#4351BC" }} />
					</div>
					<div>
						<h2
							className="text-3xl sm:text-4xl font-bold"
							style={{ color: "#4351BC" }}
						>
							Terms and Conditions
						</h2>
						<p className="text-gray-500 text-sm mt-1">
							Ketentuan Penggunaan Invix
						</p>
					</div>
				</div>

				<div className="space-y-8 text-gray-700 leading-relaxed">
					<section>
						<h2
							className="text-2xl font-semibold mb-4"
							style={{ color: "#4351BC" }}
						>
							1. Introduction
						</h2>
						<p className="mb-3">
							Selamat datang di Invix! Dengan mengakses atau menggunakan
							platform kami, Anda setuju untuk mematuhi ketentuan dan syarat
							penggunaan yang telah kami tentukan dalam halaman ini. Jika Anda
							tidak setuju dengan salah satu ketentuan yang tercantum, harap
							tidak menggunakan layanan kami.
						</p>
						<p>
							Ketentuan ini berlaku untuk semua pengguna yang mengakses dan
							menggunakan layanan Invix, termasuk tetapi tidak terbatas pada
							penggunaan produk atau fitur di dalam platform kami.
						</p>
					</section>

					<section>
						<h2
							className="text-2xl font-semibold mb-4"
							style={{ color: "#4351BC" }}
						>
							2. Definisi
						</h2>
						<ul className="list-none space-y-3">
							<li>
								<span className="font-medium text-gray-900">"Kami"</span> atau{" "}
								<span className="font-medium text-gray-900">"Invix"</span>{" "}
								mengacu pada penyedia layanan yang menyediakan platform undangan
								digital.
							</li>
							<li>
								<span className="font-medium text-gray-900">"Pengguna"</span>{" "}
								mengacu pada individu atau entitas yang mengakses, mendaftar,
								atau menggunakan layanan kami.
							</li>
							<li>
								<span className="font-medium text-gray-900">"Layanan"</span>{" "}
								mengacu pada penggunaan platform kami yang memungkinkan pengguna
								untuk membuat, mengelola, dan mengirim undangan digital.
							</li>
						</ul>
					</section>

					<section>
						<h2
							className="text-2xl font-semibold mb-4"
							style={{ color: "#4351BC" }}
						>
							3. Penggunaan Layanan
						</h2>
						<div className="space-y-4">
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Pendaftaran Pengguna:
								</h3>
								<p>
									Untuk dapat mengakses sebagian besar fitur di platform kami,
									Anda harus mendaftar akun dengan menyediakan informasi yang
									akurat dan terkini. Anda setuju untuk menjaga kerahasiaan akun
									dan informasi login Anda serta bertanggung jawab atas semua
									aktivitas yang terjadi di bawah akun Anda.
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Akses dan Penggunaan:
								</h3>
								<p>
									Anda setuju untuk menggunakan layanan kami hanya untuk tujuan
									yang sah dan sesuai dengan ketentuan ini. Anda tidak boleh
									menggunakan platform kami untuk kegiatan ilegal atau yang
									melanggar hak-hak orang lain.
								</p>
							</div>
						</div>
					</section>

					<section>
						<h2
							className="text-2xl font-semibold mb-4"
							style={{ color: "#4351BC" }}
						>
							4. Hak Cipta dan Kepemilikan Konten
						</h2>
						<p className="mb-3">
							Semua hak cipta, merek dagang, dan hak kekayaan intelektual
							lainnya terkait dengan platform dan layanan kami adalah milik kami
							atau pihak ketiga yang telah memberikan izin. Anda tidak diizinkan
							untuk menyalin, mendistribusikan, atau memodifikasi konten yang
							ada tanpa izin tertulis dari kami.
						</p>
						<p>
							Pengguna dapat mengunggah konten ke platform, namun kami tidak
							memiliki hak atas konten yang diunggah, kecuali untuk kepentingan
							operasional layanan.
						</p>
					</section>

					<section>
						<h2
							className="text-2xl font-semibold mb-4"
							style={{ color: "#4351BC" }}
						>
							5. Kebijakan Penggunaan
						</h2>
						<div className="space-y-4">
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Kewajiban Pengguna:
								</h3>
								<p>
									Anda wajib menggunakan layanan kami sesuai dengan pedoman yang
									kami tentukan, termasuk menghormati privasi dan hak kekayaan
									intelektual orang lain.
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Pembatasan Penggunaan:
								</h3>
								<p>
									Anda tidak diizinkan untuk melakukan aktivitas yang merugikan,
									mengganggu, atau merusak platform kami atau sistem yang kami
									gunakan, termasuk tapi tidak terbatas pada peretasan,
									penyebaran virus, atau upaya pemrograman yang merusak.
								</p>
							</div>
						</div>
					</section>

					<section>
						<h2
							className="text-2xl font-semibold mb-4"
							style={{ color: "#4351BC" }}
						>
							6. Kebijakan Pembayaran
						</h2>
						<p className="mb-3">
							Layanan kami beroperasi dengan model berlangganan atau pembayaran
							satu kali. Biaya untuk menggunakan layanan kami akan dijelaskan
							pada saat pendaftaran atau pada saat melakukan pembelian.
						</p>
						<p>
							Pembayaran tidak dapat dikembalikan kecuali secara eksplisit
							dinyatakan sebaliknya dalam ketentuan yang berlaku.
						</p>
					</section>

					<section>
						<h2
							className="text-2xl font-semibold mb-4"
							style={{ color: "#4351BC" }}
						>
							7. Privasi dan Keamanan
						</h2>
						<div className="space-y-4">
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Kebijakan Privasi:
								</h3>
								<p>
									Kami mengumpulkan dan memproses data pribadi Anda sesuai
									dengan kebijakan privasi yang dapat Anda baca di halaman
									terpisah. Pengumpulan data ini dilakukan untuk meningkatkan
									pengalaman pengguna di platform kami.
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">Keamanan:</h3>
								<p>
									Kami berkomitmen untuk melindungi informasi pribadi Anda dan
									menjaga kerahasiaannya. Namun, tidak ada metode transmisi data
									melalui internet yang sepenuhnya aman. Anda setuju untuk
									menggunakan layanan kami dengan risiko Anda sendiri.
								</p>
							</div>
						</div>
					</section>

					<section>
						<h2
							className="text-2xl font-semibold mb-4"
							style={{ color: "#4351BC" }}
						>
							8. Pembaruan Layanan dan Ketentuan
						</h2>
						<p className="mb-3">
							Kami berhak untuk memperbarui atau memodifikasi layanan kami
							sewaktu-waktu. Perubahan tersebut dapat mencakup peningkatan fitur
							atau pembaruan harga layanan.
						</p>
						<p>
							Ketentuan ini juga dapat diperbarui dari waktu ke waktu. Anda
							disarankan untuk memeriksa ketentuan ini secara berkala untuk
							mengetahui perubahan atau pembaruan yang ada.
						</p>
					</section>

					<section>
						<h2
							className="text-2xl font-semibold mb-4"
							style={{ color: "#4351BC" }}
						>
							9. Batasan Tanggung Jawab
						</h2>
						<p className="mb-3">
							Kami tidak bertanggung jawab atas kerugian atau kerusakan yang
							timbul akibat penggunaan layanan kami, termasuk namun tidak
							terbatas pada kesalahan teknis, keterlambatan, atau gangguan
							layanan.
						</p>
						<p>
							Kami juga tidak bertanggung jawab atas kesalahan yang disebabkan
							oleh pengguna, seperti data yang tidak akurat atau konten yang
							tidak pantas yang diunggah ke platform kami.
						</p>
					</section>

					<section>
						<h2
							className="text-2xl font-semibold mb-4"
							style={{ color: "#4351BC" }}
						>
							10. Penghentian Akun
						</h2>
						<p>
							Kami berhak untuk menangguhkan atau menghentikan akun Anda jika
							kami menemukan pelanggaran terhadap ketentuan ini. Penghentian ini
							dapat dilakukan tanpa pemberitahuan sebelumnya jika kami
							menganggap bahwa pelanggaran tersebut merugikan layanan atau
							pengguna lain.
						</p>
					</section>

					<section>
						<h2
							className="text-2xl font-semibold mb-4"
							style={{ color: "#4351BC" }}
						>
							11. Penyelesaian Sengketa
						</h2>
						<p>
							Setiap sengketa yang timbul akibat penggunaan platform kami akan
							diselesaikan melalui jalur hukum yang berlaku di Indonesia, sesuai
							dengan hukum yang berlaku.
						</p>
					</section>

					<section>
						<h2
							className="text-2xl font-semibold mb-4"
							style={{ color: "#4351BC" }}
						>
							12. Ketentuan Lain
						</h2>
						<div className="space-y-4">
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Pengalihan:
								</h3>
								<p>
									Kami dapat mengalihkan hak atau kewajiban kami berdasarkan
									ketentuan ini kepada pihak ketiga tanpa persetujuan Anda.
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">
									Keberlakuan Ketentuan:
								</h3>
								<p>
									Jika ada ketentuan yang dianggap tidak sah atau tidak dapat
									diberlakukan, ketentuan tersebut akan dianggap terpisah dari
									ketentuan lainnya dan tidak mempengaruhi keberlakuan ketentuan
									yang lain.
								</p>
							</div>
						</div>
					</section>
				</div>

				<div className="mt-12 pt-8 border-t border-gray-200">
					<p className="text-sm text-gray-500 text-center">
						Terakhir diperbarui:{" "}
						{new Date().toLocaleDateString("id-ID", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>
				</div>
			</div>
		</div>
	);
}
