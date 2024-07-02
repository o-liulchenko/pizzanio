import { $api } from ".";

export const getAllPizzas = async () => {
  const { data } = await $api.get("/api/pizzas");
  return data;
};
