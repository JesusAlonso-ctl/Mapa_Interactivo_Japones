/* =========================================================
   にほん ちず — datos y lógica del mapa interactivo
   ========================================================= */

/*
  Cómo agregar o cambiar un lugar:
  - x, y: posición del pin sobre la imagen de 1024 × 1024 px
          (x = horizontal, y = vertical, medidos desde la esquina superior izquierda).
  - La imagen del lugar va en:  img/sitios/<id>.jpg
    (si no existe, se muestra img/placeholder.svg)
*/

const REGIONES = {
  hokkaido: { kana: 'ほっかいどう ちほう', es: 'Región de Hokkaido' },
  tohoku:   { kana: 'とうほく ちほう',     es: 'Región de Tohoku' },
  kanto:    { kana: 'かんとう ちほう',     es: 'Región de Kanto' },
  chubu:    { kana: 'ちゅうぶ ちほう',     es: 'Región de Chubu' },
  kansai:   { kana: 'かんさい ちほう',     es: 'Región de Kansai' },
  chugoku:  { kana: 'ちゅうごく ちほう',   es: 'Región de Chugoku' },
  shikoku:  { kana: 'しこく ちほう',       es: 'Región de Shikoku' },
  kyushu:   { kana: 'きゅうしゅう・おきなわ ちほう', es: 'Región de Kyushu y Okinawa' }
};

