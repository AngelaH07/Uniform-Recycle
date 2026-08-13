// SVG Data URL generator for the 18 official school uniform pieces
function encodeSvg(svgString: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
}

export const UNIFORM_PHOTOS: Record<string, string> = {
  // 1. 春季外套 (Spring Jacket)
  '春季外套': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <!-- Sleeves & Main Body Navy -->
      <path d="M 120,110 L 80,180 L 105,320 L 135,310 L 140,200 L 260,200 L 265,310 L 295,320 L 320,180 L 280,110 Z" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <rect x="140" y="190" width="120" height="130" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <!-- White Chest Stripe -->
      <polygon points="128,150 272,150 268,190 132,190" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Light Blue Upper Body -->
      <path d="M 160,80 L 240,80 L 272,150 L 128,150 Z" fill="#93c5fd" stroke="#60a5fa" stroke-width="1.5"/>
      <!-- Stand Collar -->
      <path d="M 160,80 L 160,50 L 240,50 L 240,80 Z" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
      <!-- Zipper -->
      <line x1="200" y1="50" x2="200" y2="320" stroke="#475569" stroke-width="3"/>
      <!-- Ribbed Hem and Cuffs -->
      <rect x="140" y="310" width="120" height="15" fill="#0f172a"/>
      <!-- Emblem -->
      <circle cx="230" cy="170" r="14" fill="#ffffff" stroke="#1d4ed8" stroke-width="2"/>
      <text x="230" y="174" font-size="9" font-weight="bold" fill="#1d4ed8" text-anchor="middle">WS</text>
    </svg>
  `),

  // 2. 冬季冲锋衣 (Winter Parka)
  '冬季冲锋衣': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <!-- Hood -->
      <path d="M 150,80 C 150,30 250,30 250,80 Z" fill="#93c5fd" stroke="#3b82f6" stroke-width="2"/>
      <path d="M 165,80 C 165,45 235,45 235,80 Z" fill="#1e293b"/>
      <!-- Parka Main Light Blue -->
      <rect x="135" y="80" width="130" height="260" rx="10" fill="#93c5fd" stroke="#3b82f6" stroke-width="2"/>
      <!-- Navy Shoulders & Pocket Accents -->
      <path d="M 135,80 L 265,80 L 265,130 L 135,130 Z" fill="#1e293b"/>
      <!-- Sleeves -->
      <path d="M 135,80 L 90,180 L 115,320 L 135,320 L 135,130 Z" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
      <path d="M 265,80 L 310,180 L 285,320 L 265,320 L 265,130 Z" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
      <!-- Navy Sleeve Cuffs -->
      <rect x="90" y="300" width="25" height="20" fill="#1e293b"/>
      <rect x="285" y="300" width="25" height="20" fill="#1e293b"/>
      <!-- Front Flap Pockets -->
      <rect x="145" y="240" width="45" height="50" rx="4" fill="#bfdbfe" stroke="#1e293b" stroke-width="2"/>
      <rect x="210" y="240" width="45" height="50" rx="4" fill="#bfdbfe" stroke="#1e293b" stroke-width="2"/>
      <!-- Zipper Center -->
      <line x1="200" y1="80" x2="200" y2="340" stroke="#1e293b" stroke-width="4"/>
      <!-- Emblem -->
      <circle cx="235" cy="165" r="12" fill="#ffffff" stroke="#1d4ed8" stroke-width="2"/>
      <text x="235" y="169" font-size="8" font-weight="bold" fill="#1d4ed8" text-anchor="middle">WS</text>
    </svg>
  `),

  // 3. 冬季长裤 (Winter Track Pants)
  '冬季长裤': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <!-- Pants Body -->
      <path d="M 135,60 L 265,60 L 255,350 L 205,350 L 200,160 L 195,160 L 190,350 L 145,350 Z" fill="#0f172a" stroke="#020617" stroke-width="2"/>
      <!-- Elastic Waistband -->
      <rect x="135" y="60" width="130" height="25" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <!-- Double White Side Stripes -->
      <line x1="140" y1="85" x2="150" y2="350" stroke="#ffffff" stroke-width="3"/>
      <line x1="145" y1="85" x2="155" y2="350" stroke="#ffffff" stroke-width="2"/>
      <line x1="260" y1="85" x2="250" y2="350" stroke="#ffffff" stroke-width="3"/>
      <line x1="255" y1="85" x2="245" y2="350" stroke="#ffffff" stroke-width="2"/>
    </svg>
  `),

  // 4. 礼服衬衫 (Formal Dress Shirt)
  '礼服衬衫': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <!-- Body -->
      <path d="M 130,100 L 270,100 L 260,330 L 140,330 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
      <!-- Long Sleeves -->
      <path d="M 130,100 L 80,260 L 110,270 L 140,140 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M 270,100 L 320,260 L 290,270 L 260,140 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- Collar -->
      <polygon points="200,100 160,60 180,100 200,115 220,100 240,60" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
      <!-- Center Placket & Buttons -->
      <line x1="200" y1="115" x2="200" y2="330" stroke="#cbd5e1" stroke-width="2"/>
      <circle cx="200" cy="140" r="3" fill="#94a3b8"/>
      <circle cx="200" cy="180" r="3" fill="#94a3b8"/>
      <circle cx="200" cy="220" r="3" fill="#94a3b8"/>
      <circle cx="200" cy="260" r="3" fill="#94a3b8"/>
      <!-- Emblem -->
      <circle cx="235" cy="160" r="12" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="235" y="164" font-size="8" font-weight="bold" fill="#1d4ed8" text-anchor="middle">WS</text>
    </svg>
  `),

  // 5. 礼服短裙 (Formal Pleated Skirt)
  '礼服短裙': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <!-- Plaid Base Skirt -->
      <path d="M 140,90 L 260,90 L 290,320 L 110,320 Z" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <!-- Plaid Pattern Stripes -->
      <path d="M 140,90 L 110,320 M 160,90 L 140,320 M 180,90 L 170,320 M 200,90 L 200,320 M 220,90 L 230,320 M 240,90 L 260,320 M 260,90 L 290,320" stroke="#93c5fd" stroke-width="3"/>
      <line x1="130" y1="150" x2="270" y2="150" stroke="#ffffff" stroke-width="2"/>
      <line x1="120" y1="210" x2="280" y2="210" stroke="#93c5fd" stroke-width="2"/>
      <line x1="115" y1="270" x2="285" y2="270" stroke="#ffffff" stroke-width="2"/>
      <!-- Waistband -->
      <rect x="140" y="80" width="120" height="18" fill="#0f172a"/>
    </svg>
  `),

  // 6. 礼服西装外套 (Formal Blazer)
  '礼服西装外套': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <!-- Blazer Body Navy -->
      <path d="M 125,90 L 275,90 L 285,330 L 115,330 Z" fill="#0f172a" stroke="#020617" stroke-width="2"/>
      <!-- Sleeves -->
      <path d="M 125,90 L 75,260 L 110,270 L 130,150 Z" fill="#0f172a" stroke="#020617" stroke-width="1.5"/>
      <path d="M 275,90 L 325,260 L 290,270 L 270,150 Z" fill="#0f172a" stroke="#020617" stroke-width="1.5"/>
      <!-- Lapels -->
      <polygon points="125,90 170,180 200,180 180,90" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
      <polygon points="275,90 230,180 200,180 220,90" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
      <!-- Inner Shirt V -->
      <polygon points="180,90 200,150 220,90" fill="#ffffff"/>
      <!-- Buttons Gold -->
      <circle cx="195" cy="220" r="4" fill="#fbbf24"/>
      <circle cx="195" cy="260" r="4" fill="#fbbf24"/>
      <!-- Flap Pockets -->
      <rect x="130" y="250" width="45" height="15" rx="2" fill="#1e293b" stroke="#020617"/>
      <rect x="225" y="250" width="45" height="15" rx="2" fill="#1e293b" stroke="#020617"/>
      <!-- Breast Pocket & Emblem -->
      <rect x="230" y="145" width="25" height="25" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
      <circle cx="242" cy="157" r="8" fill="#ffffff"/>
      <text x="242" y="160" font-size="6" font-weight="bold" fill="#1d4ed8" text-anchor="middle">WS</text>
    </svg>
  `),

  // 7. 领带(1) (Bow Tie)
  '领带(1)': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <!-- Neck Strap -->
      <path d="M 150,110 Q 200,80 250,110" fill="none" stroke="#1e293b" stroke-width="8"/>
      <!-- Left Wing -->
      <polygon points="200,180 110,130 120,230" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <line x1="110" y1="130" x2="200" y2="180" stroke="#93c5fd" stroke-width="3"/>
      <line x1="115" y1="180" x2="200" y2="180" stroke="#ffffff" stroke-width="2"/>
      <!-- Right Wing -->
      <polygon points="200,180 290,130 280,230" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <line x1="290" y1="130" x2="200" y2="180" stroke="#93c5fd" stroke-width="3"/>
      <line x1="285" y1="180" x2="200" y2="180" stroke="#ffffff" stroke-width="2"/>
      <!-- Hanging Ribbon Tails -->
      <polygon points="185,180 160,310 195,300" fill="#1e293b" stroke="#0f172a"/>
      <polygon points="215,180 240,310 205,300" fill="#1e293b" stroke="#0f172a"/>
      <!-- Center Knot -->
      <rect x="188" y="168" width="24" height="24" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
    </svg>
  `),

  // 8. 领带 (Necktie)
  '领带': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <!-- Collar Loop -->
      <path d="M 160,80 Q 200,60 240,80" fill="none" stroke="#1e293b" stroke-width="6"/>
      <!-- Knot -->
      <polygon points="180,80 220,80 212,110 188,110" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <!-- Main Tie Blade -->
      <polygon points="188,110 212,110 225,320 200,350 175,320" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <!-- Diagonal Stripes -->
      <line x1="188" y1="130" x2="214" y2="150" stroke="#93c5fd" stroke-width="4"/>
      <line x1="186" y1="170" x2="216" y2="190" stroke="#ffffff" stroke-width="3"/>
      <line x1="184" y1="210" x2="218" y2="230" stroke="#93c5fd" stroke-width="4"/>
      <line x1="182" y1="250" x2="220" y2="270" stroke="#ffffff" stroke-width="3"/>
      <line x1="180" y1="290" x2="222" y2="310" stroke="#93c5fd" stroke-width="4"/>
    </svg>
  `),

  // 9. 秋季卫衣 (Autumn Hoodie)
  '秋季卫衣': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <!-- Hood -->
      <path d="M 160,90 C 160,40 240,40 240,90 Z" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
      <!-- Sleeves Navy & Light Blue -->
      <path d="M 130,100 L 75,250 L 105,260 L 140,160 Z" fill="#1e293b"/>
      <path d="M 270,100 L 325,250 L 295,260 L 260,160 Z" fill="#1e293b"/>
      <!-- Body Navy Bottom -->
      <rect x="140" y="200" width="120" height="120" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <!-- Body White Center Stripe -->
      <rect x="140" y="160" width="120" height="40" fill="#ffffff" stroke="#cbd5e1"/>
      <!-- Body Light Blue Top -->
      <polygon points="140,160 260,160 240,90 160,90" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
      <!-- Kangaroo Pocket -->
      <path d="M 160,250 L 240,250 L 250,300 L 150,300 Z" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
      <!-- Ribbed Hem -->
      <rect x="140" y="310" width="120" height="15" fill="#0f172a"/>
      <!-- Emblem -->
      <circle cx="230" cy="130" r="12" fill="#ffffff" stroke="#1d4ed8" stroke-width="2"/>
      <text x="230" y="134" font-size="8" font-weight="bold" fill="#1d4ed8" text-anchor="middle">WS</text>
    </svg>
  `),

  // 10. 秋季长裤(1) (Autumn Formal Trousers)
  '秋季长裤(1)': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <path d="M 140,70 L 260,70 L 250,350 L 205,350 L 200,160 L 195,160 L 190,350 L 150,350 Z" fill="#0f172a" stroke="#020617" stroke-width="2"/>
      <!-- Waistband & Belt Loops -->
      <rect x="140" y="70" width="120" height="20" fill="#1e293b" stroke="#0f172a"/>
      <line x1="160" y1="70" x2="160" y2="90" stroke="#475569" stroke-width="3"/>
      <line x1="200" y1="70" x2="200" y2="90" stroke="#475569" stroke-width="3"/>
      <line x1="240" y1="70" x2="240" y2="90" stroke="#475569" stroke-width="3"/>
      <!-- Crease Lines -->
      <line x1="175" y1="90" x2="170" y2="340" stroke="#1e293b" stroke-width="1"/>
      <line x1="225" y1="90" x2="230" y2="340" stroke="#1e293b" stroke-width="1"/>
    </svg>
  `),

  // 11. 秋季长裤 (Autumn Track Pants)
  '秋季长裤': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <path d="M 135,65 L 265,65 L 255,350 L 205,350 L 200,160 L 195,160 L 190,350 L 145,350 Z" fill="#0f172a" stroke="#020617" stroke-width="2"/>
      <rect x="135" y="65" width="130" height="22" fill="#1e293b"/>
      <!-- Double White Side Stripe -->
      <line x1="142" y1="87" x2="152" y2="350" stroke="#ffffff" stroke-width="3"/>
      <line x1="258" y1="87" x2="248" y2="350" stroke="#ffffff" stroke-width="3"/>
    </svg>
  `),

  // 12. 夏季polo短袖 (Summer Short-Sleeve Polo)
  '夏季polo短袖': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <!-- Body Sky Blue -->
      <path d="M 135,100 L 265,100 L 260,320 L 140,320 Z" fill="#93c5fd" stroke="#3b82f6" stroke-width="2"/>
      <!-- Short Sleeves -->
      <path d="M 135,100 L 85,180 L 120,195 L 140,130 Z" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5"/>
      <path d="M 265,100 L 315,180 L 280,195 L 260,130 Z" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5"/>
      <!-- Striped Ribbed Collar -->
      <polygon points="200,100 160,70 185,100 200,120 215,100 240,70" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <line x1="165" y1="75" x2="235" y2="75" stroke="#ffffff" stroke-width="2"/>
      <!-- Placket & Buttons -->
      <rect x="193" y="115" width="14" height="45" fill="#bfdbfe" stroke="#3b82f6"/>
      <circle cx="200" cy="125" r="2.5" fill="#1e293b"/>
      <circle cx="200" cy="145" r="2.5" fill="#1e293b"/>
      <!-- Emblem -->
      <circle cx="235" cy="155" r="12" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="235" y="159" font-size="8" font-weight="bold" fill="#1d4ed8" text-anchor="middle">WS</text>
    </svg>
  `),

  // 13. 夏季polo衫 (Summer Polo Shirt)
  '夏季polo衫': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <path d="M 135,100 L 265,100 L 260,320 L 140,320 Z" fill="#bfdbfe" stroke="#60a5fa" stroke-width="2"/>
      <path d="M 135,100 L 85,180 L 120,195 L 140,130 Z" fill="#bfdbfe" stroke="#60a5fa"/>
      <path d="M 265,100 L 315,180 L 280,195 L 260,130 Z" fill="#bfdbfe" stroke="#60a5fa"/>
      <polygon points="200,100 160,70 185,100 200,120 215,100 240,70" fill="#1e293b"/>
      <rect x="193" y="115" width="14" height="45" fill="#93c5fd"/>
      <circle cx="200" cy="125" r="2.5" fill="#1e293b"/>
      <circle cx="200" cy="145" r="2.5" fill="#1e293b"/>
      <circle cx="235" cy="155" r="12" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="235" y="159" font-size="8" font-weight="bold" fill="#1d4ed8" text-anchor="middle">WS</text>
    </svg>
  `),

  // 14. 夏季polo长袖 (Summer Long-Sleeve Polo)
  '夏季polo长袖': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <path d="M 135,100 L 265,100 L 260,320 L 140,320 Z" fill="#93c5fd" stroke="#3b82f6" stroke-width="2"/>
      <!-- Long Sleeves -->
      <path d="M 135,100 L 80,270 L 115,280 L 140,140 Z" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5"/>
      <path d="M 265,100 L 320,270 L 285,280 L 260,140 Z" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5"/>
      <!-- Striped Cuffs -->
      <rect x="80" y="265" width="35" height="15" fill="#1e293b"/>
      <rect x="285" y="265" width="35" height="15" fill="#1e293b"/>
      <polygon points="200,100 160,70 185,100 200,120 215,100 240,70" fill="#1e293b"/>
      <rect x="193" y="115" width="14" height="45" fill="#bfdbfe"/>
      <circle cx="235" cy="155" r="12" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.5"/>
      <text x="235" y="159" font-size="8" font-weight="bold" fill="#1d4ed8" text-anchor="middle">WS</text>
    </svg>
  `),

  // 15. 夏季短裙 (Summer Plaid Skirt)
  '夏季短裙': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <path d="M 140,90 L 260,90 L 290,320 L 110,320 Z" fill="#93c5fd" stroke="#3b82f6" stroke-width="2"/>
      <path d="M 140,90 L 110,320 M 170,90 L 155,320 M 200,90 L 200,320 M 230,90 L 245,320 M 260,90 L 290,320" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="130" y1="160" x2="270" y2="160" stroke="#ffffff" stroke-width="3"/>
      <line x1="120" y1="230" x2="280" y2="230" stroke="#1e293b" stroke-width="2"/>
      <rect x="140" y="80" width="120" height="18" fill="#1e293b"/>
    </svg>
  `),

  // 16. 夏季运动短裤 (Summer Sports Shorts)
  '夏季运动短裤': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <path d="M 130,110 L 270,110 L 265,280 L 205,280 L 200,180 L 195,180 L 195,280 L 135,280 Z" fill="#0f172a" stroke="#020617" stroke-width="2"/>
      <rect x="130" y="110" width="140" height="25" fill="#1e293b"/>
      <!-- Sky Blue Side Stripes -->
      <line x1="135" y1="135" x2="140" y2="280" stroke="#93c5fd" stroke-width="6"/>
      <line x1="265" y1="135" x2="260" y2="280" stroke="#93c5fd" stroke-width="6"/>
    </svg>
  `),

  // 17. 夏季运动短裙 (Summer Sports Skirt)
  '夏季运动短裙': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <path d="M 140,110 L 260,110 L 280,280 L 120,280 Z" fill="#0f172a" stroke="#020617" stroke-width="2"/>
      <rect x="140" y="100" width="120" height="20" rx="3" fill="#1e293b"/>
      <line x1="130" y1="270" x2="270" y2="270" stroke="#93c5fd" stroke-width="3"/>
    </svg>
  `),

  // 18. 夏季运动短袖 (Summer Sports Short-Sleeve T-Shirt)
  '夏季运动短袖': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
      <rect width="400" height="400" fill="#ffffff"/>
      <!-- Main Body Navy -->
      <path d="M 135,110 L 265,110 L 260,320 L 140,320 Z" fill="#0f172a" stroke="#020617" stroke-width="2"/>
      <!-- Sky Blue Raglan Sleeves -->
      <path d="M 135,110 L 80,180 L 115,195 L 155,110 Z" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5"/>
      <path d="M 265,110 L 320,180 L 285,195 L 245,110 Z" fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5"/>
      <!-- Crew Neck -->
      <path d="M 170,110 C 170,130 230,130 230,110 Z" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <!-- Round Emblem -->
      <circle cx="235" cy="160" r="12" fill="#ffffff" stroke="#1d4ed8" stroke-width="2"/>
      <text x="235" y="164" font-size="8" font-weight="bold" fill="#1d4ed8" text-anchor="middle">WS</text>
    </svg>
  `),
};
