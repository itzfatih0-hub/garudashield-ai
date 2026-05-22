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
        <nav className="flex items-center justify-between mb-16">
          <div>
            <h1 className="text-3xl font-black tracking-wide text-red-500">
              GARUDASHIELD AI
            </h1>

            <p className="text-sm text-gray-400">
              Cyber Protection for Indonesia Emas
            </p>
          </div>

          <button className="bg-red-600 hover:bg-red-500 transition px-5 py-2 rounded-2xl font-semibold shadow-lg shadow-red-500/30">
            Indonesia Emas
          </button>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />

              <span className="text-red-300 text-sm">
                AI Protection System Active
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Lindungi
              <span className="text-red-500"> Indonesia </span>
              Dari Scam Digital
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Platform AI untuk mendeteksi phishing, judol,
              penipuan online, dan ancaman digital yang
              merugikan masyarakat Indonesia.
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
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
            <div className="text-5xl font-black text-red-500 mb-2">
              12K+
            </div>

            <p className="text-gray-400">
              Scam Terdeteksi
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
            <div className="text-5xl font-black text-red-500 mb-2">
              8.3K
            </div>

            <p className="text-gray-400">
              Masyarakat Terlindungi
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
            <div className="text-5xl font-black text-red-500 mb-2">
              99%
            </div>

            <p className="text-gray-400">
              AI Detection Accuracy
            </p>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-10 text-center shadow-2xl shadow-red-500/20">
          <h3 className="text-4xl font-black mb-4">
            Indonesia Emas Tanpa Scam
          </h3>

          <p className="text-red-100 max-w-2xl mx-auto text-lg">
            GarudaShield AI membantu masyarakat Indonesia
            menghadapi ancaman digital dengan teknologi AI
            modern dan sistem perlindungan realtime.
          </p>
        </div>
      </div>
    </div>
  );
}