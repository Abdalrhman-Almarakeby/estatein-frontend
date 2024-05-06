const LOCATIONS_TYPE = ["all", "regional", "international"] as const;
const LOCATIONS = [
  {
    type: "regional",
    label: "Main Headquarters",
    location: "123 Estatein Plaza, City Center, Metropolis",
    description:
      "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    contact: {
      email: "info@estatein.com",
      phone: "+1 (123) 456-7890",
      location: {
        name: "Metropolis",
        link: "https://google.com/maps",
      },
    },
  },
  {
    type: "international",
    label: "Regional Offices",
    location: "456 Urban Avenue, Downtown District, Metropolis",
    description:
      "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
    contact: {
      email: "info@estatein.com",
      phone: "+1 (123) 456-7890",
      location: {
        name: "Metropolis",
        link: "https://google.com/maps",
      },
    },
  },
] as const;

export {LOCATIONS,LOCATIONS_TYPE}