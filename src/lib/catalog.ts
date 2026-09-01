import { normalizeSearch } from "./utils";

export type Category = "tinktur" | "kur" | "manufaktur";

export type Product = {
  slug: string;
  name: string;
  kicker: string;
  category: Category;
  price: number;
  unit: string;
  image: string;
  excerpt: string;
  description: string;
  ingredients: string;
  usage: string;
  legal: string;
  featured?: boolean;
  keywords: string[];
};

export const NEM_HINT =
  "Nahrungsergänzungsmittel sind kein Ersatz für eine ausgewogene Ernährung und eine gesunde Lebensweise. Die angegebenen empfohlenen täglichen Verzehrmengen dürfen nicht überschritten werden. Außerhalb der Reichweite von kleinen Kindern aufbewahren.";

export const EXTERNAL_HINT =
  "Nur zur äußeren Anwendung. Nicht zum Verzehr bestimmt.";

export const products: Product[] = [
  {
    slug: "johanniskraut-tinktur",
    name: "Johanniskraut-Tinktur",
    kicker: "Sommersonne",
    category: "tinktur",
    price: 2490,
    unit: "50 ml",
    image: "/images/tinktur.jpg",
    excerpt: "Handansatz aus blühendem Johanniskraut vom Schauinsland.",
    description:
      "Unsere Johanniskraut-Tinktur entsteht in kleinen Chargen in der Manufaktur in Horben. Die Blüten werden in der Hochsaison von Hand gelesen, schonend angesetzt und filtriert. Ein Klassiker der Schwarzwälder Hausapotheke – als Nahrungsergänzung, nicht als Arzneimittel.",
    ingredients: "Johanniskraut (Hypericum perforatum), Bio-Alkohol (38 % vol.).",
    usage: "Nach Bedarf 10–20 Tropfen in Wasser. Nicht in der Schwangerschaft. Achtung: kann die Lichtempfindlichkeit erhöhen.",
    legal: NEM_HINT,
    featured: true,
    keywords: ["johanniskraut", "tinktur", "hypericum", "stimmung", "sommer", "tropfen"],
  },
  {
    slug: "thymian-tinktur",
    name: "Thymian-Tinktur",
    kicker: "Kraft der Halde",
    category: "tinktur",
    price: 1990,
    unit: "50 ml",
    image: "/images/thymian.jpg",
    excerpt: "Würziger Thymian aus dem eigenen Kräutergarten, kalt angesetzt.",
    description:
      "Thymian wächst bei uns auf den sonnigen Hängen über Freiburg. Die Tinktur bewahrt das ätherische Profil der Pflanze – klar, herb, wärmend. Traditionell in der kalten Jahreszeit geschätzt.",
    ingredients: "Thymian (Thymus vulgaris), Bio-Alkohol (38 % vol.).",
    usage: "10–15 Tropfen in warmem Wasser, bis zu dreimal täglich.",
    legal: NEM_HINT,
    featured: true,
    keywords: ["thymian", "tinktur", "atemwege", "erkaeltung", "tropfen"],
  },
  {
    slug: "baldrian-tinktur",
    name: "Baldrian-Tinktur",
    kicker: "Abend im Tal",
    category: "tinktur",
    price: 2290,
    unit: "50 ml",
    image: "/images/baldrian.jpg",
    excerpt: "Wurzelansatz für ruhige Abende – ohne Zusätze.",
    description:
      "Baldrianwurzel aus kontrolliertem Anbau, lange mazeriert. Ein stilles Produkt für den Übergang in die Nacht. Kein Schlafmittel, sondern eine pflanzliche Nahrungsergänzung mit langer Tradition im Schwarzwald.",
    ingredients: "Baldrianwurzel (Valeriana officinalis), Bio-Alkohol (45 % vol.).",
    usage: "20 Tropfen 30 Minuten vor dem Schlafengehen in Wasser.",
    legal: NEM_HINT,
    keywords: ["baldrian", "ruhe", "schlaf", "abend", "tinktur", "wurzel"],
  },
  {
    slug: "brennnessel-tinktur",
    name: "Brennnessel-Tinktur",
    kicker: "Mineralien aus dem Wald",
    category: "tinktur",
    price: 1890,
    unit: "50 ml",
    image: "/images/haengekraeuter.jpg",
    excerpt: "Frische Spitzen im Frühjahr, mineralisch und klar.",
    description:
      "Die Brennnessel ist unser stiller Lieferant für ein kräftiges Frühlingsgefühl. Wir ernten junge Spitzen im eigenen Garten und am Waldrand – ohne Pflanzenschutz, von Hand.",
    ingredients: "Brennnessel (Urtica dioica), Bio-Alkohol (38 % vol.).",
    usage: "15 Tropfen in Wasser, vorzugsweise morgens.",
    legal: NEM_HINT,
    keywords: ["brennnessel", "urtica", "mineralien", "fruehling", "tinktur"],
  },
  {
    slug: "propolis-tinktur",
    name: "Propolis-Tinktur",
    kicker: "Harz der Bienen",
    category: "tinktur",
    price: 2690,
    unit: "30 ml",
    image: "/images/tinktur.jpg",
    excerpt: "Propolis von Imkern aus dem Dreisamtal, alkoholisch ausgezogen.",
    description:
      "Propolis ist das Kittharz der Honigbiene. Wir beziehen es von benachbarten Imkern und setzen es in der Manufaktur an. Intensiv, harzig, nur in kleiner Flasche.",
    ingredients: "Propolis-Extrakt, Bio-Alkohol (40 % vol.).",
    usage: "5–10 Tropfen in Wasser. Bei bekannter Bienenprodukt-Allergie nicht verwenden.",
    legal: NEM_HINT,
    keywords: ["propolis", "biene", "immun", "harz", "tinktur"],
  },
  {
    slug: "arnika-tinktur",
    name: "Arnika-Tinktur",
    kicker: "Nur äußerlich",
    category: "tinktur",
    price: 2190,
    unit: "50 ml",
    image: "/images/tinktur.jpg",
    excerpt: "Klassischer äußerlicher Ansatz – nicht zum Verzehr.",
    description:
      "Arnika gehört in keine Teetasse. Unsere Tinktur ist ausdrücklich nur für die äußere Anwendung gedacht: verdünnt auf intakte Haut, nach der Wanderung oder dem Gartentag.",
    ingredients: "Arnika (Arnica montana), Bio-Alkohol.",
    usage: "Mit Wasser verdünnen und auf intakte Haut tupfen. Nicht einnehmen, nicht auf offene Wunden.",
    legal: EXTERNAL_HINT,
    keywords: ["arnika", "aeusserlich", "muskeln", "tinktur", "salbe"],
  },
  {
    slug: "fruehjahrskur",
    name: "21-Tage Frühjahrskur",
    kicker: "Kur",
    category: "kur",
    price: 4990,
    unit: "Set / 21 Tage",
    image: "/images/kur-set.jpg",
    excerpt: "Brennnessel, Löwenzahn und Birkenblatt – die stille Reset-Routine.",
    description:
      "Drei Wochen, ein Rhythmus: morgens Brennnessel, mittags Löwenzahn, abends ein milder Kräutertee. Alles aus der Manufaktur, portioniert für 21 Tage. Keine Detox-Versprechen – nur ehrliche Pflanzen und ein klarer Plan.",
    ingredients: "Brennnesselkraut, Löwenzahnwurzel, Birkenblatt, Melisse. Abgefüllt als Tee & Tinktur.",
    usage: "Beilage mit Tagesplan liegt bei. Ausreichend Wasser trinken.",
    legal: NEM_HINT,
    featured: true,
    keywords: ["kur", "fruehjahr", "detox", "brennnessel", "loewenzahn", "set"],
  },
  {
    slug: "immun-kur",
    name: "Immun-Kur",
    kicker: "Kur",
    category: "kur",
    price: 5490,
    unit: "Set / 14 Tage",
    image: "/images/kraeutertee.jpg",
    excerpt: "Holunder, Thymian und Propolis für die nasse Jahreszeit.",
    description:
      "Ein 14-Tage-Set aus Holunderblüten-Ansatz, Thymian-Tinktur und Propolis. Zusammengestellt für Tage, an denen der Schwarzwald nass und der Alltag dicht ist.",
    ingredients: "Holunderblüte, Thymian, Propolis, Bio-Alkohol, Honig (Beilage).",
    usage: "Morgens und abends nach Plan. Nicht erhitzen.",
    legal: NEM_HINT,
    keywords: ["kur", "immun", "holunder", "thymian", "propolis", "winter"],
  },
  {
    slug: "ruhe-kur",
    name: "Abendruhe-Kur",
    kicker: "Kur",
    category: "kur",
    price: 4490,
    unit: "Set / 14 Tage",
    image: "/images/baldrian.jpg",
    excerpt: "Baldrian, Hopfen und Melisse – 14 Abende ohne Bildschirmritual.",
    description:
      "Eine kleine Kur für den Feierabend: Baldrian-Tinktur, Hopfenzapfen-Tee und Melissenhydrolat zum Kissen. Kein Arzneimittel, ein pflanzliches Ritual.",
    ingredients: "Baldrianwurzel, Hopfenzapfen, Melisse.",
    usage: "Jeweils 30 Minuten vor dem Schlafengehen.",
    legal: NEM_HINT,
    keywords: ["kur", "ruhe", "schlaf", "baldrian", "hopfen", "melisse"],
  },
  {
    slug: "kraeuter-zisch-thymian",
    name: "Kräuter-Zisch Thymian",
    kicker: "Hydrolat",
    category: "manufaktur",
    price: 1690,
    unit: "100 ml Spray",
    image: "/images/spray.jpg",
    excerpt: "Wasserdampfdestillat aus eigenem Thymian – Raum und Leinen.",
    description:
      "Hydrolat aus der Kupferdestille in Horben. Der Duft des Thymians, eingefangen im Wasserdampf. Zum Besprühen von Raum, Leinen oder als Erfrischung über dem Kopf – wie früher der Kräuter-Zisch.",
    ingredients: "Thymian-Hydrolat (Thymus vulgaris), nichts weiter.",
    usage: "2–3 Sprühstöße in den Raum oder aufs Kopfkissen. Nicht in die Augen.",
    legal: "Kosmetisches / Raumduft-Hydrolat. Kein Arzneimittel.",
    featured: true,
    keywords: ["hydrolat", "spray", "zisch", "thymian", "raumduft", "destillat"],
  },
  {
    slug: "gewuerzsalz-buono",
    name: "Gewürzsalz Mix Buono",
    kicker: "Küche",
    category: "manufaktur",
    price: 990,
    unit: "120 g",
    image: "/images/salz.jpg",
    excerpt: "Steinsalz, Basilikum und Thymian – das Lieblingsglas der Manufaktur.",
    description:
      "Steinsalz, Basilikum und Thymian, von Hand gemischt. Gut zu Salat, Pizza, Pasta oder einer einfachen Tomatensoße. Ein Stück Schwarzwald auf dem Tisch.",
    ingredients: "Steinsalz, Basilikum, Thymian.",
    usage: "Zum Würzen nach Geschmack. Trocken lagern.",
    legal: "Lebensmittel. Nach dem Öffnen kühl und trocken aufbewahren.",
    keywords: ["salz", "gewuerz", "basilikum", "thymian", "kueche", "buono"],
  },
  {
    slug: "bauernseife",
    name: "Traditionelle Bauernseife",
    kicker: "Manufaktur",
    category: "manufaktur",
    price: 890,
    unit: "Stück ca. 100 g",
    image: "/images/seife.jpg",
    excerpt: "Nach alter Bauernart: Talg, Rapsöl, Ringelblume, Spitzwegerich, Rosmarin.",
    description:
      "Hergestellt nach jahrhundertealter Bauerntradition. Rustikal, fest, mit Ringelblume, Spitzwegerich und Rosmarin. In Papiertasche, wiederverschließbar.",
    ingredients: "Schweinetalg, Rapsöl, Ringelblumen, Spitzwegerich, Rosmarin.",
    usage: "Zum Waschen von Händen und Körper. Trocken aufbewahren.",
    legal: "Kosmetik. Bei bekannter Allergie gegen Inhaltsstoffe nicht verwenden.",
    keywords: ["seife", "ringelblume", "rosmarin", "bauernseife", "koerper"],
  },
  {
    slug: "destillier-workshop",
    name: "Kräuter-Destillier-Workshop",
    kicker: "Vor Ort in Horben",
    category: "manufaktur",
    price: 5000,
    unit: "pro Person",
    image: "/images/destille.jpg",
    excerpt: "Destillieren lernen, Creme und Duschgel mitnehmen. Termine nach Absprache.",
    description:
      "In der Manufaktur am Münzenriedweg zeigen wir, wie Kräuterduft per Wasserdampfdestillation entsteht – und wie daraus Creme und Duschgel werden. Kleine Gruppen, eigene Termine. Im Preis enthalten: Creme und Duschgel zum Mitnehmen.",
    ingredients: "Material und Anleitung inklusive.",
    usage: "Nach Buchung stimmen wir Datum und Uhrzeit telefonisch oder per Mail ab.",
    legal: "Dienstleistung vor Ort. Kein Versandprodukt. Rücktritt bis 7 Tage vorher kostenfrei.",
    keywords: ["workshop", "kurs", "destille", "horben", "creme", "duschgel", "lernen"],
  },
];

