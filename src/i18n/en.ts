import type { Dictionary } from './types';

export const en: Dictionary = {
  documentTitle: 'Lesti Farm — Viljandi County, Estonia',
  nav: {
    brand: 'Lesti',
    links: [
      { href: '#meist', label: 'About' },
      { href: '#tamm', label: 'The Lesti Oak' },
      { href: '#aed', label: 'Garden' },
      { href: '#talutoo', label: 'Farm Work' },
      { href: '#muuseum', label: 'Museum' },
      { href: '#oobumine', label: 'Overnight Stay' },
      { href: '#kasitoo', label: 'Craft Room' },
      { href: '#rajad', label: 'Trails' },
      { href: '#galerii', label: 'Gallery' },
    ],
    cta: 'Visit',
  },
  hero: {
    kicker: 'Viljandi County, Estonia',
    title: 'Lesti Farm',
    lead: 'A living heritage site in Viljandimaa — land, stories and handicraft passed down through generations.',
    readMore: 'Read more',
    articles: 'Articles ↓',
    alt: 'Lesti farm interior',
  },
  about: {
    kicker: 'About the farm',
    title: { lead: 'A place where the land', emphasis: 'speaks for itself' },
    paragraphs: [
      'Lesti is a historic farm complex in Viljandi County where generations of Estonians have lived and tilled the fields. The farm lies in a quiet landscape surrounded by old forests and meadows.',
      'Today Lesti operates as a non-profit heritage site and cultural centre. Here you can experience Estonian farm life not as an exhibit behind glass, but as a living, breathing place.',
      'The farm holds ruins, an old garden, tools and some of the oldest oaks in southern Estonia — including the famous Lesti Oak.',
    ],
    quote: '“The oak does not remember a single autumn — it remembers all of them.”',
    quoteSource: 'An old Estonian saying',
    statsLabel: 'Lesti in numbers',
    stats: [
      { value: '18th c.', label: 'First written records' },
      { value: '300+', label: 'Years of cultivation' },
      { value: '1 oak', label: 'The old Lesti Oak' },
      { value: 'NGO', label: 'A community-run farm' },
    ],
  },
  articles: {
    kicker: 'From the archive',
    title: 'Articles',
    allLink: 'All articles →',
    items: [
      {
        tag: 'History',
        image: { caption: 'Photo — the farm’s old buildings', alt: 'The farm’s old buildings' },
        date: 'March 2024',
        title: 'Lesti Farm through the centuries',
        excerpt:
          'The earliest records of the Lesti land date from the 18th century. Who lived here? What did they grow? What remains of them?',
        readMore: 'Continue reading →',
      },
      {
        tag: 'Culture',
        image: { caption: 'Photo — a rug on the loom', alt: 'A rug on the loom' },
        date: 'January 2024',
        title: 'The art of old rugs in Viljandi County',
        excerpt:
          'On weaving and rug-making — a craft form that has survived in the region for generations.',
        readMore: 'Continue reading →',
      },
      {
        tag: 'Heritage',
        image: { caption: 'Repro — a Köler painting', alt: 'Reproduction of a Köler painting' },
        date: 'November 2023',
        title: 'Johann Köler and Lesti: the artist’s roots',
        excerpt:
          'Köler was the first Estonian artist with an academic education. His mother was born at Lesti farm.',
        readMore: 'Continue reading →',
      },
    ],
  },
  oak: {
    kicker: 'The old oak',
    title: 'The Lesti Oak',
    paragraphs: [
      [
        'In the heart of the farm stands an old oak — ',
        { em: 'the Lesti Oak' },
        '. Trees like this have always been special in Estonia: meetings have been held beneath them, holidays celebrated, stories told.',
      ],
      [
        'This oak is especially important, because beside it ',
        { strong: 'Johann Köler’s' },
        ' (1826–1899) mother was born — the man who grew into Estonia’s first academically trained artist and a shaper of national culture.',
      ],
      ['The oak is alive to this day. It has simply always been here.'],
    ],
    imageCaption: 'Photo — the Lesti Oak, portrait',
    imageAlt: 'The Lesti Oak',
  },
  koler: {
    kicker: 'Birthplace and heritage',
    title: { lead: 'Johann Köler', emphasis: 'and Lesti' },
    paragraphs: [
      'Johann Köler (1826–1899) is one of the most important figures in Estonian cultural history. He was the first Estonian to receive an academic art education — he studied at the Imperial Academy of Arts in Saint Petersburg and rose to become court painter to Emperor Alexander II.',
      'During the Estonian national awakening Köler was one of the movement’s leading figures. He united folk tradition with European high culture and supported the Estonian language and education.',
      'His mother was born at Lesti farm. This bond makes Lesti a place directly tied to Estonian cultural history. The farm has a small memorial corner dedicated to him, together with archival materials.',
    ],
    portrait: {
      label: 'Portrait',
      name: 'Johann Köler',
      dates: '1826 – 1899',
      roles: ['Artist · National figure', 'Court painter', 'Son of Lesti farm'],
    },
    onsite: {
      label: 'On site at the farm',
      text: 'Memorial corner · Archival materials · The Köler family genealogy',
    },
  },
  garden: {
    kicker: 'Living heritage',
    title: { lead: 'The garden and', emphasis: 'the working land' },
    items: [
      {
        num: '01',
        title: 'Old plant varieties',
        text: 'The kitchen garden grows heirloom varieties typical of old Estonian farm gardens — medicinal herbs, rye varieties and root vegetables cultivated here for generations.',
      },
      {
        num: '02',
        title: 'Seasonal work',
        text: 'Lesti follows the traditional agricultural calendar. Visitors can take part in seasonal activities — from spring planting to the autumn harvest.',
      },
      {
        num: '03',
        title: 'Orchard and meadow',
        text: 'Old apple and pear trees and natural meadows surround the farmyard. The orchard awaits restoration — some old trees still stand, and the garden needs a careful hand.',
      },
    ],
    images: [
      { caption: 'Photo — the garden in spring', alt: 'The garden in spring' },
      { caption: 'Photo — the autumn harvest', alt: 'The autumn harvest' },
    ],
  },
  farmWork: {
    kicker: 'Hands in the soil',
    title: { lead: 'Come', emphasis: 'do farm work' },
    paragraphs: [
      'Helping hands are always welcome at Lesti. Planting, weeding, harvesting — the rhythm of traditional farming is open to anyone who wants to get their hands into the soil.',
      [
        'The work is voluntary and unpaid. At Lesti, communal farm work is not a service — it is ',
        { em: 'the joy of work itself' },
        '. For a city child it opens a chance to learn things no schoolbook contains: how a potato comes out of the ground, when a beet needs thinning, what a harvest means.',
      ],
      'Come for a day. Come with your family. Age doesn’t matter — we’ll find suitable work for everyone.',
    ],
    seasons: [
      {
        label: 'Spring',
        title: 'Planting',
        text: 'Planting potatoes, vegetables and herbs lets every pair of hands feel how something begins.',
      },
      {
        label: 'Summer',
        title: 'Weeding and tending',
        text: 'The garden needs a watchful eye. Weeding is meditative work — with good company, time passes before you notice.',
      },
      {
        label: 'Autumn',
        title: 'Harvest',
        text: 'Bringing in the harvest is the most important work of the year. Together it is also the most joyful.',
      },
    ],
    closing: [
      { strong: 'What do you get in return?' },
      ' Fresh air, a shared lunch and stories to carry back to the city. No money is paid or asked for.',
    ],
  },
  museum: {
    kicker: 'On site at the farm',
    title: { lead: 'Tools', emphasis: 'and ruins' },
    paragraphs: [
      'Lesti farm holds a number of old buildings — some still standing, some slowly sinking back into the earth. These ruins are not mere decay. They are full of stories.',
      'The tool collection holds items that once belonged to everyday life on every Estonian farm: wooden ploughs, flax-processing tools, grain cleaners, baskets and ironwork forged by hand.',
    ],
    items: [
      { num: '01', title: 'Field tools', text: 'Iron and wooden hand tools, weaving equipment' },
      { num: '02', title: 'Building ruins', text: 'Remains of the threshing barn, stone foundations, timber frames' },
      { num: '03', title: 'Archive room', text: 'Photographs, documents, local family stories' },
      { num: '04', title: 'Guided walk', text: 'Seasonal tours with local guides' },
    ],
  },
  overnight: {
    kicker: 'In the farm museum',
    title: 'A night at the farm',
    paragraphs: [
      'It is possible to stay overnight at the Lesti farm museum. Accommodation runs on donations — there is no fixed price.',
      'The conditions are modest: no running water and no electricity. It is an authentic experience of farm life — an exotic discovery for seasoned travellers who value a connection with the past.',
      'Booking in advance is required. Write to us and we’ll agree on a time.',
    ],
    conditionsLabel: 'Conditions',
    conditions: [
      'Accommodation by donation — no fixed price',
      'No running water or electricity',
      'Booking in advance is required',
      'Suited for travellers with a sense of discovery',
    ],
    quote: '“A night in Estonia’s oldest farm atmosphere — an experience no hotel can offer.”',
    book: 'Book a night',
  },
  craft: {
    kicker: 'Handicraft',
    title: 'Craft room',
    paragraphs: [
      'The Lesti craft room is a place where old skills are not museum pieces — they can be touched, experienced and tried first-hand. The textile collection documents the craft traditions of Viljandi County: rugs, coverlets and linen fabrics.',
      [
        'The farm is also home to ',
        { strong: 'Margot Gouram' },
        ', whose hand-crocheted and knitted pieces can be found here: hats, mittens, socks and wool slippers. All available on site.',
      ],
      'Craft workshops are in planning. If you are interested, please sign up — we’ll let you know once dates are confirmed.',
    ],
    tags: ['Textile collection', "Margot's knits", 'Workshops — coming soon'],
    heroImage: { caption: 'Photo — rug pattern', alt: 'Rug pattern' },
    cards: [
      {
        num: '01',
        title: "Margot's knits",
        text: 'Hand-crocheted and knitted: hats, mittens, socks, wool slippers. Each one unique, made by hand.',
        image: { caption: 'Photo — hats, mittens, socks', alt: 'Hats, mittens, socks' },
      },
      {
        num: '02',
        title: 'Rugs and textiles',
        text: 'Rugs with the geometric patterns of Viljandi County — hand-woven pieces carrying the region’s characteristic designs and colours.',
        image: { caption: 'Photo — rugs', alt: 'Rugs' },
      },
    ],
    workshop: {
      kicker: '03 · Coming soon',
      title: 'Loom workshops',
      text: 'Workshops on loom weaving and rug-making are in planning. Register your interest and you’ll receive an invitation when they begin.',
      link: 'Register interest →',
    },
  },
  trails: {
    kicker: 'In nature',
    title: { lead: 'Hiking trails', emphasis: 'around the farm' },
    intro:
      'Around Lesti lie small hiking trails that lead through old meadows, forest and a landscape tilled by generations. The trails suit every walker.',
    trails: [
      {
        name: 'Annemäe trail',
        text: 'A beautiful view, a quiet walk through the village and fields.',
        note: 'Note: some sections of the trail need light maintenance — overgrown in places.',
        status: 'Open',
      },
      {
        name: 'Farmyard walking loop',
        text: 'A short loop around the farm — past the Lesti Oak, the storehouse and the old orchard. Suitable for children and older visitors.',
        status: 'Open',
      },
    ],
    infoTitle: 'Good to know',
    info: [
      'The trails are open to all visitors',
      'Expect muddy ground after rain',
      'Maps are available at the farm',
      'Pets welcome, please respect nature',
    ],
  },
  gallery: {
    kicker: 'Pictures of Lesti',
    title: 'Gallery',
    allLink: 'All pictures →',
    hero: {
      caption: 'Archive room — books, family records and memories',
      alt: 'Lesti archive room',
    },
    tiles: [
      { caption: 'The Lesti Oak', alt: 'The Lesti Oak' },
      { caption: 'The garden', alt: 'The garden' },
      { caption: 'Tools', alt: 'Tools' },
      { caption: 'Farm work', alt: 'Farm work' },
    ],
    bottomTiles: [
      { title: 'Rug pictures', subtitle: 'Photos missing — welcome!', alt: 'Rug pictures' },
      { title: "Margot's knits", subtitle: 'Hats, mittens, socks', alt: 'Hats, mittens, socks' },
      { title: "Margot's slippers & socks", subtitle: 'Handmade woolen footwear', alt: 'Handmade woolen footwear' },
    ],
  },
  blog: {
    kicker: 'News and thoughts',
    title: 'Blog',
    allLink: 'All posts →',
    posts: [
      {
        date: 'June 2025',
        title: 'Midsummer at Lesti — bonfire, song and the old oak',
        text: 'This year neighbours, volunteers and friends gathered for Midsummer to light the bonfire, sing and be together — as it has always been done.',
        read: 'Read →',
      },
      {
        date: 'April 2025',
        title: 'Volunteers restored the walls of the old storehouse',
        text: 'In a single weekend, more than two dozen pairs of hands came together to document and stabilise the stone walls of the 19th-century storehouse.',
        read: 'Read →',
      },
      {
        date: 'February 2025',
        title: 'Craft workshops 2025 — sign up if you are interested',
        text: 'Several craft days are planned for spring. Loom workshops are in preparation — we’ll notify those interested once dates are confirmed.',
        read: 'Read →',
      },
    ],
  },
  visit: {
    kicker: 'Come and see',
    title: 'Visit Lesti',
    intro:
      'Visits take place from May to September, Monday to Friday, by pre-registration only. Please get in touch and we’ll agree on a time.',
    note: 'Tickets and payment are handled on site only — there is no online sales.',
    cta: 'Register a visit',
    practicalTitle: 'Practical',
    locationLabel: 'Location',
    location: ['Suure-Lesti farm', 'Kildu village, Põhja-Sakala municipality', 'Viljandi County, Estonia'],
    hoursLabel: 'Opening hours',
    hours: ['May – September', 'Monday – Friday'],
    hoursNote: 'By pre-registration only',
    phoneLabel: 'Phone',
    phones: [
      { name: 'Hiie', number: '56 49 9498', tel: '+3725649498' },
      { name: 'Markus', number: '5665 4627', tel: '+37256654627' },
    ],
    emailLabel: 'Email',
    exchangeTitle: 'The farm and you',
    barterLabel: 'Barter',
    barter:
      'The farm offers barter — produce from the fields, handicraft and other farm goods in exchange. Ask on site what is currently available.',
    donationsLabel: 'Donations',
    donations:
      'Want to support the farm’s work? A donations bank account is being set up — available soon. For now, donations are also accepted on site.',
    overnightLabel: 'Staying overnight',
    overnight:
      'An option to stay the night in the farm museum — by donation, in modest conditions (no running water or electricity).',
    overnightLink: 'Read more ↑',
  },
  footer: {
    brand: 'Lesti',
    description: ['Farm and Manor Museum · Viljandi County, Estonia', 'Suure-Lesti farm, Kildu village, Põhja-Sakala municipality'],
    links: [
      { href: '#meist', label: 'About' },
      { href: '#talutoo', label: 'Farm Work' },
      { href: '#muuseum', label: 'Museum' },
      { href: '#oobumine', label: 'Overnight Stay' },
      { href: '#kasitoo', label: 'Craft Room' },
      { href: '#rajad', label: 'Trails' },
      { href: '#galerii', label: 'Gallery' },
      { href: '#kulastu', label: 'Visit' },
    ],
    copyright: '© 2025 Lesti Farm and Manor Museum. Non-profit organisation.',
    tagline: 'We keep the memory of the land, the stories and the handicraft.',
  },
};