const LUGARES = [
  // ---------- Hokkaido ----------
  {
    id: 'sapporo', region: REGIONES.hokkaido,
    ciudad: { kana: 'さっぽろ', romaji: 'Sapporo', tipo: 'Ciudad' },
    sitio: { kana: 'おおどおり こうえん', romaji: 'Ōdōri kōen', es: 'Parque' },
    x: 705, y: 130
  },
  {
    id: 'hakodate', region: REGIONES.hokkaido,
    ciudad: { kana: 'はこだて', romaji: 'Hakodate', tipo: 'Ciudad' },
    sitio: { kana: 'ごりょうかく', romaji: 'Goryōkaku', es: 'Fuerte en forma de estrella' },
    x: 655, y: 265
  },

  // ---------- Tohoku ----------
  {
    id: 'aomori', region: REGIONES.tohoku,
    ciudad: { kana: 'あおもり', romaji: 'Aomori', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'ひろさきじょう', romaji: 'Hirosakijō', es: 'Castillo' },
    x: 665, y: 325
  },
  {
    id: 'akita', region: REGIONES.tohoku,
    ciudad: { kana: 'あきた', romaji: 'Akita', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'かくのだて ぶけやしき', romaji: 'Kakunodate bukeyashiki', es: 'Distrito de samuráis' },
    x: 640, y: 410
  },
  {
    id: 'morioka', region: REGIONES.tohoku,
    ciudad: { kana: 'もりおか', romaji: 'Morioka', tipo: 'Ciudad' },
    sitio: { kana: 'もりおかじょうあと こうえん', romaji: 'Moriokajōato kōen', es: 'Parque de las ruinas del castillo' },
    x: 705, y: 395
  },
  {
    id: 'yamagata', region: REGIONES.tohoku,
    ciudad: { kana: 'やまがた', romaji: 'Yamagata', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'やまでら', romaji: 'Yamadera', es: 'Templo en la montaña' },
    x: 668, y: 475
  },
  {
    id: 'sendai', region: REGIONES.tohoku,
    ciudad: { kana: 'せんだい', romaji: 'Sendai', tipo: 'Ciudad' },
    sitio: { kana: 'ずいほうでん', romaji: 'Zuihōden', es: 'Mausoleo' },
    x: 712, y: 505
  },
  {
    id: 'fukushima', region: REGIONES.tohoku,
    ciudad: { kana: 'ふくしま', romaji: 'Fukushima', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'つるがじょう', romaji: 'Tsurugajō', es: 'Castillo' },
    x: 675, y: 560
  },

  // ---------- Kanto ----------
  {
    id: 'nikko', region: REGIONES.kanto,
    ciudad: { kana: 'にっこう', romaji: 'Nikkō', tipo: 'Ciudad' },
    sitio: { kana: 'にっこう とうしょうぐう', romaji: 'Nikkō Tōshōgū', es: 'Santuario sintoísta' },
    x: 640, y: 600
  },
  {
    id: 'tokyo', region: REGIONES.kanto,
    ciudad: { kana: 'とうきょう', romaji: 'Tōkyō', tipo: 'Capital / Metrópolis' },
    sitio: { kana: 'とうきょう タワー', romaji: 'Tōkyō tawā', es: 'Torre de comunicaciones' },
    x: 668, y: 648
  },
  {
    id: 'kamakura', region: REGIONES.kanto,
    ciudad: { kana: 'かまくら', romaji: 'Kamakura', tipo: 'Ciudad' },
    sitio: { kana: 'かまくら だいぶつ', romaji: 'Kamakura Daibutsu', es: 'Estatua gigante de Buda' },
    x: 690, y: 690
  },

  // ---------- Chubu ----------
  {
    id: 'niigata', region: REGIONES.chubu,
    ciudad: { kana: 'にいがた', romaji: 'Niigata', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'さどがしま', romaji: 'Sadogashima', es: 'Isla' },
    x: 606, y: 560
  },
  {
    id: 'kanazawa', region: REGIONES.chubu,
    ciudad: { kana: 'かなざわ', romaji: 'Kanazawa', tipo: 'Ciudad' },
    sitio: { kana: 'けんろくえん', romaji: 'Kenrokuen', es: 'Jardín tradicional' },
    x: 522, y: 580
  },
  {
    id: 'shirakawago', region: REGIONES.chubu,
    ciudad: { kana: 'しらかわごう', romaji: 'Shirakawagō', tipo: 'Aldea histórica' },
    sitio: { kana: 'がっしょうづくり みんかえん', romaji: 'Gasshō-zukuri Minkaen', es: 'Museo al aire libre de casas tradicionales' },
    x: 585, y: 625
  },
  {
    id: 'takayama', region: REGIONES.chubu,
    ciudad: { kana: 'たかやま', romaji: 'Takayama', tipo: 'Ciudad' },
    sitio: { kana: 'さんまち すじ', romaji: 'Sanmachi Suji', es: 'Casco antiguo' },
    x: 566, y: 655
  },
  {
    id: 'nagoya', region: REGIONES.chubu,
    ciudad: { kana: 'なごや', romaji: 'Nagoya', tipo: 'Ciudad' },
    sitio: { kana: 'なごやじょう', romaji: 'Nagoyajō', es: 'Castillo' },
    x: 575, y: 700
  },

  // ---------- Kansai ----------
  {
    id: 'kyoto', region: REGIONES.kansai,
    ciudad: { kana: 'きょうと', romaji: 'Kyōto', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'ふしみ いなり たいしゃ', romaji: 'Fushimi Inari Taisha', es: 'Santuario de los mil torii' },
    x: 452, y: 700
  },
  {
    id: 'osaka', region: REGIONES.kansai,
    ciudad: { kana: 'おおさか', romaji: 'Ōsaka', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'どうとんぼり', romaji: 'Dōtonbori', es: 'Barrio comercial y gastronómico' },
    x: 440, y: 735
  },
  {
    id: 'himeji', region: REGIONES.kansai,
    ciudad: { kana: 'ひめじ', romaji: 'Himeji', tipo: 'Ciudad' },
    sitio: { kana: 'ひめじじょう', romaji: 'Himejijō', es: 'Castillo' },
    x: 412, y: 735
  },
  {
    id: 'koyasan', region: REGIONES.kansai,
    ciudad: { kana: 'こうやさん', romaji: 'Kōyasan', tipo: 'Monte / Complejo de templos' },
    sitio: { kana: 'こんごうぶじ', romaji: 'Kongōbuji', es: 'Templo budista' },
    x: 465, y: 772
  },

  // ---------- Chugoku ----------
  {
    id: 'tottori', region: REGIONES.chugoku,
    ciudad: { kana: 'とっとり', romaji: 'Tottori', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'とっとり さきゅう', romaji: 'Tottori sakyū', es: 'Dunas de arena' },
    x: 362, y: 712
  },
  {
    id: 'matsue', region: REGIONES.chugoku,
    ciudad: { kana: 'まつえ', romaji: 'Matsue', tipo: 'Ciudad' },
    sitio: { kana: 'まつえじょう', romaji: 'Matsuejō', es: 'Castillo' },
    x: 300, y: 735
  },
  {
    id: 'hiroshima', region: REGIONES.chugoku,
    ciudad: { kana: 'ひろしま', romaji: 'Hiroshima', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'げんばく ドーム', romaji: 'Genbaku dōmu', es: 'Monumento conmemorativo' },
    x: 345, y: 752
  },
  {
    id: 'miyajima', region: REGIONES.chugoku,
    ciudad: { kana: 'みやじま', romaji: 'Miyajima', tipo: 'Isla' },
    sitio: { kana: 'いつくしま じんじゃ', romaji: 'Itsukushima jinja', es: 'Santuario sintoísta' },
    x: 322, y: 775
  },

  // ---------- Shikoku ----------
  {
    id: 'takamatsu', region: REGIONES.shikoku,
    ciudad: { kana: 'たかまつ', romaji: 'Takamatsu', tipo: 'Ciudad' },
    sitio: { kana: 'りつりん こうえん', romaji: 'Ritsurin kōen', es: 'Jardín tradicional' },
    x: 375, y: 790
  },
  {
    id: 'tokushima', region: REGIONES.shikoku,
    ciudad: { kana: 'とくしま', romaji: 'Tokushima', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'なるとの うずしお', romaji: 'Naruto no uzushio', es: 'Remolinos marinos' },
    x: 405, y: 812
  },
  {
    id: 'matsuyama', region: REGIONES.shikoku,
    ciudad: { kana: 'まつやま', romaji: 'Matsuyama', tipo: 'Ciudad' },
    sitio: { kana: 'どうご おんせん', romaji: 'Dōgo onsen', es: 'Balneario de aguas termales histórico' },
    x: 330, y: 808
  },
  {
    id: 'kochi', region: REGIONES.shikoku,
    ciudad: { kana: 'こうち', romaji: 'Kōchi', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'こうちじょう', romaji: 'Kōchijō', es: 'Castillo' },
    x: 350, y: 848
  },

  // ---------- Kyushu y Okinawa ----------
  {
    id: 'fukuoka', region: REGIONES.kyushu,
    ciudad: { kana: 'ふくおか', romaji: 'Fukuoka', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'だざいふ てんまんぐう', romaji: 'Dazaifu Tenmangū', es: 'Santuario sintoísta' },
    x: 215, y: 835
  },
  {
    id: 'nagasaki', region: REGIONES.kyushu,
    ciudad: { kana: 'ながさき', romaji: 'Nagasaki', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'グラバーえん', romaji: 'Gurabāen', es: 'Jardín y mansiones históricas' },
    x: 180, y: 870
  },
  {
    id: 'kumamoto', region: REGIONES.kyushu,
    ciudad: { kana: 'くまもと', romaji: 'Kumamoto', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'くまもとじょう', romaji: 'Kumamotojō', es: 'Castillo' },
    x: 225, y: 895
  },
  {
    id: 'miyazaki', region: REGIONES.kyushu,
    ciudad: { kana: 'みやざき', romaji: 'Miyazaki', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'たかちほきょう', romaji: 'Takachihokyō', es: 'Garganta / Cañón fluvial' },
    x: 255, y: 915
  },
  {
    id: 'kagoshima', region: REGIONES.kyushu,
    ciudad: { kana: 'かごしま', romaji: 'Kagoshima', tipo: 'Ciudad / Prefectura' },
    sitio: { kana: 'さくらじま', romaji: 'Sakurajima', es: 'Volcán activo' },
    x: 222, y: 955
  },
  {
    id: 'okinawa', region: REGIONES.kyushu,
    ciudad: { kana: 'おきなわ', romaji: 'Okinawa', tipo: 'Prefectura / Archipiélago' },
    sitio: { kana: 'ビーチ', romaji: 'Bīchi', es: 'Playas' },
    x: 796, y: 890
  }
];