export const categories: {
  id: Category;
  href: string;
  label: string;
  teaser: string;
}[] = [
  {
    id: "tinktur",
    href: "/tinkturen",
    label: "Tinkturen",
    teaser: "Tropfen aus eigenen und wilden Kräutern",
  },
  {
    id: "kur",
    href: "/kuren",
    label: "Kuren",
    teaser: "Mehrwöchige Sets mit klarem Rhythmus",
  },
  {
    id: "manufaktur",
    href: "/manufaktur",
    label: "Manufaktur",
    teaser: "Hydrolate, Salz, Seife, Workshops",
  },
];

export type Faq = { q: string; a: string; tags: string[] };

export const faqs: Faq[] = [
  {
    q: "Sind eure Tinkturen in Deutschland legal?",
    a: "Ja. Unsere Tinkturen und Kuren sind als Nahrungsergänzungsmittel bzw. Lebensmittel oder Kosmetik deklariert – nicht als Arzneimittel. Arnika führen wir nur zur äußeren Anwendung.",
    tags: ["legal", "tinktur", "nahrungsergaenzung"],
  },
  {
    q: "Was ist der Unterschied zwischen Tinktur und Kur?",
    a: "Die Tinktur ist eine einzelne Pflanze im Glas. Eine Kur ist ein zusammengestelltes Set für 14 oder 21 Tage – mit Plan, mehreren Pflanzen und oft Tee plus Tinktur.",
    tags: ["tinktur", "kur", "unterschied"],
  },
  {
    q: "Warum Alkohol in den Tinkturen?",
    a: "Alkohol löst und konserviert die pflanzlichen Inhaltsstoffe. Wir arbeiten mit Bio-Alkohol in haushaltsüblicher Stärke. Wer keinen Alkohol möchte, findet Hydrolate und Tees in der Manufaktur.",
    tags: ["alkohol", "tinktur", "hydrolat"],
  },
  {
    q: "Wie sollte ich Tinkturen lagern?",
    a: "Kühl, dunkel, fest verschlossen. Ungeöffnet sind sie mindestens 24 Monate haltbar, geöffnet innerhalb von 12 Monaten aufbrauchen.",
    tags: ["lagerung", "haltbarkeit"],
  },
  {
    q: "Kann ich die Kräuter selbst im Wald sammeln?",
    a: "Theoretisch ja – wir raten Anfängerinnen und Anfängern davon ab. Verwechslung, Schonzeiten und Sauberkeit sind echte Themen. Unsere Chargen stammen aus dem Garten oder von bekannten Wildstandorten und werden geprüft.",
    tags: ["sammeln", "wald", "wildkraeuter"],
  },
  {
    q: "Wie lange dauert der Versand?",
    a: "In der Regel zwei Werktage innerhalb Deutschlands. Ab 80 € Warenwert versenden wir kostenfrei. Der Workshop wird nicht versandt, sondern vor Ort in Horben durchgeführt.",
    tags: ["versand", "dhl", "lieferzeit"],
  },
  {
    q: "Gibt es eine Geld-zurück-Garantie?",
    a: "Wenn du nach 14 Tagen nicht überzeugt bist, schreib uns – ungeöffnete Ware erstatten wir. Geöffnete Tinkturen aus Hygienegründen nur nach Rücksprache.",
    tags: ["garantie", "rueckgabe", "widerruf"],
  },
  {
    q: "Woher kommen die Kräuter?",
    a: "Ein großer Teil wächst im eigenen Garten in Horben am Schauinsland. Ergänzt wird aus Wildsammlung im Schwarzwald und von Partnern mit ökologischem Anbau (Bioland / Demeter-Erfahrung der Inhaberin).",
    tags: ["herkunft", "bio", "schwarzwald", "horben"],
  },
];

