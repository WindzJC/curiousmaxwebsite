/**
 * Content editing guide
 *
 * Update this file first when you want to:
 * - replace section copy
 * - swap book or retailer links
 * - update SEO descriptions or social metadata
 * - update the trailer coming-soon section now
 * - add a live trailer embed later
 * - change which images appear in cards or the hero
 *
 * Image replacement
 * - Author portrait: /public/images/author-photo.png
 * - Poster / collage art: /public/images/joyce-poster.png
 * - Individual covers: /public/images/books/
 *
 * Trailer replacement
 * - Update the `trailerSpotlight` copy for the in-progress trailer section
 * - Add a live trailer embed or player section later when the final author-introduction trailer is ready
 */

export type NavItem = {
  href: string;
  label: string;
};

export type Book = {
  title: string;
  summary: string;
  href: string;
  formats: string[];
  tagline: string;
  coverSrc: string;
  coverAlt: string;
  coverImageUrl: string;
  coverPageUrl: string;
  schemaFormat: "EBook" | "Paperback";
  accent: string;
};

export type StoryPillar = {
  title: string;
  description: string;
};

export type ProofPoint = {
  title: string;
  description: string;
};

export type PressFeature = {
  eyebrow: string;
  title: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
};

export type TrailerSpotlight = {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  status: string;
  posterPosition: string;
  highlights: string[];
};

export type Trailer = {
  title: string;
  description: string;
  runtime?: string;
  label: string;
  status: string;
  posterPosition: string;
  embedUrl?: string;
  comingSoon?: boolean;
};

export type Retailer = {
  name: string;
  href: string;
  note: string;
};

export const siteMeta = {
  title: "Joyce B. Whaley | Curious Maxx Book Series",
  description:
    "Explore Joyce B. Whaley's Curious Maxx series, a faith-forward story world shaped by wonder, imagination, and meaningful family reading.",
  ogImage: "/images/joyce-poster.png",
  ogImageAlt: "Promotional artwork for Joyce B. Whaley and the Curious Maxx series",
  keywords: [
    "Joyce B. Whaley",
    "Curious Maxx",
    "Curious Maxx series",
    "children's books",
    "faith-based children's books",
    "Christian children's author",
    "family reading",
    "storybook faith",
  ],
};

export const siteImages = {
  authorPortrait: {
    src: "/images/author-photo.png",
    alt: "Portrait of author Joyce B. Whaley",
  },
  trailerPoster: {
    src: "/images/joyce-poster.png",
    alt: "Promotional artwork for Joyce B. Whaley and the Curious Maxx series",
  },
};

