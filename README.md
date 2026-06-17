# Portfolio Sayt

Sof **HTML, CSS va JavaScript** bilan qurilgan shaxsiy portfolio sayt. Hech qanday framework yoki kutubxonasiz — frontend asoslarini mashq qilish maqsadida yaratilgan.

🔗 **Jonli demo:** _(GitHub Pages havolasini shu yerga qo'shing)_

## Skrinshot

_(Sayt skrinshotini shu yerga qo'shing — masalan `screenshot.png` faylini yuklab, quyidagicha bog'lang)_

```
![Sayt skrinshoti](screenshot.png)
```

## Saytda nima bor

- **Hero bo'lim** — ism harf-harf "yoziladigan" animatsiya va kod-uslubidagi tanishtiruv kartasi
- **Men haqimda** — qisqa tarjimai hol va o'rganish yo'lim (timeline)
- **Loyihalar** — qilingan ishlar namunalari, texnologiya teglari va havolalar bilan
- **Ko'nikmalar** — har bir texnologiya bo'yicha animatsiyali progress-bar
- **Aloqa** — forma (demo rejimida) va ijtimoiy tarmoq havolalari
- **Dark / Light mavzu** — almashtirish tugmasi, tanlov brauzerda saqlanadi
- To'liq **responsiv** dizayn — mobil qurilmalarda ham yaxshi ko'rinadi

## Texnologiyalar

| Texnologiya | Vazifasi |
|---|---|
| HTML5 | Sahifa strukturasi |
| CSS3 | Dizayn, animatsiya, responsiv layout (Grid/Flexbox) |
| JavaScript (vanilla) | Interaktivlik: tema almashtirish, scroll-animatsiya, forma |

## Fayllar tuzilishi

```
portfolio/
├── index.html      # Sahifa strukturasi va matn
├── style.css       # Barcha dizayn va animatsiyalar
├── script.js       # Interaktiv funksiyalar
└── README.md       # Shu fayl
```

## Lokal ishga tushirish

Hech qanday o'rnatish kerak emas — shunchaki `index.html` faylini brauzerda oching:

```bash
git clone https://github.com/SIZNING_USERNAME/portfolio.git
cd portfolio
```

Keyin `index.html`'ni ikki marta bosing, yoki VS Code'da "Live Server" kengaytmasi bilan oching.

## O'zingizga moslashtirish

1. `index.html` ichida ism, tarjimai hol, loyihalar va aloqa ma'lumotlarini o'zgartiring
2. `.card__media` qismidagi emojilarni haqiqiy loyiha skrinshotlariga almashtiring
3. `style.css` ichidagi `:root` bo'limida ranglarni o'zingizga moslang
4. Loyiha havolalarini (`#`) haqiqiy GitHub/demo manzillariga almashtiring

## Joylashtirish (Deploy)

Sayt GitHub Pages orqali bepul joylashtiriladi:

1. Repository **Settings → Pages** bo'limiga o'ting
2. **Source** qismida `main` branch'ni tanlang
3. Bir necha daqiqadan so'ng sayt shu manzilda jonli bo'ladi:
   `https://SIZNING_USERNAME.github.io/portfolio/`

## Muallif

**Ofoq Boboxonov** — Web Developer
- GitHub: [@username](https://github.com/username)
- Telegram: [@username](https://t.me/username)
- Email: ofoq@example.com

---

_Bu loyiha frontend asoslarini (HTML, CSS, JavaScript) amalda mashq qilish maqsadida yaratilgan._