/* =========================================================
   Lógica
   ========================================================= */

const TAMANO_MAPA = 1024;
const IMAGEN_RESPALDO = 'img/placeholder.svg';

const mapa = document.getElementById('mapa');
const contenedorPines = document.getElementById('pines');
const popup = document.getElementById('popup');
const btnCerrar = document.getElementById('btn-cerrar');
const popupImg = document.getElementById('popup-img');
const leyenda = document.getElementById('leyenda');

let lugarActivo = null;

/* ---------- Pines ---------- */

function crearPines() {
  LUGARES.forEach((lugar) => {
    lugar.imagen = `img/sitios/${lugar.id}.jpg`;

    const pin = document.createElement('button');
    pin.type = 'button';
    pin.className = 'pin';
    pin.textContent = '？';
    pin.style.left = (lugar.x / TAMANO_MAPA) * 100 + '%';
    pin.style.top = (lugar.y / TAMANO_MAPA) * 100 + '%';
    pin.setAttribute('aria-label', `${lugar.ciudad.kana} (${lugar.ciudad.romaji})`);
    pin.addEventListener('click', () => alPulsarPin(lugar));

    contenedorPines.appendChild(pin);
    lugar.pin = pin;
  });
}

function alPulsarPin(lugar) {
  // Si se pulsa el mismo pin que está abierto, se cierra
  if (lugarActivo === lugar) {
    cerrarPopup();
  } else {
    abrirPopup(lugar);
  }
}

