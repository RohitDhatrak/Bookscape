import faker from "faker";

faker.seed(123);

export const productData = [...Array(50)].map((item) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    author: faker.random.arrayElement([
        "Napoleon Hill",
        "J.K Rowling",
        "Dr Joseph Murphy",
        "Dale Carnegie",
        "George S. Clason",
        "Francesc Miralles",
        "Hector Garcia",
    ]),
    image: faker.random.image(),
    price: faker.commerce.price(),
    priceDiscounted: faker.commerce.price(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    dateAdded: faker.date.past().getTime(),
    salesCount: faker.datatype.number(),
    ratings: faker.random.arrayElement([
        0.5,
        1,
        1.5,
        2,
        2.5,
        3,
        3.5,
        4,
        4.5,
        5,
    ]),
    offer: faker.random.arrayElement([
        "Save 50",
        "70% bonanza",
        "Republic Day Sale",
    ]),
    genre: faker.random.arrayElement([
        "All Genres",
        "Biography",
        "Business",
        "Fantasy",
        "Fiction",
        "Historical Fiction",
        "Humor and Comedy",
        "Mystery",
        "Nonfiction",
    ]),
}));
