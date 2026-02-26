import Container from "../Container";
import Flex from "../Flex";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/bg.png)] bg-no-repeat bg-center bg-cover mb-50">
        <Container className={"relative  py-50"}>
          <div className="mt-25 mb-20">
            <h1 className="w-167 text-5xl font-semibold text-[#181818] leading-[150%]">
              Experience Ultimate Comfort and Convenience with <></>
              <span className="text-[#EA002D]">Speedy</span>
            </h1>
            <p className="text-[#454545] w-139 text-[16px] pt-7.5 pb-10">
              Lorem ipsum dolor sit amet consectetur. Purus viverra viverra amet
              molestie imperdiet quis enim varius. Vitae rutrum praesent a et
              cursus sagittis egestas blandit eget.
            </p>
            <Flex className={"gap-x-5"}>
              <div className=" py-5 px-15 bg-[#EA002D] text-white text-[16px] font-semibold cursor-pointer">
                Get Started
              </div>
              <div className="duration-300 py-5 px-5  text-[#181818] text-[16px] font-semibold cursor-pointer hover:bg-[#EA002D] hover:text-white">
                See All Cars
              </div>
            </Flex>
          </div>
          <div className="py-12.5 px-7.5 bg-white absolute bottom-0 left-0 translate-y-1/2 shadow-Sad">
            <Flex className={"gap-x-10"}>
              <div className="bg-[#F5F5F5] border border-[#CEC8C8] cursor-pointer flex items-center gap-x-5 px-5 py-7.5 w-[343px]">
                <FaLocationDot className="text-[#989898] text-4xl" />
                <p className="text-[#454545] text-2xl font-semibold">
                  Your Location
                </p>
              </div>
              <div className="bg-[#F5F5F5] border border-[#CEC8C8] cursor-pointer flex items-center gap-x-5 px-5 py-7.5 w-[328px]">
                <FaCalendarDay className="text-[#989898] text-4xl" />
                <p className="text-[#454545] text-2xl font-semibold">
                  Pick Up Date
                </p>
              </div>
              <div className="bg-[#F5F5F5] border border-[#CEC8C8] cursor-pointer flex items-center gap-x-5 px-5 py-7.5 w-[321px]">
                <FaCalendarDay className="text-[#989898] text-4xl" />
                <p className="text-[#454545] text-2xl font-semibold">
                  Return Date
                </p>
              </div>
              <div className="bg-[#EA002D] flex items-center gap-x-5 px-12.5 py-7.5 w-[310px] text-white cursor-pointer">
                <FaSearch className="text-4xl" />
                <p className="text-2xl font-semibold">Search Now</p>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
