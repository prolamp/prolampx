export interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const toInitials = (name: string): string => {
  const parts = name
    .replace(/[^a-zA-Z\s]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }

  return name.slice(0, 2).toUpperCase();
};

export const testimonials: Testimonial[] = [
  {
    id: "writtenroses",
    rating: 5,
    quote:
      "The result looks very professional and stunning! Hope to work with the team again!",
    name: "Written Roses",
    role: "United States",
    initials: toInitials("Written Roses"),
  },
  {
    id: "davidp221",
    rating: 5,
    quote:
      "The team did everything we asked for and even went above and beyond — they blew our expectations!",
    name: "David P.",
    role: "United States",
    initials: toInitials("David P"),
  },
  {
    id: "charlottesville",
    rating: 5,
    quote: "Fast delivery and great at what the team does!",
    name: "Charlotteville",
    role: "United States",
    initials: toInitials("Charlotteville"),
  },
  {
    id: "rlynch0436",
    rating: 5,
    quote:
      "Very efficient and quick to deliver. The team is excellent at communication. I really appreciate their work!",
    name: "R. Lynch",
    role: "United States",
    initials: toInitials("R Lynch"),
  },
  {
    id: "marvinthemartin",
    rating: 5,
    quote:
      "Very professional work from the team. Easy to work with and highly recommended.",
    name: "Marvin The Martin",
    role: "Canada",
    initials: toInitials("Marvin The Martin"),
  },
  {
    id: "user04784373",
    rating: 5,
    quote:
      "Outstanding experience! Very fast delivery and great communication. The project met all our expectations. I highly recommend their services. Thank you!",
    name: "Verified Client",
    role: "Albania",
    initials: "VC",
  },
  {
    id: "brandonsmith434",
    rating: 5,
    quote:
      "Great team to work with. Extremely efficient, delivered excellent work at a very fair price, and completed everything well before the deadline. We will definitely reach out to them again.",
    name: "Brandon Smith",
    role: "United States",
    initials: toInitials("Brandon Smith"),
  },
  {
    id: "unamaa",
    rating: 5,
    quote:
      "The team communicates exceptionally well. We asked for a custom scope and expected to pay much more. The quote came in below what we were willing to spend, and the project was delivered on time while exceeding our expectations.",
    name: "Unamaa",
    role: "United States",
    initials: toInitials("Unamaa"),
  },
  {
    id: "dayana_21",
    rating: 5,
    quote:
      "Great job from the team — definitely exceeded our expectations! Excellent communication, 100% recommend!",
    name: "Dayana",
    role: "Germany",
    initials: toInitials("Dayana"),
  },
  {
    id: "rhinoflex-website",
    rating: 5,
    quote:
      "This team is brilliant — you have to see it to believe. We worked closely together to build a fantastic website, and it is one of the best sites we have launched for our business. The team is patient, quick, reliable, and above all delivers results. We will definitely work with them again.",
    name: "Rhinoflex",
    role: "Australia",
    initials: toInitials("Rhinoflex"),
  },
  {
    id: "stuart-julien",
    rating: 5,
    quote:
      "The team did an amazing job on our site — extremely dedicated, professional, patient, and thorough. We are fortunate to have found them and strongly recommend ProLampX.",
    name: "Stuart Julien",
    role: "Director, Rhinoflex · Australia",
    initials: toInitials("Stuart Julien"),
  },
  {
    id: "abcdesignstudio",
    rating: 5,
    quote:
      "The team did a wonderful job! We are very happy with the website they built for us. They went above and beyond, communicated clearly throughout, and delivered top-notch design. We will hire them again for our next project.",
    name: "AB Design Studio",
    role: "United States",
    initials: toInitials("AB Design Studio"),
  },
  {
    id: "chrismuha",
    rating: 5,
    quote:
      "The team delivered everything we asked for and met all of our requirements. Their customer service is fantastic, and we highly recommend them.",
    name: "Chris Muha",
    role: "United States",
    initials: toInitials("Chris Muha"),
  },
];

export const trustedClients = [
  "Rhinoflex",
  "AB Design Studio",
  "Brandon Smith",
  "Unamaa",
  "Chris Muha",
  "Written Roses",
  "Charlotteville",
  "Marvin The Martin",
  "Dayana",
  "David P.",
  "R. Lynch",
];