export const TEAM = [
  {
    name: "Barbara Kopp",
    role: "Inhaberin & Kräuterkundlerin",
    image: "/images/garten.jpg",
    text: "Platzhalter für die Kundin: Hier steht Barbaras Kurzvita – wie sie zur Kräuterarbeit kam, Bioland-/Demeter-Erfahrung und warum Horben.",
  },
  {
    name: "Name folgt",
    role: "Destillation & Manufaktur",
    image: "/images/destille.jpg",
    text: "Platzhalter Mitarbeiter 2: Bild und Text ersetzen. Zuständig für Destille, Hydrolate und die kleinen Chargen im Werkraum.",
  },
  {
    name: "Name folgt",
    role: "Garten & Wildsammlung",
    image: "/images/haengekraeuter.jpg",
    text: "Platzhalter Mitarbeiter 3: Bild und Text ersetzen. Garten am Schauinsland, Wildkräuter, Trocknung.",
  },
] as const;

export const STORY = {
  kicker: "Wie die Story begann",
  title: "Platzhalter für die Geschichte der Kundin",
  body: "Platzhalter, Text rechts: Hier erzählt Barbara, wie aus dem Garten in Horben eine Manufaktur wurde – der erste Ansatz, die Kupferdestille, die Nachbarn, der Weg zu Tinkturen und Kuren. Ersetze diesen Absatz durch den echten Text.",
  image: "/images/untersberg.jpg",
};

