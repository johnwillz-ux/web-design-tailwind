import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1, bigShoe2 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { statistics, shoes } from "../constants";

const Hero = () => {
  const [ShoeImg, setShoeImg] = useState(bigShoe1);

  const handleChangeShoeImg = (newShowImg) => {
    setShoeImg(newShowImg);
  };

  return (
    <section
      id="Home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-[80%] gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>

        <h1 className=" mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold max-sm:leading-[82px] text-coral-red">
          {" "}
          <span className="text-black xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival <br />{" "}
          </span>{" "}
          <span className="inline-block mt-3"> Nike</span>{" "}
          <span className="text-black">Shoes</span>{" "}
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6  mb-14 sm:max-w-sm">
          Discover stylish Nike arrilval, quality compfor and innovation for
          your life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.key}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center relative bg-center bg-cover bg-hero xl:min-h-screen max-xl:py-40">
        <img
          src={ShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-10 max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgURL={shoe}
                changeShoeImg={(ShoeImg) => {
                  handleChangeShoeImg(ShoeImg);
                }}
                bigShoeImg={ShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
