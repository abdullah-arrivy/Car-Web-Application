export const dummyData = {
  brands: [
    {
      id: 1,
      name: "Toyota",
      logo: "https://placehold.co/1000x400/000000/FFF",
      description:
        "Toyota is a Japanese multinational automotive manufacturer headquartered in Toyota City, Japan. It is one of the largest car manufacturers in the world.",
      popular_models: [
        {
          id: 1,
          name: "Toyota Corolla",
          year: 2023,
          base_price: 25000,
          logo: "https://placehold.co/1000x400/000000/FFF",
        },
        {
          id: 2,
          name: "Toyota Camry",
          year: 2023,
          base_price: 28000,
          logo: "https://placehold.co/1000x400/000000/FFF",
        },
      ],
    },
    {
      id: 2,
      name: "Honda",
      logo: "https://placehold.co/1000x400/000000/FFF",
      description:
        "Honda is a Japanese multinational conglomerate known for its automobiles, motorcycles, and power equipment.",
      popular_models: [
        {
          id: 3,
          name: "Honda Civic",
          year: 2023,
          base_price: 22000,
          logo: "https://placehold.co/1000x400/000000/FFF",
        },
        {
          id: 4,
          name: "Honda Accord",
          year: 2023,
          base_price: 27000,
          logo: "https://placehold.co/1000x400/000000/FFF",
        },
      ],
    },
    {
      id: 3,
      name: "Suzuki",
      logo: "https://placehold.co/1000x400/000000/FFF",
      description:
        "Suzuki is a Japanese automaker known for its affordable and compact cars, motorcycles, and all-terrain vehicles.",
      popular_models: [
        {
          id: 5,
          name: "Suzuki Swift",
          year: 2023,
          base_price: 17000,
          logo: "https://placehold.co/1000x400/000000/FFF",
        },
        {
          id: 6,
          name: "Suzuki Vitara",
          year: 2023,
          base_price: 24000,
          logo: "https://placehold.co/1000x400/000000/FFF",
        },
      ],
    },
  ],
  modifications: [
    { id: 1, name: "Alloy Rims", price: 1200 },
    { id: 2, name: "Fog Lamps", price: 600 },
    { id: 3, name: "Leather Seats", price: 1500 },
    { id: 4, name: "Sunroof", price: 2000 },
  ],
  feedback: [
    { user_id: 101, comment: "Great app! Would love to see more car brands added in the future.", rating: 4 },
    { user_id: 102, comment: "The search functionality is awesome. Very easy to find cars!", rating: 5 },
  ],
};