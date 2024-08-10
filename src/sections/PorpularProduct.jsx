import ProductCard from "../components/ProductCard";

const PorpularProduct = () => {
  return (
    <section className="w-full flex xl:flex-col flex-col justify-center min-h-[80%] gap-10 max-container">
      <div>
        <h1 className="text-coral-red font-palanquin mt-10 w-full text-4xl font-bold">
          Our <span className="text-black">Popular</span> Product
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-2 sm:max-w-md lg:max-w-lg ">
          Experience Top Notch Quality and style with our sort after selection,
          Discover a world of comfort and value
        </p>
      </div>

      <ProductCard />
    </section>
  );
};

export default PorpularProduct;
