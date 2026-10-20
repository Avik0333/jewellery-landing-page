export type Collection = {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
};

export const collections: Collection[] = [
  {
    id: "traditional",
    number: "01",
    title: "Traditional Elegance",
    description:
      "Distinctive designs inspired by the beauty of traditional adornment.",
    image: "/images/collection-traditional.jpg",
    imageAlt: "Traditional necklace from the jewellery collection",
    category: "TRADITIONAL",
  },
  {
    id: "everyday",
    number: "02",
    title: "Everyday Grace",
    description:
      "Thoughtful details for the moments that make up everyday life.",
    image: "/images/collection-everyday.jpg",
    imageAlt: "Mangalsutra jewellery design",
    category: "EVERYDAY",
  },
  {
    id: "statement",
    number: "03",
    title: "Statement Pieces",
    description:
      "Expressive designs that bring character to every occasion.",
    image: "/images/collection-statement.jpg",
    imageAlt: "Ornate jewellery piece displayed in close-up",
    category: "OCCASION",
  },
];