import { FC } from "react";
import { useGetDiscountPizzasQuery } from "../../app/api/pizzaAPI";
import { baseURL } from "../../app/api";
import { Slider } from "../ui";

interface IDiscountPizzaSliderProps {}

const PizzaDiscountSlider: FC<IDiscountPizzaSliderProps> = () => {
  const { data, isLoading } = useGetDiscountPizzasQuery({});

  return (
    <div className="max-w-[1200px] rounded-lg border-slate-400 border-[1px] shadow-2xl p-4 mx-auto">
      {data && !isLoading ? (
        <Slider>
          {data.map((pizza) => (
            <div key={pizza._id} className="w-full flex flex-none gap-6">
              <div>
                <img
                  className="max-w-[250px]"
                  src={baseURL + pizza.image}
                  alt={pizza.name}
                />
              </div>
              <div className="flex flex-col gap-4">
                  <h1 className="font-semibold text-6xl">{pizza.name}</h1>
                  <p className="font-semibold text-l">
                    {pizza.size} см. {pizza.weight} г.
                  </p>
                  <p>{pizza.desc}</p>
                <span className="">Ціна: {pizza.price} грн.</span>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default PizzaDiscountSlider;
