import { FC } from "react";
import { PizzaDiscountSlider } from "../../components";

const HomePage: FC = () => {

  return (
      <section className="flex mt-[80px] mb-[100px] gap-[100px] text-[16px] origin-top">
        <PizzaDiscountSlider />
      </section>
  );
};

export default HomePage;
