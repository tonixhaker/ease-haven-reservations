export interface Apartment {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  location: string;
  pricePerDay: number;
  pricePerWeek: number;
  pricePerMonth: number;
  images: string[];
  amenities: string[];
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  rating: number;
  reviewCount: number;
  ownerId: string;
}

export interface Booking {
  id: string;
  apartmentId: string;
  clientName: string;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
  status: "confirmed" | "completed" | "cancelled";
}

export const mockApartments: Apartment[] = [
  {
    id: "apt-1",
    title: "Luxury Beachfront Apartment",
    shortDescription: "Stunning ocean views from this modern beachfront property",
    description: "Experience luxury living with breathtaking ocean views in this modern beachfront apartment. Wake up to the sound of waves and enjoy direct access to the pristine beach. This spacious property features high-end finishes, a gourmet kitchen, and a large balcony perfect for al fresco dining while watching the sunset over the water. The master bedroom includes a king-size bed and an ensuite bathroom with a rainfall shower and soaking tub. The second bedroom offers two twin beds, ideal for children or additional guests. The living area is bright and airy with floor-to-ceiling windows showcasing the magnificent coastline. Amenities include high-speed internet, smart TVs, washer/dryer, and secure parking.",
    location: "Miami Beach, FL",
    pricePerDay: 250,
    pricePerWeek: 1600,
    pricePerMonth: 5800,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop"
    ],
    amenities: [
      "Wi-Fi",
      "Air conditioning",
      "Fully equipped kitchen",
      "Washer/Dryer",
      "Ocean view",
      "Balcony",
      "Pool",
      "Gym",
      "Parking"
    ],
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    rating: 4.9,
    reviewCount: 128,
    ownerId: "owner-1"
  },
  {
    id: "apt-2",
    title: "Cozy Downtown Loft",
    shortDescription: "Stylish loft in the heart of the city's cultural district",
    description: "Immerse yourself in urban living in this beautifully renovated loft apartment located in the heart of downtown. This stylish space features exposed brick walls, high ceilings with original wooden beams, and large factory windows that flood the space with natural light. The open-concept layout includes a modern kitchen with stainless steel appliances, a comfortable living area with a smart TV, and a dining space perfect for entertaining. The bedroom area is separated by a custom bookshelf, providing privacy while maintaining the loft aesthetic. Additional features include in-unit laundry, fast WiFi, and a work desk. You'll be steps away from top-rated restaurants, cafes, galleries, and public transportation.",
    location: "Portland, OR",
    pricePerDay: 180,
    pricePerWeek: 1150,
    pricePerMonth: 3900,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
    ],
    amenities: [
      "Wi-Fi",
      "Air conditioning",
      "Smart TV",
      "Washer/Dryer",
      "Fully equipped kitchen",
      "Work desk",
      "Walk to restaurants",
      "Bike storage"
    ],
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    rating: 4.8,
    reviewCount: 93
  },
  {
    id: "apt-3",
    title: "Modern Mountain Retreat",
    shortDescription: "Contemporary cabin with breathtaking mountain views",
    description: "Escape to this contemporary mountain retreat offering panoramic views of the surrounding peaks. This newly built cabin combines rustic charm with modern amenities, featuring floor-to-ceiling windows that showcase the spectacular landscape. The interior boasts an open floor plan with a stone fireplace, comfortable seating, and a dining area that opens to a fully equipped kitchen with premium appliances. Two bedrooms provide peaceful sleeping spaces with luxury linens, and both bathrooms feature rainfall showers and heated floors. The expansive deck includes outdoor furniture and a hot tub where you can relax under the stars. Perfect for outdoor enthusiasts, the property is minutes from hiking trails, ski resorts, and fishing spots.",
    location: "Aspen, CO",
    pricePerDay: 320,
    pricePerWeek: 2100,
    pricePerMonth: 7500,
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2065&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542928658-22251e208ac1?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=2070&auto=format&fit=crop"
    ],
    amenities: [
      "Mountain view",
      "Fireplace",
      "Hot tub",
      "Fully equipped kitchen",
      "Wi-Fi",
      "Heating",
      "Outdoor deck",
      "BBQ grill",
      "Parking"
    ],
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 6,
    rating: 4.9,
    reviewCount: 76
  },
  {
    id: "apt-4",
    title: "Charming Historic Townhouse",
    shortDescription: "Elegant restored townhouse in a historic neighborhood",
    description: "Step back in time in this beautifully restored historic townhouse that combines period charm with modern comfort. Located in a picturesque neighborhood known for its architectural significance, this three-story home features original hardwood floors, decorative moldings, and a grand staircase. The spacious living room centers around an ornate fireplace, while the updated kitchen balances contemporary functionality with vintage aesthetics, including a farmhouse sink and marble countertops. Three well-appointed bedrooms offer comfortable retreats, with the master featuring a four-poster bed and ensuite bathroom with a clawfoot tub. The private backyard garden provides a serene outdoor space with a patio and mature plantings. You'll be within walking distance of parks, cafes, and boutiques in this coveted residential area.",
    location: "Charleston, SC",
    pricePerDay: 275,
    pricePerWeek: 1800,
    pricePerMonth: 6200,
    images: [
      "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=2072&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
    ],
    amenities: [
      "Wi-Fi",
      "Air conditioning",
      "Heating",
      "Fireplace",
      "Fully equipped kitchen",
      "Washer/Dryer",
      "Garden",
      "Patio",
      "Street parking"
    ],
    bedrooms: 3,
    bathrooms: 2.5,
    maxGuests: 6,
    rating: 4.7,
    reviewCount: 105
  },
  {
    id: "apt-5",
    title: "Sleek City Apartment",
    shortDescription: "Contemporary high-rise apartment with city skyline views",
    description: "Enjoy spectacular city views from this contemporary apartment located in a luxury high-rise building. Floor-to-ceiling windows showcase the impressive urban landscape, especially stunning at sunset and after dark. The interior features clean lines and modern design with high-end finishes throughout. The open-concept living and dining area includes comfortable seating and flows into a sleek kitchen with premium appliances and a breakfast bar. The bedroom offers a plush queen-size bed with hotel-quality linens and blackout curtains for restful sleep. Building amenities include a 24-hour doorman, state-of-the-art fitness center, rooftop terrace, and resident lounge. You'll be in the center of everything, with restaurants, shopping, entertainment venues, and public transportation just steps away.",
    location: "Chicago, IL",
    pricePerDay: 200,
    pricePerWeek: 1300,
    pricePerMonth: 4500,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070&auto=format&fit=crop"
    ],
    amenities: [
      "City view",
      "Wi-Fi",
      "Air conditioning",
      "Heating",
      "Fully equipped kitchen",
      "Gym access",
      "Doorman",
      "Elevator",
      "Rooftop access"
    ],
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    rating: 4.8,
    reviewCount: 87
  },
  {
    id: "apt-6",
    title: "Sunny Mediterranean Villa",
    shortDescription: "Bright villa with private pool and Mediterranean garden",
    description: "Escape to this sun-drenched Mediterranean-style villa surrounded by lush gardens and offering complete privacy. The bright, airy interior features terracotta floors, white walls, and colorful accents that capture the essence of coastal living. Large windows and french doors throughout the home bring in abundant natural light and provide easy access to the outdoor spaces. The open living area includes comfortable seating and leads to a dining terrace through sliding glass doors. The well-equipped kitchen combines functionality with charm, featuring hand-painted tiles and modern appliances. Three bedrooms provide peaceful retreats, each with ceiling fans and quality linens. Outside, the private pool is surrounded by a stone patio with lounge chairs, a covered dining area, and mature gardens filled with fragrant plants. A perfect oasis for relaxing in the sunshine and enjoying outdoor living.",
    location: "Santa Barbara, CA",
    pricePerDay: 400,
    pricePerWeek: 2600,
    pricePerMonth: 9000,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=2070&auto=format&fit=crop"
    ],
    amenities: [
      "Private pool",
      "Garden",
      "Outdoor dining",
      "Wi-Fi",
      "Air conditioning",
      "Fully equipped kitchen",
      "Washer/Dryer",
      "Parking",
      "BBQ grill"
    ],
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    rating: 4.9,
    reviewCount: 62
  }
];

