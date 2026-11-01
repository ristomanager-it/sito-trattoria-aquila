/* Galleria foto delle pagine weddings (Campo Antico).
   Si mette dopo <div id="galleria"></div>. Foto web in storage: sito/weddings/galleria/NNN.webp (+ -t.webp miniatura).
   Filtri per gruppo, prime 24 foto e poi "mostra tutte", visore a tutto schermo con frecce, tastiera e dito. */
(function () {
  var B = "https://cuhcscpvhypoaplcmtjk.supabase.co/storage/v1/object/public/media-aziende/sito/weddings/galleria/";
  var F = [["000",0,1600,1200],["001",0,960,960],["002",0,1500,844],["003",0,1200,1600],["004",0,1600,1066],["005",0,1600,1066],["006",0,1600,1066],["007",0,1599,1066],["008",0,1600,1068],["009",0,1600,1068],["010",0,1600,1066],["011",0,1066,1600],["012",0,850,567],["013",0,1024,768],["014",0,960,720],["015",0,1600,1068],["016",0,960,720],["017",0,720,481],["018",0,1600,1068],["019",0,1600,1068],["020",0,1600,1068],["021",0,1600,1068],["022",0,1600,1068],["023",0,1600,1068],["024",0,1600,1068],["025",0,1600,1068],["026",0,1600,1067],["027",0,1600,1067],["028",0,1600,1067],["029",0,1600,1067],["030",0,1600,1067],["031",0,1600,1067],["032",1,720,960],["033",1,960,960],["034",1,1600,1066],["035",1,960,540],["036",1,1600,1600],["037",1,1600,1600],["038",1,1600,1600],["039",1,1600,1600],["040",1,1600,1600],["041",1,1600,1600],["042",1,1600,1600],["043",1,1600,1600],["044",1,1600,1600],["045",1,1600,1600],["046",1,1600,1600],["047",1,1600,1600],["048",1,1600,1600],["049",1,1600,1600],["050",1,1600,1600],["051",1,1600,1600],["052",1,1600,1600],["053",1,1600,1600],["054",1,1600,1600],["055",1,1600,1600],["056",1,1600,1600],["057",1,1600,1600],["058",1,1600,1600],["059",1,1600,1600],["060",1,1600,1600],["061",1,1600,1600],["062",1,1600,1600],["063",1,1600,1600],["064",1,1600,1600],["065",1,1600,1600],["066",1,1600,1600],["067",1,1600,1600],["068",1,1600,1600],["069",2,1600,1200],["070",2,1600,1357],["071",2,1280,960],["072",2,1200,1600],["073",2,720,480],["074",2,1600,1600],["075",2,1600,1600],["076",2,1067,1600],["077",2,1600,1067],["078",2,1067,1600],["079",2,1067,1600],["080",2,1067,1600],["081",2,1067,1600],["082",2,1600,1067],["083",2,1067,1600],["084",2,1067,1600],["085",2,1067,1600],["086",2,1067,1600],["087",2,1067,1600],["088",2,1067,1600],["089",2,1067,1600],["090",2,1067,1600],["091",2,1600,900],["092",2,1067,1600],["093",2,1067,1600],["094",2,1067,1600],["095",2,1067,1600],["096",2,1067,1600],["097",2,1600,900],["098",2,1067,1600],["099",2,1067,1600],["100",2,1600,900],["101",2,1067,1600],["102",2,1067,1600],["103",2,1600,900],["104",2,1067,1600],["105",2,1600,1067],["106",2,1600,1067],["107",2,1067,1600],["108",2,1600,1067],["109",2,1067,1600],["110",2,1067,1600],["111",2,1600,1067],["112",2,1067,1600],["113",2,1600,1067],["114",2,1067,1600],["115",2,1067,1600],["116",2,1067,1600],["117",2,1067,1600],["118",2,1067,1600],["119",2,1600,1067],["120",2,1067,1600],["121",2,1600,1067],["122",2,1067,1600],["123",2,1067,1600],["124",2,1067,1600],["125",2,1067,1600],["126",2,1067,1600],["127",2,1600,1067],["128",2,1600,1067],["129",2,1600,1067],["130",2,1600,1067],["131",2,1600,1067],["132",2,1600,1067],["133",2,1600,1067],["134",2,1600,1067],["135",2,1600,1067],["136",2,1067,1600],["137",2,1600,1067],["138",2,1600,1067],["139",2,1600,1067],["140",2,1600,1067],["141",2,1600,1067],["142",2,1067,1600],["143",2,1600,1067],["144",2,1067,1600],["145",2,1067,1600],["146",2,1600,1067],["147",2,1067,1600]];
  var L = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
  var T = {
    it: ["Tutte", "Il luogo", "La cucina", "Matrimoni", "Mostra tutte le {n} foto", "Chiudi", "Precedente", "Successiva"],
    en: ["All", "The venue", "The food", "Weddings", "Show all {n} photos", "Close", "Previous", "Next"],
    es: ["Todas", "El lugar", "La cocina", "Bodas", "Ver las {n} fotos", "Cerrar", "Anterior", "Siguiente"],
    de: ["Alle", "Der Ort", "Die Küche", "Hochzeiten", "Alle {n} Fotos zeigen", "Schließen", "Zurück", "Weiter"],
    nl: ["Alle", "De locatie", "De keuken", "Bruiloften", "Alle {n} foto's tonen", "Sluiten", "Vorige", "Volgende"]
  }[L] || ["All", "The venue", "The food", "Weddings", "Show all {n} photos", "Close", "Previous", "Next"];
  var box = document.getElementById("galleria");
  if (!box) return;
  var st = document.createElement("style");
  st.textContent =
    "#galleria .gchips{display:flex;flex-wrap:wrap;gap:8px;margin:26px 0 18px}" +
    "#galleria .gchips button{border:1px solid var(--line,#ccc);background:transparent;color:var(--ink,#222);border-radius:999px;padding:8px 16px;font:inherit;font-size:15px;cursor:pointer}" +
    "#galleria .gchips button[aria-pressed=true]{background:var(--wine,#6B1E2A);border-color:var(--wine,#6B1E2A);color:#fff}" +
    "#galleria .ggrid{columns:3 260px;column-gap:10px}" +
    "#galleria .ggrid button{display:block;width:100%;margin:0 0 10px;padding:0;border:0;background:var(--line,#ddd);border-radius:4px;overflow:hidden;cursor:zoom-in;break-inside:avoid}" +
    "#galleria .ggrid img{display:block;width:100%;height:auto;transition:transform .4s}" +
    "#galleria .ggrid button:hover img{transform:scale(1.03)}" +
    "#galleria .gpiu{display:block;margin:18px auto 0;border:1px solid var(--wine,#6B1E2A);color:var(--wine,#6B1E2A);background:transparent;border-radius:999px;padding:13px 24px;font:inherit;font-weight:500;cursor:pointer}" +
    ".glb{position:fixed;inset:0;z-index:50;background:rgba(10,12,10,.96);display:none;align-items:center;justify-content:center;touch-action:pan-y}" +
    ".glb.on{display:flex}" +
    ".glb img{max-width:100vw;max-height:100vh;max-height:100dvh;object-fit:contain;user-select:none}" +
    ".glb button{position:absolute;border:0;background:rgba(255,255,255,.12);color:#fff;width:48px;height:48px;border-radius:50%;font-size:24px;line-height:1;cursor:pointer}" +
    ".glb .gx{top:calc(14px + env(safe-area-inset-top,0px));right:14px}" +
    ".glb .gp{left:12px;top:50%;transform:translateY(-50%)}.glb .gn{right:12px;top:50%;transform:translateY(-50%)}" +
    ".glb .gc{position:absolute;bottom:calc(16px + env(safe-area-inset-bottom,0px));left:0;right:0;text-align:center;color:#ddd;font-size:14px}" +
    "@media (max-width:640px){#galleria .ggrid{columns:2;column-gap:6px}#galleria .ggrid button{margin-bottom:6px}.glb .gp,.glb .gn{display:none}}";
  document.head.appendChild(st);

  var filtro = -1, tutte = false, lista = [], i = 0;
  var chips = document.createElement("div"); chips.className = "gchips";
  var grid = document.createElement("div"); grid.className = "ggrid";
  var piu = document.createElement("button"); piu.className = "gpiu"; piu.type = "button";
  box.appendChild(chips); box.appendChild(grid); box.appendChild(piu);
  [-1, 0, 1, 2].forEach(function (g) {
    var b = document.createElement("button"); b.type = "button"; b.textContent = T[g + 1];
    b.onclick = function () { filtro = g; tutte = false; disegna(); };
    chips.appendChild(b);
  });

  function disegna() {
    lista = F.filter(function (f) { return filtro < 0 || f[1] === filtro; });
    [].forEach.call(chips.children, function (b, k) { b.setAttribute("aria-pressed", k - 1 === filtro ? "true" : "false"); });
    var n = tutte ? lista.length : Math.min(24, lista.length);
    grid.innerHTML = "";
    for (var k = 0; k < n; k++) {
      var f = lista[k], b = document.createElement("button");
      b.type = "button"; b.dataset.k = k;
      b.innerHTML = '<img loading="lazy" decoding="async" src="' + B + f[0] + '-t.webp" width="' + f[2] + '" height="' + f[3] + '" alt="Campo Antico – ' + T[f[1] + 1] + '">';
      b.onclick = function () { apri(+this.dataset.k); };
      grid.appendChild(b);
    }
    piu.style.display = n < lista.length ? "block" : "none";
    piu.textContent = T[4].replace("{n}", lista.length);
  }
  piu.onclick = function () { tutte = true; disegna(); };

  var lb = document.createElement("div"); lb.className = "glb"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true");
  lb.innerHTML = '<img alt=""><button class="gx" type="button" aria-label="' + T[5] + '">×</button><button class="gp" type="button" aria-label="' + T[6] + '">‹</button><button class="gn" type="button" aria-label="' + T[7] + '">›</button><div class="gc"></div>';
  document.body.appendChild(lb);
  var img = lb.querySelector("img"), cnt = lb.querySelector(".gc");
  function mostra() {
    var f = lista[i]; img.src = B + f[0] + ".webp"; img.alt = "Campo Antico – " + T[f[1] + 1];
    cnt.textContent = (i + 1) + " / " + lista.length;
    [lista[(i + 1) % lista.length], lista[(i - 1 + lista.length) % lista.length]].forEach(function (p) { new Image().src = B + p[0] + ".webp"; });
  }
  function apri(k) { i = k; mostra(); lb.classList.add("on"); document.documentElement.style.overflow = "hidden"; lb.querySelector(".gx").focus(); }
  function chiudi() { lb.classList.remove("on"); document.documentElement.style.overflow = ""; img.src = ""; }
  function vai(d) { i = (i + d + lista.length) % lista.length; mostra(); }
  lb.querySelector(".gx").onclick = chiudi;
  lb.querySelector(".gp").onclick = function (e) { e.stopPropagation(); vai(-1); };
  lb.querySelector(".gn").onclick = function (e) { e.stopPropagation(); vai(1); };
  lb.onclick = function (e) { if (e.target === lb) chiudi(); };
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("on")) return;
    if (e.key === "Escape") chiudi(); else if (e.key === "ArrowRight") vai(1); else if (e.key === "ArrowLeft") vai(-1);
  });
  var x0 = null;
  lb.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) vai(dx < 0 ? 1 : -1);
  });
  disegna();
})();
