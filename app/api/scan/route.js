export async function POST(req) {
  const body = await req.json();

  const text = body.text.toLowerCase();

  const blacklist = [
    'slot',
    'gacor',
    'casino',
    'bonus',
    'hadiah'
  ];

  const detected = blacklist.some(word =>
    text.includes(word)
  );

  return Response.json({
    safe: !detected,
    risk: detected ? '92%' : '12%',
    result: detected
      ? '⚠️ Scam/Judol terdeteksi'
      : '✅ Aman'
  });
}