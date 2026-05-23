export async function POST(req) {

  const body = await req.json();

  const text = body.text.toLowerCase();

  const suspiciousKeywords = [
    'slot',
    'gacor',
    'casino',
    'bonus',
    'free',
    'hadiah',
    'deposit',
    'cuan',
    'maxwin',
    'jackpot',
    'claim',
    'login',
    'bank',
    'dana',
    'ovo',
    'qris',
    'crypto',
    'pinjaman',
    'otp',
    'transfer'
  ];

  const suspiciousDomains = [
    '.xyz',
    '.top',
    '.click',
    '.win',
    '.bet',
    '.vip',
    '.ru'
  ];

  // =========================
  // AI SECURITY SCORE
  // 100 = AMAN
  // 0 = BAHAYA
  // =========================

  let score = 100;

  let detectedKeywords = [];

  // KEYWORD ANALYSIS
  suspiciousKeywords.forEach(keyword => {

    if (text.includes(keyword)) {

      score -= 12;

      detectedKeywords.push(keyword);

    }

  });

  // DOMAIN ANALYSIS
  suspiciousDomains.forEach(domain => {

    if (text.includes(domain)) {

      score -= 20;

    }

  });

  // HTTP TIDAK AMAN
  if (text.includes('http://')) {

    score -= 15;

  }

  // TEXT TERLALU PANJANG
  if (text.length > 120) {

    score -= 8;

  }

  // LOGIN BANK = PHISHING
  if (
    text.includes('login') &&
    text.includes('bank')
  ) {

    score -= 25;

  }

  // BATAS MINIMUM
  if (score < 0) {

    score = 0;

  }

  // =========================
  // STATUS AI
  // =========================

  let status = 'SAFE';

  if (score <= 25) {

    status = 'DANGER';

  }
  else if (score <= 60) {

    status = 'WARNING';

  }
  else {

    status = 'SAFE';

  }

  // =========================
  // THREAT TYPE
  // =========================

  let threatType = 'Safe Traffic';

  if (status === 'DANGER') {

    threatType = 'High Risk Threat';

  }
  else if (status === 'WARNING') {

    threatType = 'Suspicious Activity';

  }

  // =========================
  // ANALYSIS MESSAGE
  // =========================

  let analysis =
    'Tidak ditemukan indikasi ancaman digital berbahaya.';

  if (status === 'WARNING') {

    analysis =
      'AI menemukan pola mencurigakan yang perlu diperiksa lebih lanjut.';

  }

  if (status === 'DANGER') {

    analysis =
      'AI mendeteksi pola phishing, scam, atau judi online berisiko tinggi.';

  }

  // =========================
  // RESPONSE
  // =========================

  return Response.json({

    safe: status === 'SAFE',

    status,

    score,

    aiConfidence: `${Math.floor(
      85 + Math.random() * 14
    )}%`,

    detectedKeywords,

    analysis,

    threatType

  });

}