import { Item } from "../types/item";

import * as faker from "faker";

const randomItems: Item[] = [];
for (let idx = 0; idx < faker.random.number(50); idx++) {
  randomItems.push({
    id: faker.random.number(),
    name: faker.commerce.productName()
  });
}

export const items: { count: number; values: Item[] } = {
  count: randomItems.length,
  values: randomItems
};
