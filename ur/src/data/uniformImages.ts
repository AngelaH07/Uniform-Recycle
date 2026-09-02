// Precision SVG vector renderings matching the school uniform garment collection

const wrapSvg = (content: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
      <rect width="600" height="600" fill="#ffffff" />
      <g stroke="#1e293b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        ${content}
      </g>
    </svg>`
  )}`;

// Helper badge SVG
const roundCrest = (cx: number, cy: number, r: number = 18) => `
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffffff" stroke="#3730a3" stroke-width="2.5" />
  <circle cx="${cx}" cy="${cy}" r="${r - 4}" fill="#3730a3" opacity="0.15" stroke="none" />
  <circle cx="${cx}" cy="${cy}" r="${r - 6}" fill="none" stroke="#3730a3" stroke-width="1.5" stroke-dasharray="2,2" />
  <text x="${cx}" y="${cy + 4}" font-size="9" font-weight="900" text-anchor="middle" fill="#3730a3" font-family="system-ui, sans-serif">WS</text>
`;

const shieldCrest = (cx: number, cy: number) => `
  <path d="M ${cx - 12} ${cy - 14} L ${cx + 12} ${cy - 14} L ${cx + 12} ${cy + 2} Q ${cx + 12} ${cy + 14} ${cx} ${cy + 18} Q ${cx - 12} ${cy + 14} ${cx - 12} ${cy + 2} Z" fill="#ffffff" stroke="#2563eb" stroke-width="2" />
  <path d="M ${cx} ${cy - 14} L ${cx} ${cy + 17}" stroke="#2563eb" stroke-width="1.5" />
  <path d="M ${cx - 12} ${cy - 3} L ${cx + 12} ${cy - 3}" stroke="#2563eb" stroke-width="1.5" />
  <circle cx="${cx - 5}" cy="${cy - 8}" r="2" fill="#2563eb" />
  <circle cx="${cx + 5}" cy="${cy + 6}" r="2" fill="#2563eb" />
`;

export const UNIFORM_PHOTOS: Record<string, string> = {
  // 1. 春季外套: Sky blue top, white middle band, navy lower torso & sleeves, zip collar & badge
  '春季外套': wrapSvg(`
    <!-- Sleeves -->
    <path d="M 215 155 L 120 340 Q 115 355 125 365 L 155 365 L 205 250 L 200 440" fill="#1c2b4a" />
    <path d="M 385 155 L 480 340 Q 485 355 475 365 L 445 365 L 395 250 L 400 440" fill="#1c2b4a" />
    <!-- Sleeve Cuffs -->
    <rect x="120" y="350" width="38" height="22" rx="4" fill="#15223c" />
    <rect x="442" y="350" width="38" height="22" rx="4" fill="#15223c" />
    <!-- Body Base (Navy) -->
    <path d="M 200 170 L 400 170 L 415 450 L 185 450 Z" fill="#1c2b4a" />
    <!-- White Middle Band -->
    <path d="M 192 230 L 408 230 L 410 275 L 190 275 Z" fill="#ffffff" />
    <!-- Sky Blue Top Yoke -->
    <path d="M 250 115 L 350 115 L 405 170 L 408 230 L 192 230 L 195 170 Z" fill="#9dc0e2" />
    <!-- Stand Collar -->
    <path d="M 250 115 L 350 115 L 355 160 L 245 160 Z" fill="#9dc0e2" />
    <!-- Collar Top Rim -->
    <path d="M 245 115 Q 300 125 355 115" fill="none" stroke="#1e293b" stroke-width="2.5" />
    <!-- Ribbed Hem -->
    <rect x="185" y="445" width="230" height="35" rx="6" fill="#15223c" />
    <line x1="210" y1="445" x2="210" y2="480" stroke="#2a3c60" stroke-width="2" />
    <line x1="240" y1="445" x2="240" y2="480" stroke="#2a3c60" stroke-width="2" />
    <line x1="270" y1="445" x2="270" y2="480" stroke="#2a3c60" stroke-width="2" />
    <line x1="330" y1="445" x2="330" y2="480" stroke="#2a3c60" stroke-width="2" />
    <line x1="360" y1="445" x2="360" y2="480" stroke="#2a3c60" stroke-width="2" />
    <line x1="390" y1="445" x2="390" y2="480" stroke="#2a3c60" stroke-width="2" />
    <!-- Center Zipper -->
    <line x1="300" y1="115" x2="300" y2="480" stroke="#1e293b" stroke-width="3" stroke-dasharray="3,2" />
    <!-- Zip Pull -->
    <rect x="296" y="125" width="8" height="15" rx="2" fill="#e2e8f0" stroke="#1e293b" stroke-width="1.5" />
    <!-- Emblem -->
    ${roundCrest(350, 252, 14)}
  `),

  // 2. 冬季冲锋衣: Hooded winter parka with sky blue body & hood, navy shoulders & flaps
  '冬季冲锋衣': wrapSvg(`
    <!-- Hood -->
    <path d="M 235 150 Q 230 65 300 65 Q 370 65 365 150 Z" fill="#9dc0e2" />
    <path d="M 260 145 Q 260 100 300 100 Q 340 100 340 145 Z" fill="#1c2b48" />
    <!-- Sleeves -->
    <path d="M 210 170 L 155 420 L 195 430 L 225 320" fill="#9dc0e2" />
    <path d="M 390 170 L 445 420 L 405 430 L 375 320" fill="#9dc0e2" />
    <rect x="155" y="405" width="40" height="25" rx="4" fill="#1c2b48" />
    <rect x="405" y="405" width="40" height="25" rx="4" fill="#1c2b48" />
    <!-- Body -->
    <path d="M 215 160 L 385 160 L 400 480 L 200 480 Z" fill="#9dc0e2" />
    <!-- Navy Shoulder Panel -->
    <path d="M 215 160 L 385 160 L 390 230 L 210 230 Z" fill="#1c2b48" />
    <!-- Vertical Zip Pocket -->
    <rect x="330" y="245" width="6" height="35" rx="2" fill="#1c2b48" />
    <rect x="328" y="255" width="10" height="6" rx="1" fill="#cbd5e1" stroke="#1c2b48" />
    <!-- Emblem -->
    ${roundCrest(355, 260, 14)}
    <!-- Two Big Flap Pockets -->
    <path d="M 210 380 L 275 380 L 270 440 L 210 440 Z" fill="#9dc0e2" />
    <path d="M 208 375 L 277 375 L 275 395 L 210 395 Z" fill="#1c2b48" />
    <path d="M 325 380 L 390 380 L 390 440 L 330 440 Z" fill="#9dc0e2" />
    <path d="M 323 375 L 392 375 L 390 395 L 325 395 Z" fill="#1c2b48" />
    <!-- Center Storm Flap -->
    <rect x="290" y="150" width="20" height="330" fill="#9dc0e2" />
    <line x1="300" y1="150" x2="300" y2="480" stroke="#1c2b48" stroke-width="2" />
  `),

  // 3. 冬季长裤: Navy track pants with double white side stripes
  '冬季长裤': wrapSvg(`
    <!-- Waistband -->
    <rect x="220" y="120" width="160" height="36" rx="8" fill="#1c2946" />
    <line x1="220" y1="132" x2="380" y2="132" stroke="#2e426e" stroke-width="2" />
    <line x1="220" y1="144" x2="380" y2="144" stroke="#2e426e" stroke-width="2" />
    <!-- Legs -->
    <path d="M 220 156 L 210 490 L 275 490 L 300 240 L 325 490 L 390 490 L 380 156 Z" fill="#1c2946" />
    <!-- Left Double White Stripe -->
    <path d="M 224 156 L 214 490" stroke="#ffffff" stroke-width="4" stroke-linecap="butt" />
    <path d="M 232 156 L 222 490" stroke="#ffffff" stroke-width="4" stroke-linecap="butt" />
    <!-- Right Double White Stripe -->
    <path d="M 376 156 L 386 490" stroke="#ffffff" stroke-width="4" stroke-linecap="butt" />
    <path d="M 368 156 L 378 490" stroke="#ffffff" stroke-width="4" stroke-linecap="butt" />
    <!-- Center Inseam -->
    <line x1="300" y1="156" x2="300" y2="245" stroke="#131c30" stroke-width="2.5" />
    <!-- Leg Hems -->
    <line x1="210" y1="480" x2="275" y2="480" stroke="#2e426e" stroke-width="2" />
    <line x1="325" y1="480" x2="390" y2="480" stroke="#2e426e" stroke-width="2" />
  `),

  // 4. 礼服衬衫: White formal button-up shirt with round collar & crest
  '礼服衬衫': wrapSvg(`
    <!-- Sleeves -->
    <path d="M 220 160 L 140 380 L 180 390 L 230 260" fill="#ffffff" />
    <path d="M 380 160 L 460 380 L 420 390 L 370 260" fill="#ffffff" />
    <!-- Cuffs -->
    <rect x="140" y="375" width="40" height="22" rx="3" fill="#ffffff" stroke="#1e293b" />
    <rect x="420" y="375" width="40" height="22" rx="3" fill="#ffffff" stroke="#1e293b" />
    <!-- Shirt Body -->
    <path d="M 220 160 L 380 160 L 395 440 Q 300 465 205 440 Z" fill="#ffffff" />
    <!-- Plaid Inner Collar Accent -->
    <path d="M 260 135 Q 300 150 340 135" fill="none" stroke="#78350f" stroke-width="4" stroke-dasharray="3,2" />
    <!-- Peter Pan Rounded Collar -->
    <path d="M 300 165 Q 260 170 240 145 Q 255 125 300 135 Z" fill="#ffffff" stroke="#1e293b" stroke-width="2.5" />
    <path d="M 300 165 Q 340 170 360 145 Q 345 125 300 135 Z" fill="#ffffff" stroke="#1e293b" stroke-width="2.5" />
    <!-- Front Placket -->
    <rect x="290" y="165" width="20" height="280" fill="#ffffff" stroke="#1e293b" stroke-width="2" />
    <!-- Buttons -->
    <circle cx="300" cy="195" r="3.5" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5" />
    <circle cx="300" cy="240" r="3.5" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5" />
    <circle cx="300" cy="285" r="3.5" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5" />
    <circle cx="300" cy="330" r="3.5" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5" />
    <circle cx="300" cy="375" r="3.5" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5" />
    <circle cx="300" cy="420" r="3.5" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5" />
    <!-- Crest -->
    ${roundCrest(350, 235, 14)}
  `),

  // 5. 礼服短裙: Tartan pleated formal skirt
  '礼服短裙': wrapSvg(`
    <!-- Tartan Pattern Def -->
    <defs>
      <pattern id="tartan1" width="36" height="36" patternUnits="userSpaceOnUse">
        <rect width="36" height="36" fill="#6ba2cd" />
        <rect x="0" y="0" width="36" height="14" fill="#1c2b48" opacity="0.85" />
        <rect x="0" y="0" width="14" height="36" fill="#1c2b48" opacity="0.85" />
        <line x1="0" y1="18" x2="36" y2="18" stroke="#ffffff" stroke-width="2" />
        <line x1="18" y1="0" x2="18" y2="36" stroke="#ffffff" stroke-width="2" />
        <line x1="0" y1="28" x2="36" y2="28" stroke="#000000" stroke-width="1.5" />
        <line x1="28" y1="0" x2="28" y2="36" stroke="#000000" stroke-width="1.5" />
      </pattern>
    </defs>
    <!-- Waistband -->
    <rect x="200" y="140" width="200" height="30" rx="4" fill="url(#tartan1)" />
    <!-- Skirt Body -->
    <path d="M 200 170 L 165 440 L 435 440 L 400 170 Z" fill="url(#tartan1)" />
    <!-- Pleat Fold Shadow Lines -->
    <line x1="185" y1="170" x2="190" y2="440" stroke="#0f172a" stroke-width="2.5" />
    <line x1="215" y1="170" x2="225" y2="440" stroke="#0f172a" stroke-width="2.5" />
    <line x1="245" y1="170" x2="260" y2="440" stroke="#0f172a" stroke-width="2.5" />
    <line x1="275" y1="170" x2="295" y2="440" stroke="#0f172a" stroke-width="2.5" />
    <line x1="305" y1="170" x2="330" y2="440" stroke="#0f172a" stroke-width="2.5" />
    <line x1="335" y1="170" x2="365" y2="440" stroke="#0f172a" stroke-width="2.5" />
    <line x1="365" y1="170" x2="400" y2="440" stroke="#0f172a" stroke-width="2.5" />
    <!-- Side Buckle -->
    <rect x="210" y="145" width="16" height="20" rx="2" fill="#cbd5e1" stroke="#1e293b" />
  `),

  // 6. 礼服西装外套: Midnight navy formal blazer with notch lapel & 2 buttons
  '礼服西装外套': wrapSvg(`
    <!-- Sleeves -->
    <path d="M 210 160 L 135 385 L 180 395 L 225 260" fill="#1c2946" />
    <path d="M 390 160 L 465 385 L 420 395 L 375 260" fill="#1c2946" />
    <!-- Sleeve Cuffs -->
    <line x1="140" y1="375" x2="180" y2="385" stroke="#2d406b" stroke-width="2" />
    <line x1="420" y1="385" x2="460" y2="375" stroke="#2d406b" stroke-width="2" />
    <!-- Jacket Body -->
    <path d="M 215 160 L 385 160 L 415 440 L 185 440 Z" fill="#1c2946" />
    <!-- Lapels -->
    <path d="M 255 130 L 215 160 L 270 240 L 290 230 L 300 320 L 300 130 Z" fill="#18233c" />
    <path d="M 345 130 L 385 160 L 330 240 L 310 230 L 300 320 L 300 130 Z" fill="#18233c" />
    <!-- Front Edge & Hem Curves -->
    <path d="M 300 320 L 300 440 Q 250 445 185 440" fill="none" stroke="#1e293b" stroke-width="2.5" />
    <path d="M 300 320 L 300 440 Q 350 445 415 440" fill="none" stroke="#1e293b" stroke-width="2.5" />
    <!-- Chest Pocket with Crest -->
    <rect x="340" y="210" width="45" height="4" rx="1" fill="#151e33" />
    ${roundCrest(362, 235, 12)}
    <!-- Lower Flap Pockets -->
    <rect x="200" y="340" width="55" height="25" rx="3" fill="#18233c" stroke="#1e293b" />
    <rect x="345" y="340" width="55" height="25" rx="3" fill="#18233c" stroke="#1e293b" />
    <!-- Buttons -->
    <circle cx="295" cy="330" r="5" fill="#92400e" stroke="#1e293b" stroke-width="1.5" />
    <circle cx="295" cy="370" r="5" fill="#92400e" stroke="#1e293b" stroke-width="1.5" />
  `),

  // 7. 领带(1): Girls cross bowtie / ribbon
  '领带(1)': wrapSvg(`
    <!-- Collar Band -->
    <ellipse cx="300" cy="200" rx="45" ry="50" fill="none" stroke="#1c2b48" stroke-width="6" />
    <!-- Left Ribbon Wing -->
    <path d="M 290 240 L 220 270 L 235 340 L 300 270 Z" fill="#1c2b48" />
    <path d="M 230 280 L 240 330" stroke="#89b0d6" stroke-width="6" />
    <path d="M 245 270 L 255 320" stroke="#ffffff" stroke-width="2.5" />
    <!-- Right Ribbon Wing -->
    <path d="M 310 240 L 380 270 L 365 340 L 300 270 Z" fill="#1c2b48" />
    <path d="M 370 280 L 360 330" stroke="#89b0d6" stroke-width="6" />
    <path d="M 355 270 L 345 320" stroke="#ffffff" stroke-width="2.5" />
    <!-- Center Knot -->
    <circle cx="300" cy="250" r="14" fill="#15223a" stroke="#1e293b" stroke-width="2.5" />
  `),

  // 8. 领带: Classic diagonal striped necktie
  '领带': wrapSvg(`
    <!-- Neck Loop -->
    <ellipse cx="300" cy="160" rx="30" ry="38" fill="none" stroke="#1c2b48" stroke-width="5" />
    <!-- Tie Knot -->
    <path d="M 285 180 L 315 180 L 310 215 L 290 215 Z" fill="#1c2b48" />
    <!-- Tie Body -->
    <path d="M 292 215 L 308 215 L 335 440 L 300 480 L 265 440 Z" fill="#1c2b48" />
    <!-- Diagonal Stripes -->
    <g stroke-linecap="butt">
      <!-- Sky blue wide stripes -->
      <line x1="288" y1="230" x2="312" y2="245" stroke="#89b0d6" stroke-width="8" />
      <line x1="282" y1="270" x2="318" y2="290" stroke="#89b0d6" stroke-width="10" />
      <line x1="276" y1="320" x2="324" y2="345" stroke="#89b0d6" stroke-width="12" />
      <line x1="270" y1="375" x2="330" y2="405" stroke="#89b0d6" stroke-width="12" />
      <line x1="268" y1="430" x2="325" y2="465" stroke="#89b0d6" stroke-width="10" />
      <!-- White pinstripes -->
      <line x1="286" y1="245" x2="314" y2="260" stroke="#ffffff" stroke-width="2" />
      <line x1="280" y1="295" x2="320" y2="315" stroke="#ffffff" stroke-width="2" />
      <line x1="274" y1="350" x2="326" y2="375" stroke="#ffffff" stroke-width="2.5" />
      <line x1="268" y1="405" x2="332" y2="435" stroke="#ffffff" stroke-width="2.5" />
    </g>
  `),

  // 9. 秋季卫衣: Tri-color pullover hoodie (sky blue, white, navy)
  '秋季卫衣': wrapSvg(`
    <!-- Hood -->
    <path d="M 230 145 Q 230 70 300 70 Q 370 70 370 145 Z" fill="#9dc0df" />
    <path d="M 260 145 Q 260 95 300 95 Q 340 95 340 145 Z" fill="#1c2846" />
    <!-- Sleeves (Navy & Sky Blue) -->
    <path d="M 210 160 L 120 340 Q 115 355 125 365 L 155 365 L 205 250 L 200 440" fill="#1c2846" />
    <path d="M 390 160 L 480 340 Q 485 355 475 365 L 445 365 L 395 250 L 400 440" fill="#1c2846" />
    <rect x="120" y="350" width="38" height="22" rx="4" fill="#152038" />
    <rect x="442" y="350" width="38" height="22" rx="4" fill="#152038" />
    <!-- Lower Body (Navy) -->
    <path d="M 195 260 L 405 260 L 415 440 L 185 440 Z" fill="#1c2846" />
    <!-- Middle White Stripe -->
    <path d="M 195 215 L 405 215 L 405 260 L 195 260 Z" fill="#ffffff" />
    <!-- Upper Chest (Sky Blue) -->
    <path d="M 225 140 L 375 140 L 405 215 L 195 215 Z" fill="#9dc0df" />
    <!-- Kangaroo Pocket -->
    <path d="M 225 340 L 375 340 L 390 430 L 210 430 Z" fill="#152038" />
    <!-- Ribbed Hem -->
    <rect x="185" y="440" width="230" height="35" rx="6" fill="#152038" />
    <!-- School Crest -->
    ${roundCrest(350, 238, 14)}
  `),

  // 10. 秋季长裤(1): Formal navy slacks with belt loops
  '秋季长裤(1)': wrapSvg(`
    <!-- Waistband -->
    <rect x="215" y="115" width="170" height="34" rx="4" fill="#16233f" />
    <!-- Belt Loops -->
    <rect x="225" y="115" width="5" height="34" fill="#243459" />
    <rect x="260" y="115" width="5" height="34" fill="#243459" />
    <rect x="298" y="115" width="5" height="34" fill="#243459" />
    <rect x="335" y="115" width="5" height="34" fill="#243459" />
    <rect x="370" y="115" width="5" height="34" fill="#243459" />
    <!-- Trouser Legs -->
    <path d="M 215 149 L 210 495 L 280 495 L 300 245 L 320 495 L 390 495 L 385 149 Z" fill="#16233f" />
    <!-- Fly Front Zip & Button -->
    <line x1="300" y1="149" x2="300" y2="225" stroke="#0e172a" stroke-width="2.5" />
    <circle cx="300" cy="132" r="3.5" fill="#cbd5e1" stroke="#0e172a" stroke-width="1" />
    <!-- Pressed Center Crease Lines -->
    <line x1="245" y1="180" x2="245" y2="495" stroke="#243459" stroke-width="1.5" />
    <line x1="355" y1="180" x2="355" y2="495" stroke="#243459" stroke-width="1.5" />
    <!-- Side Slant Pockets -->
    <line x1="220" y1="155" x2="240" y2="200" stroke="#0e172a" stroke-width="2" />
    <line x1="380" y1="155" x2="360" y2="200" stroke="#0e172a" stroke-width="2" />
  `),

  // 11. 秋季长裤: Track pants with light blue side stripes
  '秋季长裤': wrapSvg(`
    <!-- Waistband -->
    <rect x="220" y="120" width="160" height="36" rx="8" fill="#1c2946" />
    <line x1="220" y1="132" x2="380" y2="132" stroke="#2e426e" stroke-width="2" />
    <line x1="220" y1="144" x2="380" y2="144" stroke="#2e426e" stroke-width="2" />
    <!-- Legs -->
    <path d="M 220 156 L 210 490 L 275 490 L 300 240 L 325 490 L 390 490 L 380 156 Z" fill="#1c2946" />
    <!-- Light Blue Double Stripes -->
    <path d="M 224 156 L 214 490" stroke="#89b0d6" stroke-width="4" stroke-linecap="butt" />
    <path d="M 232 156 L 222 490" stroke="#ffffff" stroke-width="4" stroke-linecap="butt" />
    <path d="M 376 156 L 386 490" stroke="#89b0d6" stroke-width="4" stroke-linecap="butt" />
    <path d="M 368 156 L 378 490" stroke="#ffffff" stroke-width="4" stroke-linecap="butt" />
    <!-- Center Inseam -->
    <line x1="300" y1="156" x2="300" y2="245" stroke="#131c30" stroke-width="2.5" />
  `),

  // 12. 夏季polo短袖: Sky blue polo shirt with striped collar & shield crest
  '夏季polo短袖': wrapSvg(`
    <!-- Sleeves -->
    <path d="M 230 140 L 140 250 L 195 285 L 235 220" fill="#98bde2" />
    <path d="M 370 140 L 460 250 L 405 285 L 365 220" fill="#98bde2" />
    <!-- Sleeve Striped Rib Cuffs -->
    <path d="M 140 250 L 195 285" stroke="#1c2846" stroke-width="6" stroke-linecap="butt" />
    <path d="M 142 250 L 193 283" stroke="#ffffff" stroke-width="2" stroke-linecap="butt" />
    <path d="M 460 250 L 405 285" stroke="#1c2846" stroke-width="6" stroke-linecap="butt" />
    <path d="M 458 250 L 407 283" stroke="#ffffff" stroke-width="2" stroke-linecap="butt" />
    <!-- Polo Body -->
    <path d="M 230 140 L 370 140 L 390 440 L 210 440 Z" fill="#98bde2" />
    <!-- Striped Polo Collar -->
    <path d="M 255 140 L 235 190 L 290 190 L 300 150 L 255 140 Z" fill="#98bde2" />
    <path d="M 345 140 L 365 190 L 310 190 L 300 150 L 345 140 Z" fill="#98bde2" />
    <path d="M 235 190 L 255 140 Q 300 130 345 140 L 365 190" fill="none" stroke="#1c2846" stroke-width="5" />
    <path d="M 237 190 L 255 142 Q 300 132 345 142 L 363 190" fill="none" stroke="#ffffff" stroke-width="2" />
    <!-- Placket & Buttons -->
    <rect x="290" y="150" width="20" height="90" fill="#98bde2" stroke="#1e293b" />
    <circle cx="300" cy="175" r="3" fill="#ffffff" stroke="#1e293b" />
    <circle cx="300" cy="215" r="3" fill="#ffffff" stroke="#1e293b" />
    <!-- Shield Crest -->
    ${shieldCrest(348, 225)}
  `),

  // 13. 夏季polo衫: Classic sky blue polo
  '夏季polo衫': wrapSvg(`
    <!-- Sleeves -->
    <path d="M 230 140 L 140 250 L 195 285 L 235 220" fill="#98bde2" />
    <path d="M 370 140 L 460 250 L 405 285 L 365 220" fill="#98bde2" />
    <!-- Sleeve Cuffs -->
    <path d="M 140 250 L 195 285" stroke="#1c2846" stroke-width="6" stroke-linecap="butt" />
    <path d="M 460 250 L 405 285" stroke="#1c2846" stroke-width="6" stroke-linecap="butt" />
    <!-- Body -->
    <path d="M 230 140 L 370 140 L 390 440 L 210 440 Z" fill="#98bde2" />
    <!-- Striped Collar -->
    <path d="M 255 140 L 235 190 L 290 190 L 300 150 L 255 140 Z" fill="#98bde2" />
    <path d="M 345 140 L 365 190 L 310 190 L 300 150 L 345 140 Z" fill="#98bde2" />
    <path d="M 235 190 L 255 140 Q 300 130 345 140 L 365 190" fill="none" stroke="#1c2846" stroke-width="5" />
    <path d="M 237 190 L 255 142 Q 300 132 345 142 L 363 190" fill="none" stroke="#ffffff" stroke-width="2" />
    <!-- Placket & Buttons -->
    <rect x="290" y="150" width="20" height="90" fill="#98bde2" stroke="#1e293b" />
    <circle cx="300" cy="175" r="3" fill="#ffffff" stroke="#1e293b" />
    <circle cx="300" cy="215" r="3" fill="#ffffff" stroke="#1e293b" />
    <!-- Shield Crest -->
    ${shieldCrest(348, 225)}
  `),

  // 14. 夏季polo长袖: Long sleeve sky blue polo
  '夏季polo长袖': wrapSvg(`
    <!-- Long Sleeves -->
    <path d="M 225 145 L 150 390 L 190 400 L 230 250" fill="#98bde2" />
    <path d="M 375 145 L 450 390 L 410 400 L 370 250" fill="#98bde2" />
    <!-- Ribbed Cuffs -->
    <rect x="150" y="385" width="40" height="25" rx="3" fill="#98bde2" stroke="#1e293b" />
    <line x1="150" y1="395" x2="190" y2="405" stroke="#1c2846" stroke-width="4" />
    <rect x="410" y="385" width="40" height="25" rx="3" fill="#98bde2" stroke="#1e293b" />
    <line x1="410" y1="405" x2="450" y2="395" stroke="#1c2846" stroke-width="4" />
    <!-- Body -->
    <path d="M 225 145 L 375 145 L 395 440 L 205 440 Z" fill="#98bde2" />
    <!-- Collar -->
    <path d="M 255 140 L 235 190 L 290 190 L 300 150 L 255 140 Z" fill="#98bde2" />
    <path d="M 345 140 L 365 190 L 310 190 L 300 150 L 345 140 Z" fill="#98bde2" />
    <path d="M 235 190 L 255 140 Q 300 130 345 140 L 365 190" fill="none" stroke="#1c2846" stroke-width="5" />
    <path d="M 237 190 L 255 142 Q 300 132 345 142 L 363 190" fill="none" stroke="#ffffff" stroke-width="2" />
    <!-- Placket -->
    <rect x="290" y="150" width="20" height="90" fill="#98bde2" stroke="#1e293b" />
    <circle cx="300" cy="175" r="3" fill="#ffffff" stroke="#1e293b" />
    <circle cx="300" cy="215" r="3" fill="#ffffff" stroke="#1e293b" />
    <!-- Emblem -->
    ${roundCrest(350, 230, 14)}
  `),

  // 15. 夏季短裙: Plaid summer pleated skirt
  '夏季短裙': wrapSvg(`
    <!-- Tartan Pattern Def -->
    <defs>
      <pattern id="summerTartan" width="36" height="36" patternUnits="userSpaceOnUse">
        <rect width="36" height="36" fill="#7baed4" />
        <rect x="0" y="0" width="36" height="12" fill="#1c2b48" opacity="0.85" />
        <rect x="0" y="0" width="12" height="36" fill="#1c2b48" opacity="0.85" />
        <line x1="0" y1="18" x2="36" y2="18" stroke="#ffffff" stroke-width="2" />
        <line x1="18" y1="0" x2="18" y2="36" stroke="#ffffff" stroke-width="2" />
      </pattern>
    </defs>
    <!-- Waistband -->
    <rect x="200" y="140" width="200" height="30" rx="4" fill="url(#summerTartan)" />
    <!-- Skirt Body -->
    <path d="M 200 170 L 165 440 L 435 440 L 400 170 Z" fill="url(#summerTartan)" />
    <!-- Pleats -->
    <line x1="185" y1="170" x2="190" y2="440" stroke="#0f172a" stroke-width="2.5" />
    <line x1="215" y1="170" x2="225" y2="440" stroke="#0f172a" stroke-width="2.5" />
    <line x1="245" y1="170" x2="260" y2="440" stroke="#0f172a" stroke-width="2.5" />
    <line x1="275" y1="170" x2="295" y2="440" stroke="#0f172a" stroke-width="2.5" />
    <line x1="305" y1="170" x2="330" y2="440" stroke="#0f172a" stroke-width="2.5" />
    <line x1="335" y1="170" x2="365" y2="440" stroke="#0f172a" stroke-width="2.5" />
    <line x1="365" y1="170" x2="400" y2="440" stroke="#0f172a" stroke-width="2.5" />
    <rect x="210" y="145" width="16" height="20" rx="2" fill="#cbd5e1" stroke="#1e293b" />
  `),

  // 16. 夏季运动短裤: Navy shorts with sky blue vertical side panels
  '夏季运动短裤': wrapSvg(`
    <!-- Waistband -->
    <rect x="220" y="150" width="160" height="36" rx="6" fill="#172648" />
    <line x1="220" y1="162" x2="380" y2="162" stroke="#2a3f6d" stroke-width="2" />
    <line x1="220" y1="174" x2="380" y2="174" stroke="#2a3f6d" stroke-width="2" />
    <!-- Shorts Body -->
    <path d="M 220 186 L 205 440 L 285 440 L 300 280 L 315 440 L 395 440 L 380 186 Z" fill="#172648" />
    <!-- Sky Blue Side Panels -->
    <path d="M 220 186 L 205 440 L 225 440 L 235 186 Z" fill="#90b5db" />
    <path d="M 380 186 L 395 440 L 375 440 L 365 186 Z" fill="#90b5db" />
    <!-- Inseam -->
    <line x1="300" y1="186" x2="300" y2="285" stroke="#0e172a" stroke-width="2.5" />
  `),

  // 17. 夏季运动短裙: Athletic navy sports skort / skirt
  '夏季运动短裙': wrapSvg(`
    <!-- Ribbed Waistband -->
    <rect x="205" y="150" width="190" height="38" rx="6" fill="#14203d" />
    <line x1="205" y1="163" x2="395" y2="163" stroke="#2a3d6a" stroke-width="2" />
    <line x1="205" y1="176" x2="395" y2="176" stroke="#2a3d6a" stroke-width="2" />
    <!-- Skort Flared Body -->
    <path d="M 205 188 L 160 440 L 440 440 L 395 188 Z" fill="#14203d" />
    <!-- Athletic Seam Stitching Accents -->
    <path d="M 240 188 L 210 440" stroke="#243459" stroke-width="2" stroke-dasharray="4,3" />
    <path d="M 360 188 L 390 440" stroke="#243459" stroke-width="2" stroke-dasharray="4,3" />
  `),

  // 18. 夏季运动短袖: Navy athletic T-shirt with sky blue raglan sleeves & side panels
  '夏季运动短袖': wrapSvg(`
    <!-- Sleeves (Sky Blue Raglan) -->
    <path d="M 240 140 L 140 250 L 195 285 L 245 200" fill="#90b5db" />
    <path d="M 360 140 L 460 250 L 405 285 L 355 200" fill="#90b5db" />
    <!-- Sky Blue Side Ventilation Panels -->
    <path d="M 220 230 L 195 440 L 225 440 L 240 230 Z" fill="#90b5db" />
    <path d="M 380 230 L 405 440 L 375 440 L 360 230 Z" fill="#90b5db" />
    <!-- Navy Body -->
    <path d="M 240 140 L 360 140 L 380 440 L 220 440 Z" fill="#162340" />
    <!-- Crewneck Collar Band -->
    <path d="M 255 130 Q 300 155 345 130" fill="none" stroke="#162340" stroke-width="12" />
    <path d="M 255 130 Q 300 155 345 130" fill="none" stroke="#90b5db" stroke-width="4" />
    <!-- Left Chest Round Crest -->
    ${roundCrest(350, 230, 14)}
  `)
};
