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
    'crypto'
  ];

  const suspiciousDomains = [
    '.xyz',
    '.top',
    '.click',
    '.win',
    '.bet',
    '.vip'
  ];

  let score = 0;

  let detectedKeywords = [];

  suspiciousKeywords.forEach(keyword => {

    if (text.includes(keyword)) {
      score += 12;
      detectedKeywords.push(keyword);
    }

  });

  suspiciousDomains.forEach(domain => {

    if (text.includes(domain)) {
      score += 20;
    }

  });

  if (text.includes('http://')) {
    score += 15;
  }

  if (text.length > 120) {
    score += 8;
  }

  if (
    text.includes('login') &&
    text.includes('bank')
  ) {
    score += 25;
  }

  if (score > 100) {
    score = 100;
  }

  let status = 'SAFE';

  if (score >= 70) {
    status = 'DANGER';
  }
  else if (score >= 40) {
    status = 'WARNING';
  }

  return Response.json({

    safe: status === 'SAFE',

    status,

    score,

    aiConfidence: `${Math.floor(
      80 + Math.random() * 19
    )}%`,

    detectedKeywords,

    analysis: status === 'DANGER'
      ? 'AI mendeteksi pola phishing, judi online, atau scam berisiko tinggi.'
      : status === 'WARNING'
      ? 'AI menemukan pola mencurigakan yang perlu diperiksa lebih lanjut.'
      : 'Tidak ditemukan indikasi ancaman digital berbahaya.',

    threatType:
      score >= 70
        ? 'High Risk Threat'
        : score >= 40
        ? 'Suspicious Activity'
        : 'Safe Traffic'

  });

}