/* ---------- Pop-up ---------- */

function rellenarPopup(lugar) {
  popupImg.src = lugar.imagen;
  popupImg.alt = lugar.sitio.kana;

  document.getElementById('popup-region').textContent = lugar.region.kana;
  document.getElementById('popup-region-es').textContent = lugar.region.es;
  document.getElementById('popup-ciudad').textContent = lugar.ciudad.kana;
  document.getElementById('popup-ciudad-romaji').textContent = lugar.ciudad.romaji;
  document.getElementById('popup-tipo').textContent = lugar.ciudad.tipo;
  document.getElementById('popup-sitio').textContent = lugar.sitio.kana;
  document.getElementById('popup-sitio-romaji').textContent = lugar.sitio.romaji;
  document.getElementById('popup-sitio-es').textContent = lugar.sitio.es;
}

function abrirPopup(lugar) {
  // Solo un pop-up a la vez: al reutilizar el mismo elemento,
  // el anterior se cierra y se abre el nuevo.
  lugarActivo = lugar;
  rellenarPopup(lugar);
  popup.hidden = false;
  posicionarPopup(lugar);

  LUGARES.forEach((l) => l.pin.classList.toggle('activo', l === lugar));
}

function posicionarPopup(lugar) {
  const anchoMapa = mapa.clientWidth;
  const altoMapa = mapa.clientHeight;

  // Punta del pin en píxeles dentro del mapa
  const px = (lugar.x / TAMANO_MAPA) * anchoMapa;
  const py = (lugar.y / TAMANO_MAPA) * altoMapa;

  const ancho = popup.offsetWidth;
  const alto = popup.offsetHeight;
  const margen = 8;
  const separacion = 40;

  // Centrado sobre el pin, sin salirse de los bordes del mapa
  const izquierda = Math.min(
    Math.max(px, ancho / 2 + margen),
    anchoMapa - ancho / 2 - margen
  );

  // Arriba del pin si hay espacio; si no, abajo
  const hayEspacioArriba = py - alto - separacion >= 0;
  popup.classList.toggle('abajo', !hayEspacioArriba);

  popup.style.left = izquierda + 'px';
  popup.style.top = (hayEspacioArriba ? py - separacion : py + separacion) + 'px';

  // La cola del pop-up siempre apunta al pin
  popup.style.setProperty('--cola', (px - (izquierda - ancho / 2)) + 'px');
}

function cerrarPopup() {
  popup.hidden = true;
  lugarActivo = null;
  LUGARES.forEach((l) => l.pin.classList.remove('activo'));
}

/* ---------- Lista de regiones ---------- */

function crearLeyenda() {
  Object.values(REGIONES).forEach((region) => {
    const lugaresRegion = LUGARES.filter((l) => l.region === region);
    if (lugaresRegion.length === 0) return;

    const bloque = document.createElement('div');
    bloque.className = 'region';

    const titulo = document.createElement('h3');
    titulo.className = 'region-titulo';
    titulo.textContent = region.kana;

    const es = document.createElement('small');
    es.textContent = region.es;
    titulo.appendChild(es);
    bloque.appendChild(titulo);

    const lista = document.createElement('div');
    lista.className = 'd-flex flex-wrap gap-2';

    lugaresRegion.forEach((lugar) => {
      const boton = document.createElement('button');
      boton.type = 'button';
      boton.className = 'btn btn-outline-danger btn-sm';
      boton.textContent = `${lugar.ciudad.kana} ・ ${lugar.ciudad.romaji}`;
      boton.addEventListener('click', () => {
        abrirPopup(lugar);
        mapa.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      lista.appendChild(boton);
    });

    bloque.appendChild(lista);
    leyenda.appendChild(bloque);
  });
}

/* ---------- Eventos ---------- */

// Si la imagen del sitio no existe, se usa la imagen de respaldo
popupImg.addEventListener('error', () => {
  if (!popupImg.src.endsWith(IMAGEN_RESPALDO)) {
    popupImg.src = IMAGEN_RESPALDO;
  }
});

btnCerrar.addEventListener('click', cerrarPopup);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarPopup();
});

window.addEventListener('resize', () => {
  if (lugarActivo) posicionarPopup(lugarActivo);
});

/* ---------- Inicio ---------- */

crearPines();
crearLeyenda();
