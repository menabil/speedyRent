import Flex from "./Flex";
import Image from "./Image";
import One from "/src/assets/vhicels.png";
import { MdStar } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Products = ({ className, doller, ammount, day }) => {
  return (
    <div className={`${className}`}>
      <Image imgSrc={One} />
      <div className="mt-10">
        <Flex className={"justify-between mb-5"}>
          <div className="text-black text-5xl font-semibold">
            <span className="text-2xl text-[#EA002D]">{doller}</span>
            {ammount}
            <span className="text-2xl text-[#454545]">{day}</span>
          </div>
          <Flex className={"text-[#F6AD3F] text-4xl"}>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </Flex>
        </Flex>
        <Flex
          className={
            "border-b border-[#DFDFDF] pb-[25px] gap-x-6 text-2xl text-[#454545] font-semibold"
          }
        >
          <FaLocationDot className="text-4xl text-[#989898]" />
          <p>California</p>
        </Flex>
        <h5 className="py-7.5 text-[#181818] text-[32px] font-semibold">
          BMW M3 Series
        </h5>
        <Flex className="bg-[#EA002D] text-white text-2xl font-semibold gap-x-5 py-7.5 px-[144px]">
          <FaPhone />
          Booking Now
        </Flex>
      </div>
    </div>
  );
};

export default Products;
