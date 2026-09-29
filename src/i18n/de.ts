import type { Dictionary } from './types';

export const de: Dictionary = {
  documentTitle: 'Der Hof Lesti — Landkreis Viljandi, Estland',
  nav: {
    brand: 'Lesti',
    links: [
      { href: '#meist', label: 'Über uns' },
      { href: '#tamm', label: 'Die Lesti-Eiche' },
      { href: '#aed', label: 'Garten' },
      { href: '#talutoo', label: 'Hofarbeit' },
      { href: '#muuseum', label: 'Museum' },
      { href: '#oobumine', label: 'Übernachtung' },
      { href: '#kasitoo', label: 'Handwerksstube' },
      { href: '#rajad', label: 'Wanderwege' },
      { href: '#galerii', label: 'Galerie' },
    ],
    cta: 'Besuchen',
  },
  hero: {
    kicker: 'Landkreis Viljandi, Estland',
    title: 'Der Hof Lesti',
    lead: 'Ein lebendiger Erbeort in Viljandimaa — Land, Geschichten und Handwerk von Generation zu Generation.',
    readMore: 'Mehr erfahren',
    articles: 'Artikel ↓',
    alt: 'Innenansicht des Hofes Lesti',
  },
  about: {
    kicker: 'Über den Hof',
    title: { lead: 'Ein Ort, an dem das Land', emphasis: 'selbst spricht' },
    paragraphs: [
      'Lesti ist ein historisches Hofensemble im Landkreis Viljandi, in dem Generationen von Esten gelebt und Felder bestellt haben. Der Hof liegt in einer stillen Landschaft, umgeben von alten Wäldern und Wiesen.',
      'Heute wird Lesti als gemeinnütziger Erbeort und Kulturzentrum betrieben. Hier kann man das estnische Hofleben nicht als Exponat hinter Glas erleben, sondern als lebendigen, atmenden Ort.',
      'Auf dem Hof finden sich Ruinen, ein alter Garten, Werkzeuge und eine der ältesten Eichen Südestlands — darunter die berühmte Lesti-Eiche.',
    ],
    quote: '„Die Eiche erinnert sich nicht an einen einzelnen Herbst — sie erinnert sich an alle."',
    quoteSource: 'Altes estnisches Sprichwort',
    statsLabel: 'Lesti in Zahlen',
    stats: [
      { value: '18. Jh.', label: 'Erste schriftliche Aufzeichnungen' },
      { value: '300+', label: 'Jahre Landwirtschaft' },
      { value: '1 Eiche', label: 'Die alte Lesti-Eiche' },
      { value: 'Verein', label: 'Ein gemeindegetragener Hof' },
    ],
  },
  articles: {
    kicker: 'Aus dem Archiv',
    title: 'Artikel',
    allLink: 'Alle Artikel →',
    items: [
      {
        tag: 'Geschichte',
        image: { caption: 'Foto — alte Hofgebäude', alt: 'Alte Hofgebäude' },
        date: 'März 2024',
        title: 'Der Hof Lesti durch die Jahrhunderte',
        excerpt:
          'Die frühesten Nachrichten über das Land von Lesti stammen aus dem 18. Jahrhundert. Wer lebte hier? Was baute man an? Was blieb von ihnen?',
        readMore: 'Weiterlesen →',
      },
      {
        tag: 'Kultur',
        image: { caption: 'Foto — ein Teppich am Webstuhl', alt: 'Ein Teppich am Webstuhl' },
        date: 'Januar 2024',
        title: 'Die Kunst alter Teppiche in Viljandimaa',
        excerpt:
          'Über Weben und Teppichherstellung — eine Handwerksform, die in der Region über Generationen erhalten blieb.',
        readMore: 'Weiterlesen →',
      },
      {
        tag: 'Erbe',
        image: { caption: 'Repro — Kölers Gemälde', alt: 'Reproduktion von Kölers Gemälde' },
        date: 'November 2023',
        title: 'Johann Köler und Lesti: die Wurzeln des Künstlers',
        excerpt:
          'Köler war der erste estnische Künstler mit akademischer Ausbildung. Seine Mutter wurde auf dem Hof Lesti geboren.',
        readMore: 'Weiterlesen →',
      },
    ],
  },
  oak: {
    kicker: 'Die alte Eiche',
    title: 'Die Lesti-Eiche',
    paragraphs: [
      [
        'Im Herzen des Hofes steht eine alte Eiche — ',
        { em: 'die Lesti-Eiche' },
        '. Solche Bäume waren in Estland immer etwas Besonderes: unter ihnen wurden Versammlungen abgehalten, Feste gefeiert, Geschichten erzählt.',
      ],
      [
        'Diese Eiche ist besonders bedeutsam, denn neben ihr wurde die Mutter von ',
        { strong: 'Johann Köler' },
        ' (1826–1899) geboren — jener Mann, der Estlands ersten akademisch ausgebildeten Künstler und prägenden Gestalter der Nationalkultur wurde.',
      ],
      ['Die Eiche lebt bis heute. Sie war einfach immer schon da.'],
    ],
    imageCaption: 'Foto — die Lesti-Eiche, Porträt',
    imageAlt: 'Die Lesti-Eiche',
  },
  koler: {
    kicker: 'Geburtsort und Erbe',
    title: { lead: 'Johann Köler', emphasis: 'und Lesti' },
    paragraphs: [
      'Johann Köler (1826–1899) ist eine der wichtigsten Gestalten der estnischen Kulturgeschichte. Er war der erste Este, der eine akademische Kunstausbildung erhielt — er studierte an der Kunstakademie in Sankt Petersburg und stieg zum Hofmaler Kaiser Alexanders II. auf.',
      'In der Zeit des estnischen Nationalerwachens war Köler einer der Wegbereiter der Bewegung. Er verband Volkstradition mit europäischer Hochkultur und förderte die estnische Sprache und Bildung.',
      'Seine Mutter wurde auf dem Hof Lesti geboren. Diese Verbindung macht Lesti zu einem Ort, der unmittelbar mit der estnischen Kulturgeschichte verbunden ist. Auf dem Hof gibt es ihm zu Ehren eine kleine Gedenkecke mit Archivmaterialien.',
    ],
    portrait: {
      label: 'Porträt',
      name: 'Johann Köler',
      dates: '1826 – 1899',
      roles: ['Künstler · Nationale Gestalt', 'Hofmaler', 'Sohn des Hofes Lesti'],
    },
    onsite: {
      label: 'Vor Ort auf dem Hof',
      text: 'Gedenkecke · Archivmaterialien · Genealogie der Familie Köler',
    },
  },
  garden: {
    kicker: 'Lebendiges Erbe',
    title: { lead: 'Der Garten und', emphasis: 'das bestellte Land' },
    items: [
      {
        num: '01',
        title: 'Alte Pflanzensorten',
        text: 'Im Küchengarten wachsen alte Sorten, wie sie für estnische Höfe typisch waren — Heilkräuter, Roggensorten und Wurzelgemüse, die hier über Generationen angebaut wurden.',
      },
      {
        num: '02',
        title: 'Saisonale Arbeit',
        text: 'In Lesti gilt der traditionelle landwirtschaftliche Kalender. Besucher können an den saisonalen Arbeiten teilnehmen — von der Frühjahrspflanzung bis zur Herbsternte.',
      },
      {
        num: '03',
        title: 'Obstgarten und Wiese',
        text: 'Alte Apfel- und Birnbäume sowie natürliche Wiesen umgeben den Hof. Der Obstgarten wartet auf seine Wiederherstellung — manche alten Bäume stehen noch, der Garten braucht eine sorgsame Hand.',
      },
    ],
    images: [
      { caption: 'Foto — der Garten im Frühling', alt: 'Der Garten im Frühling' },
      { caption: 'Foto — die Herbsternte', alt: 'Die Herbsternte' },
    ],
  },
  farmWork: {
    kicker: 'Hände in der Erde',
    title: { lead: 'Komm zur', emphasis: 'Hofarbeit' },
    paragraphs: [
      'In Lesti sind helfende Hände stets willkommen. Pflanzen, Jäten, Ernten — der Rhythmus der traditionellen Landwirtschaft steht allen offen, die die Hände in die Erde legen möchten.',
      [
        'Die Arbeit ist freiwillig und unbezahlt. In Lesti ist die gemeinsame Hofarbeit kein Service — sie ist ',
        { em: 'die Freude an der Arbeit selbst' },
        '. Für ein Stadtkind eröffnet sich hier die Möglichkeit, Dinge zu lernen, die in keinem Schulbuch stehen: wie die Kartoffel aus der Erde kommt, wann Rüben verzogen werden, was eine Ernte bedeutet.',
      ],
      'Komm für einen Tag. Komm mit der Familie. Das Alter spielt keine Rolle — für jeden finden wir die passende Arbeit.',
    ],
    seasons: [
      {
        label: 'Frühling',
        title: 'Pflanzen',
        text: 'Beim Setzen von Kartoffeln, Gemüse und Heilkräutern spürt jedes Händepaar, wie etwas beginnt.',
      },
      {
        label: 'Sommer',
        title: 'Jäten und Pflege',
        text: 'Der Garten braucht ein wachsames Auge. Jäten ist meditative Arbeit — bei einem guten Gespräch ist die Zeit vorbei, bevor man es merkt.',
      },
      {
        label: 'Herbst',
        title: 'Ernte',
        text: 'Das Einbringen der Ernte ist die wichtigste Arbeit des Jahres. Gemeinsam ist sie auch die freudigste.',
      },
    ],
    closing: [
      { strong: 'Was bekommst du dafür?' },
      ' Frische Luft, ein gemeinsames Mittagessen und Geschichten, die du mit in die Stadt nimmst. Geld wird weder gezahlt noch verlangt.',
    ],
  },
  museum: {
    kicker: 'Vor Ort auf dem Hof',
    title: { lead: 'Werkzeuge', emphasis: 'und Ruinen' },
    paragraphs: [
      'Auf dem Hof Lesti gibt es eine Reihe alter Gebäude — einige stehen noch, andere versinken langsam in der Erde. Diese Ruinen sind nicht nur Verfall. Sie sind voller Geschichten.',
      'In der Werkzeugsammlung finden sich Gegenstände, die einst zum Alltag jedes estnischen Hofes gehörten: hölzerne Pflüge, Werkzeuge zur Flachsverarbeitung, Getreidereiniger, Körbe und handgeschmiedetes Eisen.',
    ],
    items: [
      { num: '01', title: 'Feldwerkzeuge', text: 'Eiserne und hölzerne Handwerkzeuge, Webgeräte' },
      { num: '02', title: 'Gebäuderuinen', text: 'Überreste der Dreschscheune, Steinfundamente, Holzrahmen' },
      { num: '03', title: 'Archivraum', text: 'Fotos, Dokumente, lokale Familiengeschichten' },
      { num: '04', title: 'Geführter Rundgang', text: 'Saisonale Exkursionen mit einheimischen Führern' },
    ],
  },
  overnight: {
    kicker: 'Im Hofmuseum',
    title: 'Eine Nacht auf dem Hof',
    paragraphs: [
      'Im Hofmuseum von Lesti ist es möglich, über Nacht zu bleiben. Die Unterkunft läuft über Spenden — einen festen Preis gibt es nicht.',
      'Die Bedingungen sind bescheiden: fließendes Wasser und Elektrizität gibt es nicht. Es ist ein echtes Erlebnis des Hoflebens — eine exotische Entdeckung für erfahrene Reisende, die die Verbindung zur Vergangenheit schätzen.',
      'Eine vorherige Buchung ist erforderlich. Schreib uns und wir finden einen Termin.',
    ],
    conditionsLabel: 'Bedingungen',
    conditions: [
      'Unterkunft gegen Spende — kein fester Preis',
      'Kein fließendes Wasser, kein Strom',
      'Vorherige Buchung erforderlich',
      'Für Reisende mit Entdeckergeist',
    ],
    quote: '„Eine Nacht in Estlands ältester Hofluft — ein Erlebnis, das kein Hotel bieten kann."',
    book: 'Übernachtung buchen',
  },
  craft: {
    kicker: 'Handwerk',
    title: 'Handwerksstube',
    paragraphs: [
      'Die Handwerksstube von Lesti ist ein Ort, an dem alte Fertigkeiten keine Museumsstücke sind — man kann sie anfassen, erleben und selbst ausprobieren. Die Textilsammlung dokumentiert die Handwerkstraditionen von Viljandimaa: Teppiche, Decken und Leinenstoffe.',
      [
        'Auf dem Hof wirkt auch ',
        { strong: 'Margot Gouram' },
        ', von deren Hand es hier gehäkelte und gestrickte Stücke gibt: Mützen, Handschuhe, Socken und Hausschuhe aus Wolle. Alles vor Ort erhältlich.',
      ],
      'Handwerksworkshops sind in Planung. Interessierte mögen sich eintragen — wir informieren, sobald die Termine feststehen.',
    ],
    tags: ['Textilsammlung', 'Margots Strickarbeiten', 'Workshops — in Planung'],
    heroImage: { caption: 'Foto — Teppichmuster', alt: 'Teppichmuster' },
    cards: [
      {
        num: '01',
        title: 'Margots Strickarbeiten',
        text: 'Handgehäkelt und gestrickt: Mützen, Handschuhe, Socken, Hausschuhe aus Wolle. Jedes Stück ein Unikat, von Hand gefertigt.',
        image: { caption: 'Foto — Mützen, Handschuhe, Socken', alt: 'Mützen, Handschuhe, Socken' },
      },
      {
        num: '02',
        title: 'Teppiche und Textilien',
        text: 'Teppiche mit den geometrischen Mustern von Viljandimaa — handgewebte Stücke, die die für die Region typischen Muster und Farben tragen.',
        image: { caption: 'Foto — Teppiche', alt: 'Teppiche' },
      },
    ],
    workshop: {
      kicker: '03 · Bald',
      title: 'Webstuhl-Workshops',
      text: 'Workshops zum Webstuhl und zur Teppichweberei sind in Planung. Melde dein Interesse an und du erhältst eine Einladung, sobald sie beginnen.',
      link: 'Interesse anmelden →',
    },
  },
  trails: {
    kicker: 'In der Natur',
    title: { lead: 'Wanderwege', emphasis: 'um den Hof' },
    intro:
      'Rund um Lesti gibt es kleine Wanderwege, die durch alte Wiesen und Wälder führen — durch eine Landschaft, die über Generationen bestellt wurde. Die Wege eignen sich für jeden Spaziergänger.',
    trails: [
      {
        name: 'Annemäe-Weg',
        text: 'Ein schöner Ausblick, ein stiller Spaziergang durch das Dorf und über die Felder.',
        note: 'Hinweis: Einige Abschnitte des Weges brauchen leichte Pflege — stellenweise verwachsen.',
        status: 'Offen',
      },
      {
        name: 'Hofrundweg',
        text: 'Eine kurze Runde um den Hof — vorbei an der Lesti-Eiche, der Scheune und dem alten Obstgarten. Geeignet für Kinder und ältere Gäste.',
        status: 'Offen',
      },
    ],
    infoTitle: 'Gut zu wissen',
    info: [
      'Die Wege stehen allen Besuchern offen',
      'Nach Regen mit schlammigem Boden rechnen',
      'Karten sind am Hof erhältlich',
      'Haustiere willkommen, bitte die Natur respektieren',
    ],
  },
  gallery: {
    kicker: 'Bilder aus Lesti',
    title: 'Galerie',
    allLink: 'Alle Bilder →',
    hero: {
      caption: 'Archivraum — Bücher, Familienaufzeichnungen und Erinnerungen',
      alt: 'Der Archivraum von Lesti',
    },
    tiles: [
      { caption: 'Die Lesti-Eiche', alt: 'Die Lesti-Eiche' },
      { caption: 'Der Garten', alt: 'Der Garten' },
      { caption: 'Werkzeuge', alt: 'Werkzeuge' },
      { caption: 'Hofarbeit', alt: 'Hofarbeit' },
    ],
    bottomTiles: [
      { title: 'Teppichbilder', subtitle: 'Fotos fehlen — willkommen!', alt: 'Teppichbilder' },
      { title: 'Margots Strickarbeiten', subtitle: 'Mützen, Handschuhe, Socken', alt: 'Mützen, Handschuhe, Socken' },
      { title: 'Margots Hausschuhe & Socken', subtitle: 'Handgemachte Wollschuhe', alt: 'Handgemachte Wollschuhe' },
    ],
  },
  blog: {
    kicker: 'Neues und Gedanken',
    title: 'Blog',
    allLink: 'Alle Beiträge →',
    posts: [
      {
        date: 'Juni 2025',
        title: 'Johanni in Lesti — Feuer, Gesang und die alte Eiche',
        text: 'In diesem Jahr kamen Nachbarn, Freiwillige und Interessierte zu Johanni zusammen, um ein Feuer zu entzünden, zu singen und beieinander zu sein — so wie es immer war.',
        read: 'Lesen →',
      },
      {
        date: 'April 2025',
        title: 'Freiwillige restaurierten die Wände der alten Scheune',
        text: 'An einem einzigen Wochenende fanden sich über zwei Dutzend Helferpaare zusammen, um die Steinmauern der Scheune aus dem 19. Jahrhundert zu dokumentieren und zu stabilisieren.',
        read: 'Lesen →',
      },
      {
        date: 'Februar 2025',
        title: 'Handwerksworkshops 2025 — Interessierte mögen sich eintragen',
        text: 'Im Frühjahr sind mehrere Handwerkstage geplant. Die Webstuhl-Workshops sind in Vorbereitung — Interessierte benachrichtigen wir, sobald die Termine feststehen.',
        read: 'Lesen →',
      },
    ],
  },
  visit: {
    kicker: 'Komm und sieh',
    title: 'Besuche Lesti',
    intro:
      'Besuche finden von Mai bis September statt, von Montag bis Freitag, nur mit Voranmeldung. Bitte nimm Kontakt auf — wir vereinbaren einen Termin.',
    note: 'Tickets und Zahlung erfolgen nur vor Ort — es gibt keinen Online-Verkauf.',
    cta: 'Besuch anmelden',
    practicalTitle: 'Praktisches',
    locationLabel: 'Lage',
    location: ['Hof Suure-Lesti', 'Dorf Kildu, Gemeinde Põhja-Sakala', 'Landkreis Viljandi, Estland'],
    hoursLabel: 'Öffnungszeiten',
    hours: ['Mai – September', 'Montag – Freitag'],
    hoursNote: 'Nur mit Voranmeldung',
    phoneLabel: 'Telefon',
    phones: [
      { name: 'Hiie', number: '56 49 9498', tel: '+3725649498' },
      { name: 'Markus', number: '5665 4627', tel: '+37256654627' },
    ],
    emailLabel: 'E-Mail',
    exchangeTitle: 'Der Hof und du',
    barterLabel: 'Tauschhandel',
    barter:
      'Der Hof bietet Tauschhandel — Erzeugnisse vom Feld, Handarbeit und andere Hofprodukte im Austausch. Frag vor Ort nach, was es gerade gibt.',
    donationsLabel: 'Spenden',
    donations:
      'Möchtest du die Arbeit des Hofes unterstützen? Ein Spendenkonto ist in Entstehung — bald verfügbar. Vor Ort kann ebenfalls gespendet werden.',
    overnightLabel: 'Übernachtung auf dem Hof',
    overnight:
      'Die Möglichkeit, im Hofmuseum zu übernachten — gegen Spende, unter bescheidenen Bedingungen (kein fließendes Wasser, kein Strom).',
    overnightLink: 'Mehr erfahren ↑',
  },
  footer: {
    brand: 'Lesti',
    description: ['Hof- und Herrengutsmuseum · Viljandimaa, Estland', 'Hof Suure-Lesti, Dorf Kildu, Gemeinde Põhja-Sakala'],
    links: [
      { href: '#meist', label: 'Über uns' },
      { href: '#talutoo', label: 'Hofarbeit' },
      { href: '#muuseum', label: 'Museum' },
      { href: '#oobumine', label: 'Übernachtung' },
      { href: '#kasitoo', label: 'Handwerksstube' },
      { href: '#rajad', label: 'Wanderwege' },
      { href: '#galerii', label: 'Galerie' },
      { href: '#kulastu', label: 'Besuchen' },
    ],
    copyright: '© 2025 Hof Lesti und Herrengutsmuseum. Gemeinnütziger Verein.',
    tagline: 'Wir bewahren das Gedächtnis von Land, Geschichten und Handwerk.',
  },
};
