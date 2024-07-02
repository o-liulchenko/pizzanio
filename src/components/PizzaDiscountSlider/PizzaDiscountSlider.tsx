import { FC } from "react";

interface IPizzaProps {
  pizza: {
    image: string;
    name: string;
    price: number;
    discount: number;
  };
}

const PizzaDiscountCard: FC<IPizzaProps> = ({
  pizza: { image, name, price, discount },
}) => {
  return (
    <div>
      <div className="relative flex flex-col items-center">
      {/* <span className={styles.discount}>-{discount}%</span> */}
        <img className="block" src={image} alt={name} />
      <span className="text-slate-900 mt-[37px] mb-[16px] font-semibold">{name}</span>
      <span className="text-slate-900 mt-[37px] mb-[16px] font-semibold">
        {parseInt(`${price * ((100 - discount) / 100)}`)} грн.
      </span>
    </div>
      
    </div>
  );
};

export default PizzaDiscountCard;