export const navItems: NavItem[] = [
  { href: "#books", label: "Books" },
  { href: "#about", label: "About" },
  { href: "#world", label: "Story World" },
  { href: "#trailers", label: "Trailers" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  eyebrow: "Joyce B. Whaley | Curious Maxx Series",
  title: "Where faith, wonder, and imagination meet.",
  description:
    "Step into the world of Curious Maxx—stories designed to inspire children and families through warmth, discovery, and meaningful storytelling.",
  subcopy:
    "Faith-inspired storytelling for family reading and wonder-filled discovery.",
  primaryCta: {
    label: "Explore the Books",
    href: "#books",
  },
  secondaryCta: {
    label: "Visit Author Site",
    href: "https://www.ravensnestministriesinc.com/",
  },
  statHighlights: [
    "Author, life coach, writer, and singer",
    "More than 38 years in banking and 35 years in Christian life",
    "Discoverable through major bookseller and ebook platforms",
  ],
};

export const books: Book[] = [
  {
    title: "StoryTime with Maxx: Featuring Jonah and the Whale",
    summary:
      "A sea-swept retelling that blends adventure, mercy, and biblical wonder into a warm reading moment children can revisit again and again.",
    href: "https://www.amazon.com/Curious-Maxx-Presents-StoryTime-Featuring-ebook/dp/B0FK32YBX1/",
    formats: ["Kindle Edition"],
    tagline: "Adventure meets grace",
    coverSrc: "/images/books/storytime-jonah.jpg",
    coverAlt:
      "Cover art for StoryTime with Maxx: Featuring Jonah and the Whale by Joyce B. Whaley",
    coverImageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/54/90/80/54908087-39a5-7212-c5c5-774ece0ae486/9798894791722.jpg/626x0w.jpg",
    coverPageUrl:
      "https://books.apple.com/us/book/the-curious-maxx-series-presents-storytime-with-maxx/id6749191285",
    schemaFormat: "EBook",
    accent: "from-[#7fc3ff]/30 via-[#67d0ff]/10 to-transparent",
  },
  {
    title: "Curious Maxx",
    summary:
      "The heart of the series, centered on Maxx's questions, growth, and childlike search for truth, trust, and the character of God.",
    href: "https://www.amazon.com/Curious-MAXX-Joyce-B-Whaley/dp/1973616173/",
    formats: ["Paperback"],
    tagline: "The series centerpiece",
    coverSrc: "/images/books/curious-maxx.jpg",
    coverAlt: "Cover art for Curious Maxx by Joyce B. Whaley",
    coverImageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Publication118/v4/74/56/ec/7456ec15-02ba-0d99-f18a-f35b3626077f/9781973616160.jpg/626x0w.jpg",
    coverPageUrl: "https://books.apple.com/us/book/curious-maxx/id1367802758",
    schemaFormat: "Paperback",
    accent: "from-[#f0c676]/35 via-[#f0c676]/10 to-transparent",
  },
  {
    title: "StoryTime with Maxx: Featuring the Beginning - God Creates",
    summary:
      "A luminous invitation into the opening wonder of Scripture, crafted to help children encounter creation with imagination and quiet awe.",
    href: "https://www.amazon.com/Curious-Maxx-StoryTime-Featuring-Beginning-ebook/dp/B0FK441K52/",
    formats: ["Kindle Edition"],
    tagline: "Creation with wonder",
    coverSrc: "/images/books/storytime-creation.jpg",
    coverAlt:
      "Cover art for StoryTime with Maxx: Featuring the Beginning - God Creates by Joyce B. Whaley",
    coverImageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Publication221/v4/bf/8a/3f/bf8a3fc8-1554-f3e5-9f27-26a91bfa7abc/9798894791661.jpg/626x0w.jpg",
    coverPageUrl:
      "https://books.apple.com/us/book/the-curious-maxx-series-presents-storytime-with-maxx/id6749191222",
    schemaFormat: "EBook",
    accent: "from-[#9cc6ff]/30 via-[#d6b36f]/10 to-transparent",
  },
];

export const about = {
  label: "About the Author",
  title: "Joyce B. Whaley writes from a life shaped by discernment, service, and creative expression.",
  body: [
    "Born and raised on the South Side of Chicago, Joyce B. Whaley says she recognized by age thirteen a gift for seeing and discerning matters with unusual clarity. After years of helping family and friends make sense of uncertainty and chaotic situations, she pursued certification in the work she enjoys most: helping others.",
    "Adapted from her Ravens Nest Ministries biography, Joyce's story also includes writing, singing, life coaching, more than thirty-eight years in banking, and more than thirty-five years in Christian life. She is a mother, grandmother, and author whose books are discoverable through major retail platforms.",
  ],
  quote: "The objective of life is advancement; enriching the mind, body, and soul.",
};

export const storyPillars: StoryPillar[] = [
  {
    title: "Imagination with purpose",
    description:
      "Each story opens a child-sized doorway into wonder, curiosity, and emotionally resonant discovery.",
  },
  {
    title: "Faith-inspired learning",
    description:
      "Biblical themes are presented with warmth and clarity, encouraging conversation rather than pressure.",
  },
  {
    title: "Meaningful family reading",
    description:
      "The series is designed for cozy read-aloud moments, gentle teaching, and memories made together.",
  },
];

export const proofPoints: ProofPoint[] = [
  {
    title: "Available through major bookseller channels",
    description:
      "Readers can discover Joyce B. Whaley's titles through Amazon, Barnes & Noble, Kobo, and other established bookseller platforms.",
  },
  {
    title: "Connected to Joyce B. Whaley's wider platform",
    description:
      "The Curious Maxx titles sit within Joyce's broader author and ministry presence, including Ravens Nest Ministries.",
  },
  {
    title: "Print and ebook formats across platforms",
    description:
      "Availability varies by retailer, with discovery paths for both print and digital readers.",
  },
];

export const pressFeature: PressFeature = {
  eyebrow: "Press Feature",
  title: "Featured in The New York Times Book Review",
  description:
    "Curious Maxx appears in a holiday reads print feature, adding a refined press note to the series presentation.",
  images: [
    {
      src: "/images/press/newyork-book-review-cover.png",
      alt: "The New York Times Book Review cover shown in a provided press photo",
    },
    {
      src: "/images/press/newyork-book-review-spread.png",
      alt: "Provided press photo showing Curious Maxx featured in a holiday reads print spread",
    },
  ],
};

export const trailerSpotlight: TrailerSpotlight = {
  eyebrow: "Trailer in Production",
  title: "A signature author-introduction trailer is in development.",
  description:
    "One polished trailer is in the works to introduce Joyce B. Whaley and the full Curious Maxx collection in a single cinematic presentation.",
  note:
    "Planned as an elevated overview of the author, the books, and the heart behind the series.",
  status: "Book trailer coming soon",
  posterPosition: "47% 34%",
  highlights: [
    "A unified introduction to Joyce B. Whaley and the Curious Maxx collection",
    "An author-focused overview presented in one cinematic piece",
    "Designed for future website, social, and retail promotion",
  ],
};

export const retailers: Retailer[] = [
  {
    name: "Amazon",
    href: "https://www.amazon.com/s?k=Joyce+B.+Whaley+Curious+Maxx",
    note: "Discover Joyce B. Whaley titles on Amazon",
  },
  {
    name: "Barnes & Noble",
    href: "https://www.barnesandnoble.com/s/Joyce%20B.%20Whaley%20Curious%20Maxx",
    note: "Browse Joyce B. Whaley listings on Barnes & Noble",
  },
  {
    name: "Kobo",
    href: "https://www.kobo.com/us/en/search?query=Joyce%20B.%20Whaley%20Curious%20Maxx",
    note: "Explore available ebook discovery on Kobo",
  },
  {
    name: "IngramSpark",
    href: "https://www.ingramspark.com/how-it-works/distribute",
    note: "See the distribution platform supporting wider discovery",
  },
];

export const contact = {
  email: "PFOTLLC@YAHOO.COM",
  phone: "(312) 933-8186",
  website: "www.ravensnestministriesinc.com",
  websiteHref: "https://www.ravensnestministriesinc.com/",
};

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl =
  configuredSiteUrl && configuredSiteUrl.length > 0
    ? configuredSiteUrl.replace(/\/?$/, "/")
    : contact.websiteHref;