export const mockBookings: Booking[] = [
  {
    id: "booking-1",
    apartmentId: "apt-1",
    clientName: "John Smith",
    checkIn: "2023-12-01",
    checkOut: "2023-12-08",
    totalPrice: 1600,
    status: "completed"
  },
  {
    id: "booking-2",
    apartmentId: "apt-1",
    clientName: "Emma Johnson",
    checkIn: "2023-12-15",
    checkOut: "2023-12-22",
    totalPrice: 1600,
    status: "confirmed"
  },
  {
    id: "booking-3",
    apartmentId: "apt-2",
    clientName: "Michael Williams",
    checkIn: "2023-12-05",
    checkOut: "2023-12-10",
    totalPrice: 900,
    status: "cancelled"
  },
  {
    id: "booking-4",
    apartmentId: "apt-3",
    clientName: "Sarah Brown",
    checkIn: "2023-12-20",
    checkOut: "2023-12-27",
    totalPrice: 2100,
    status: "confirmed"
  },
  {
    id: "booking-5",
    apartmentId: "apt-4",
    clientName: "David Lee",
    checkIn: "2023-12-10",
    checkOut: "2023-12-15",
    totalPrice: 1375,
    status: "completed"
  }
];

export const getRandomApartments = (count: number): Apartment[] => {
  const shuffled = [...mockApartments].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getApartmentById = (id: string): Apartment | undefined => {
  return mockApartments.find(apartment => apartment.id === id);
};
