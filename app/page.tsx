'use client'
import React from 'react';

export default function GarudaShieldAI() {
  const [input, setInput] = React.useState('');

  const [result, setResult] = React.useState<{
    status: string;
    risk: string;
    message: string;
  } | null>(null);

  const [loading, setLoading] = React.useState(false);

  const scanLink = async () => {
    setLoading(true);

    const res = await fetch('/api/scan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: input
      })
    });

    const data = await res.json();

    setResult({
      status: data.safe ? 'SAFE' : 'DANGER',
      risk: data.risk,
      message: data.result
    });

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-red-500/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between mb-10">

          <div>
            <h1 className="text-3xl font-black tracking-wide text-red-500">
              GARUDASHIELD AI
            </h1>

            <p className="text-sm text-gray-400">
              National Cyber Protection System
            </p>
          </div>

          <button className="bg-red-600 hover:bg-red-500 transition px-5 py-2 rounded-2xl font-semibold shadow-lg shadow-red-500/30">
            Indonesia Emas
          </button>

        </nav>

        {/* SYSTEM STATUS */}
        <div className="flex gap-4 mb-10 flex-wrap">

          <div className="bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-2xl">
            <p className="text-xs text-gray-500">
              Threat Monitoring
            </p>

            <h3 className="font-bold text-green-400">
              ACTIVE
            </h3>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-2xl">
            <p className="text-xs text-gray-500">
              AI Engine
            </p>

            <h3 className="font-bold text-green-400">
              ONLINE
            </h3>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-2xl">
            <p className="text-xs text-gray-500">
              National Shield
            </p>

            <h3 className="font-bold text-red-400">
              PROTECTED
            </h3>
          </div>

        </div>

        {/* MAIN SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-6">

              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />

              <span className="text-red-300 text-sm">
                AI Threat Detection Active
              </span>

            </div>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-6">

              Sistem
              <span className="text-red-500">
                {' '}Deteksi Ancaman{' '}
              </span>
              Digital Nasional

            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">

              GarudaShield AI adalah platform keamanan digital berbasis AI
              yang membantu masyarakat Indonesia mendeteksi phishing,
              scam, judi online, dan ancaman siber secara realtime.

            </p>

            <div className="flex flex-wrap gap-4">

              <button className="bg-red-600 hover:bg-red-500 transition px-6 py-3 rounded-2xl font-bold shadow-xl shadow-red-500/20">
                Scan Ancaman
              </button>

              <button className="border border-gray-700 hover:border-red-500 transition px-6 py-3 rounded-2xl font-bold bg-zinc-900/60">
                Dashboard Nasional
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-zinc-950/80 border border-red-500/20 rounded-3xl p-6 shadow-2xl shadow-red-500/10 backdrop-blur-xl">

            <div className="flex items-center justify-between mb-6">

              <h3 className="text-2xl font-black">
                AI Threat Scanner
              </h3>

              <div className="flex items-center gap-2 text-green-400 text-sm">

                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                ONLINE

              </div>

            </div>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste link atau chat scam di sini..."
              className="w-full h-36 bg-black border border-zinc-800 rounded-2xl p-4 outline-none focus:border-red-500 resize-none"
            />

            <button
              onClick={scanLink}
              className="w-full mt-5 bg-red-600 hover:bg-red-500 transition py-4 rounded-2xl font-black text-lg"
            >

              {loading
                ? 'Menganalisis Ancaman...'
                : 'SCAN SEKARANG'}

            </button>

            {/* RESULT */}
            {result && (

              <div
                className={`mt-6 rounded-2xl p-5 border ${
                  result.status === 'DANGER'
                    ? 'bg-red-500/10 border-red-500/30'
                    : 'bg-green-500/10 border-green-500/30'
                }`}
              >

                <div className="flex items-center justify-between mb-3">

                  <h4 className="font-black text-xl">

                    {result.status === 'DANGER'
                      ? '⚠️ Ancaman Terdeteksi'
                      : '✅ Aman'}

                  </h4>

                  <span className="font-black text-lg">
                    {result.risk}
                  </span>

                </div>

                <p className="text-gray-300">
                  {result.message}
                </p>

                <div className="mt-4 text-sm text-gray-400 leading-relaxed">

                  Sistem mendeteksi pola domain mencurigakan,
                  redirect abnormal, dan keyword berbahaya yang
                  sering digunakan pada aktivitas phishing
                  dan judi online.

                </div>

              </div>

            )}

            {/* LIVE THREAT FEED */}
            <div className="mt-6 bg-black/60 border border-zinc-800 rounded-2xl p-4">

              <div className="flex items-center justify-between mb-4">

                <h4 className="font-bold text-red-400">
                  LIVE THREAT FEED
                </h4>

                <span className="text-xs text-green-400">
                  REALTIME
                </span>

              </div>

              <div className="space-y-3 text-sm">

                <div className="flex justify-between border-b border-zinc-800 pb-2">

                  <span>
                    ⚠️ Phishing Website Detected
                  </span>

                  <span className="text-gray-500">
                    Jakarta
                  </span>

                </div>

                <div className="flex justify-between border-b border-zinc-800 pb-2">

                  <span>
                    🚫 Judol Domain Blocked
                  </span>

                  <span className="text-gray-500">
                    Bandung
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>
                    🛡️ Scam Message Analyzed
                  </span>

                  <span className="text-gray-500">
                    Surabaya
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

            <div className="text-5xl font-black text-red-500 mb-2">
              127,391
            </div>

            <p className="text-gray-400">
              Scam Terdeteksi
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

            <div className="text-5xl font-black text-red-500 mb-2">
              52,841
            </div>

            <p className="text-gray-400">
              Pengguna Terlindungi
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

            <div className="text-5xl font-black text-red-500 mb-2">
              98.7%
            </div>

            <p className="text-gray-400">
              Detection Accuracy
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}