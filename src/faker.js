import faker from "faker";

faker.seed(123);

export const productData = [...Array(50)].map((item) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    author: faker.name.firstName() + " " + faker.name.lastName(),
    image: faker.random.image(),
    price: faker.commerce.price(),
    priceDiscounted: faker.commerce.price(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
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
    level: faker.random.arrayElement([
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