export type SearchHit = {
  href: string;
  title: string;
  kind: "Produkt" | "Seite" | "Frage";
  snippet: string;
  score: number;
};

const pages: { href: string; title: string; snippet: string; keywords: string[] }[] = [
  { href: "/moos", title: "Moos", snippet: "Wald, Moos, Untersberg und Schwarzwald", keywords: ["moos", "wald", "untersberg", "schwarzwald", "moose"] },
  { href: "/about", title: "Über uns / Wie die Story begann", snippet: "Barbara Kopp, Manufaktur in Horben, Schauinsland", keywords: ["about", "ueber uns", "story", "barbara", "kopp", "manufaktur"] },
  { href: "/hilfe", title: "Hilfe & FAQ", snippet: "Häufige Fragen zu Tinkturen, Kuren, Versand", keywords: ["hilfe", "faq", "fragen"] },
  { href: "/kontakt", title: "Kontakt", snippet: "Münzenriedweg 11, 79289 Horben, Tel. 0152 01723261", keywords: ["kontakt", "telefon", "horben", "adresse", "map", "karte"] },
  { href: "/impressum", title: "Impressum", snippet: "Barbara Kopp, Horben bei Freiburg", keywords: ["impressum"] },
  { href: "/datenschutz", title: "Datenschutzerklärung", snippet: "Datenschutz, Cookies, lokale Speicherung", keywords: ["datenschutz", "privacy", "cookies"] },
  { href: "/agb", title: "AGB", snippet: "Allgemeine Geschäftsbedingungen", keywords: ["agb", "bedingungen"] },
  { href: "/versand", title: "Versand & Rückgabe", snippet: "Lieferzeit, Kosten, Widerruf", keywords: ["versand", "rueckgabe", "widerruf"] },
  { href: "/tinkturen", title: "Tinkturen", snippet: "Alle Tropfen der Manufaktur", keywords: ["tinkturen", "tropfen"] },
  { href: "/kuren", title: "Kuren", snippet: "Frühjahr, Immun, Abendruhe", keywords: ["kuren", "set"] },
  { href: "/manufaktur", title: "Manufaktur", snippet: "Hydrolat, Salz, Seife, Workshop", keywords: ["manufaktur", "seife", "hydrolat", "workshop"] },
  { href: "/warenkorb", title: "Warenkorb", snippet: "Deine Bestellung", keywords: ["warenkorb", "cart", "kasse"] },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function byCategory(cat: Category) {
  return products.filter((p) => p.category === cat);
}

export function featuredProducts() {
  return products.filter((p) => p.featured);
}

/** Local search — no network, no AI. Token overlap + prefix boost. */
export function searchAll(raw: string): SearchHit[] {
  const q = normalizeSearch(raw);
  if (q.length < 1) return [];
  const tokens = q.split(" ").filter(Boolean);
  const hits: SearchHit[] = [];

  const scoreText = (hay: string, extra = 0) => {
    const h = normalizeSearch(hay);
    let s = 0;
    if (h === q) s += 100;
    else if (h.startsWith(q)) s += 80;
    else if (h.includes(q)) s += 55;
    for (const t of tokens) {
      if (!t) continue;
      if (h === t) s += 20;
      else if (h.startsWith(t)) s += 14;
      else if (h.includes(t)) s += 8;
    }
    if (s === 0) return 0;
    return s + extra;
  };

  for (const p of products) {
    const blob = [p.name, p.kicker, p.excerpt, p.category, p.unit, ...p.keywords].join(" ");
    const score = scoreText(p.name, 12) + scoreText(blob);
    if (score >= 8) {
      hits.push({
        href: `/products/${p.slug}`,
        title: p.name,
        kind: "Produkt",
        snippet: `${p.kicker} · ${p.unit}`,
        score,
      });
    }
  }

  for (const page of pages) {
    const blob = [page.title, page.snippet, ...page.keywords].join(" ");
    const score = scoreText(page.title, 8) + scoreText(blob);
    if (score >= 8) {
      hits.push({
        href: page.href,
        title: page.title,
        kind: "Seite",
        snippet: page.snippet,
        score,
      });
    }
  }

  for (const f of faqs) {
    const blob = [f.q, f.a, ...f.tags].join(" ");
    const score = scoreText(f.q, 6) + scoreText(blob);
    if (score >= 8) {
      hits.push({
        href: "/hilfe",
        title: f.q,
        kind: "Frage",
        snippet: f.a.slice(0, 140),
        score,
      });
    }
  }

  hits.sort((a, b) => b.score - a.score);
  const seen = new Set<string>();
  const unique: SearchHit[] = [];
  for (const h of hits) {
    const key = h.kind + h.title;
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(h);
    if (unique.length >= 8) break;
  }
  return unique;
}

export const SITE = {
  name: "Frau Kopp",
  full: "Frau Kopp — Schwarzwälder Kräuter-Manufaktur",
  domain: "fraukopp.de",
  owner: "Barbara Kopp",
  street: "Münzenriedweg 11",
  zip: "79289",
  city: "Horben bei Freiburg",
  email: "bmkopp@web.de",
  phoneDisplay: "0152 – 017 232 61",
  phone: "+4915201723261",
  lat: 47.9353,
  lng: 7.8587,
  webdesign: {
    name: "Alexander Schimpf",
    street: "Bergstraße 38",
    zip: "79194",
    city: "Gundelfingen",
    url: "http://www.punktlandung.marketing",
    label: "Webdesign Freiburg",
  },
};
