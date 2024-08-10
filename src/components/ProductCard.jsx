import { products } from "../constants";
import { star } from "../assets/icons";

const ProductCard = () => {
  return (
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-2 sm:gap-4 gap-14">
      {products.map((product) => (
        <div key={product.name}>
          <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img className="w-[280px] h-[280px]" src={product.imgURL} alt="" />
           


            <div className="mt-8 flex flex-col  justify-start gap-1">

            <div className="flex gap-1">
              <img src={star} alt="" width={15} /> <p className="text-slate-gray font-montserrat">(4.5)</p>
            </div>

            <p className="font-palanquin font-bold text-2xl">{product.name}</p>
            <p className="font-montserrat font-semibold text-coral-red text-2xl">{product.price}</p>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
