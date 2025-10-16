import { Shield, Home } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigate?: (page: 'terms' | 'privacy') => void;
}

export default function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8">

          <div className="inline-flex rounded-lg shadow-sm border border-gray-200 bg-white p-1">
            <button
              onClick={() => onNavigate?.('terms')}
              className="px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-200 text-gray-600 hover:bg-gray-50"
            >
              Terms and Conditions
            </button>
            <button
              onClick={() => onNavigate?.('privacy')}
              className="px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-200 text-white"
              style={{ backgroundColor: '#4351BC' }}
            >
              Privacy Policy
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10 md:p-12">
          <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-200">
            <div className="p-3 rounded-xl" style={{ backgroundColor: '#4351BC20' }}>
              <Shield className="w-7 h-7" style={{ color: '#4351BC' }} />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#4351BC' }}>
                Privacy Policy
              </h2>
              <p className="text-gray-500 text-sm mt-1">Kebijakan Privasi Invix</p>
            </div>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#4351BC' }}>
                1. Pengenalan
              </h2>
              <p className="mb-3">
                Selamat datang di Invix! Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi yang Anda berikan saat menggunakan layanan kami.
              </p>
              <p>
                Dengan menggunakan platform kami, Anda setuju dengan kebijakan privasi ini. Jika Anda tidak setuju, harap tidak menggunakan layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#4351BC' }}>
                2. Informasi yang Kami Kumpulkan
              </h2>
              <p className="mb-4">
                Kami mengumpulkan informasi yang Anda berikan saat membuat akun, berinteraksi dengan layanan kami, atau mengakses platform kami. Jenis informasi yang kami kumpulkan antara lain:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li>
                  <span className="font-medium text-gray-900">Informasi Akun:</span> Nama, alamat email, nomor telepon, dan informasi kontak lainnya.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Data Pengguna:</span> Data penggunaan seperti preferensi desain, template undangan yang dipilih, serta informasi terkait event atau undangan yang dibuat.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Informasi Pembayaran:</span> Jika Anda melakukan pembelian atau berlangganan, kami mengumpulkan informasi pembayaran seperti detail kartu kredit/debit atau informasi pembayaran lainnya.
                </li>
              </ul>
              <p className="mt-4">
                Kami juga mengumpulkan data teknis seperti alamat IP, lokasi geografis, dan perangkat yang digunakan untuk mengakses platform kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#4351BC' }}>
                3. Penggunaan Informasi
              </h2>
              <p className="mb-4">
                Kami menggunakan informasi yang kami kumpulkan untuk tujuan berikut:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li>
                  <span className="font-medium text-gray-900">Memberikan Layanan:</span> Untuk memungkinkan Anda menggunakan platform kami, termasuk membuat, mengelola, dan mengirim undangan digital.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Personalisasi Layanan:</span> Kami dapat menggunakan data yang Anda berikan untuk menyarankan template, fitur, atau pengaturan yang sesuai dengan preferensi Anda.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Pemberitahuan:</span> Kami akan mengirimkan pemberitahuan terkait akun, pembaruan, atau perubahan kebijakan melalui email atau notifikasi dalam platform.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Peningkatan Layanan:</span> Informasi yang kami kumpulkan membantu kami untuk terus meningkatkan fitur dan fungsi layanan kami.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Keamanan:</span> Untuk melindungi keamanan akun dan transaksi Anda di platform kami.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#4351BC' }}>
                4. Penggunaan Cookies
              </h2>
              <p className="mb-3">
                Kami menggunakan cookies untuk meningkatkan pengalaman pengguna saat mengakses platform kami. Cookies adalah file kecil yang disimpan di perangkat Anda yang memungkinkan kami untuk mengingat preferensi Anda dan meningkatkan fungsionalitas situs web kami.
              </p>
              <p>
                Anda dapat mengatur browser Anda untuk menolak cookies atau memberi tahu Anda ketika cookies dikirim. Namun, beberapa fitur dari platform kami mungkin tidak berfungsi dengan baik tanpa cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#4351BC' }}>
                5. Pembagian Informasi
              </h2>
              <p className="mb-4">
                Kami tidak akan menjual atau membagikan informasi pribadi Anda dengan pihak ketiga, kecuali dalam situasi berikut:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li>
                  <span className="font-medium text-gray-900">Pihak Ketiga yang Terkait:</span> Kami dapat membagikan informasi dengan penyedia layanan yang membantu kami dalam menjalankan layanan kami (misalnya, layanan hosting, pembayaran, dan analitik).
                </li>
                <li>
                  <span className="font-medium text-gray-900">Kepatuhan Hukum:</span> Kami dapat mengungkapkan informasi pribadi Anda jika diperlukan oleh hukum, seperti untuk mematuhi panggilan pengadilan atau prosedur hukum lainnya.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#4351BC' }}>
                6. Keamanan Data
              </h2>
              <p className="mb-3">
                Kami berkomitmen untuk menjaga keamanan informasi pribadi Anda. Kami menggunakan langkah-langkah keamanan teknis dan administratif untuk melindungi data Anda dari akses yang tidak sah atau pengungkapan yang tidak sah.
              </p>
              <p>
                Namun, tidak ada metode transmisi data melalui internet yang sepenuhnya aman. Meskipun kami berusaha keras untuk melindungi informasi Anda, kami tidak dapat menjamin keamanan penuh.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#4351BC' }}>
                7. Hak Pengguna
              </h2>
              <p className="mb-4">
                Sebagai pengguna, Anda memiliki hak untuk:
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li>
                  <span className="font-medium text-gray-900">Mengakses Data:</span> Anda dapat meminta salinan informasi pribadi yang kami miliki tentang Anda.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Memperbarui atau Mengoreksi Data:</span> Anda dapat memperbarui atau mengoreksi informasi pribadi yang kami simpan.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Menghapus Akun:</span> Anda dapat menghapus akun Anda dengan menghubungi tim dukungan kami.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Menarik Persetujuan:</span> Anda dapat menarik persetujuan Anda kapan saja untuk penggunaan data pribadi Anda, dengan memperbarui pengaturan akun Anda.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#4351BC' }}>
                8. Penyimpanan Data
              </h2>
              <p>
                Kami hanya akan menyimpan informasi pribadi Anda selama diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini atau sesuai dengan kewajiban hukum yang berlaku.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#4351BC' }}>
                9. Perubahan Kebijakan Privasi
              </h2>
              <p>
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Jika ada perubahan materi, kami akan memberi tahu Anda melalui pemberitahuan di platform kami atau melalui email. Harap periksa kebijakan privasi ini secara berkala untuk mengetahui pembaruan terbaru.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#4351BC' }}>
                10. Hubungi Kami
              </h2>
              <p>
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi ini atau cara kami menangani data pribadi Anda, silakan hubungi kami di [alamat email dukungan pelanggan] atau kunjungi halaman Hubungi Kami di situs web kami.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
