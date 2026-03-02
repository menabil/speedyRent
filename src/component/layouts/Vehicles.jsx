import mixitup from "mixitup";
import Container from "../Container";
import Flex from "../Flex";
import Products from "../Products";
import { useEffect, useRef } from "react";

const Vehicles = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      mixitup(containerRef.current, {
        selectors: {
          target: ".mix",
        },
        animation: {
          duration: 300,
        },
      });
    }
  });

  return (
    <div className="mb-87.5">
      <Container>
        <div className="text-center w-272.5 mx-auto">
          <h3 className=" text-5xl font-semibold leading-[150%] text-[#181818] mx-auto mb-7.5">
            Choose Your Dream Car from Our Wide Range of Vehicles
          </h3>
          <p className="text-[16px] leading-[180%] text-[#454545] mx-auto mb-25">
            Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet
            molestie imperdiet quis enim varius. Vitae rutrum praesent a et
            cursus sagittis egestas blandit eget.
          </p>
        </div>
        <Flex className={"gap-x-25 justify-center"}>
          <div
            data-filter=".popular"
            className=" [&.mixitup-control-active]:bg-[#EA002D] [&.mixitup-control-active]:text-white text-[#454545] duration-400 bg-[#E8E8E8] text-2xl font-semibold py-7.5 px-20 cursor-pointer"
          >
            Popular
          </div>
          <div
            data-filter=".small"
            className=" [&.mixitup-control-active]:bg-[#EA002D] [&.mixitup-control-active]:text-white bg-[#E8E8E8] text-[#454545] text-2xl font-semibold py-7.5 px-20 cursor-pointer"
          >
            Small Car
          </div>
          <div
            data-filter=".large"
            className=" [&.mixitup-control-active]:bg-[#EA002D] [&.mixitup-control-active]:text-white text-2xl font-semibold py-7.5 px-20 cursor-pointer transition-all bg-[#E8E8E8] text-[#454545] "
          >
            Large Car
          </div>
          <div
            data-filter=".exclusive"
            className=" [&.mixitup-control-active]:bg-[#EA002D] [&.mixitup-control-active]:text-white bg-[#E8E8E8] text-[#454545] text-2xl font-semibold py-7.5 px-20 cursor-pointer"
          >
            Exclusive Car
          </div>
        </Flex>
        <div
          className={"mt-25 gap-x-10 gap-y-17.5 flex-wrap flex"}
          ref={containerRef}
        >
          <Products
            className="mix small"
            doller={"$"}
            ammount={50.23}
            day={"/day"}
          />
          <Products
            className="mix popular"
            doller={"$"}
            ammount={50.23}
            day={"/day"}
          />
          <Products
            className="mix exclusive"
            doller={"$"}
            ammount={50.23}
            day={"/day"}
          />
          <Products
            className="mix small"
            doller={"$"}
            ammount={50.23}
            day={"/day"}
          />
          <Products
            className="mix large"
            doller={"$"}
            ammount={50.23}
            day={"/day"}
          />
          <Products
            className="mix small"
            doller={"$"}
            ammount={50.23}
            day={"/day"}
          />
        </div>
      </Container>
    </div>
  );
};

export default Vehicles;
