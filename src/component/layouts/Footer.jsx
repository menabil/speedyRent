import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/foot.png";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-[150px] pb-20 bg-[#181818]">
      <Container>
        <Flex className={"mb-[150px]"}>
          <div className="w-[510px]">
            <Image imgSrc={Logo} />
            <p className="text-[#838383] text-[16px] leading-[180%] py-12.5 w-[355px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna
            </p>
            <Flex className={"gap-x-5"}>
              <div className="rounded-full w-[36px] h-[36px] bg-[#EA002D] relative">
                <FaTwitter className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl" />
              </div>
              <div className="rounded-full w-[36px] h-[36px] bg-[#EA002D] relative">
                <FaLinkedinIn className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl" />
              </div>
              <div className="rounded-full w-[36px] h-[36px] bg-[#EA002D] relative">
                <PiInstagramLogoFill className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl" />
              </div>
              <div className="rounded-full w-[36px] h-[36px] bg-[#EA002D] relative">
                <FaFacebook className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl" />
              </div>
            </Flex>
          </div>
          <div className="w-[280px]">
            <p className="text-[#FDFDFD] text-[32px] font-semibold mb-[45px]">
              Company
            </p>
            <ul>
              <li className="text-2xl text-[#838383] font-semibold">
                About Us
              </li>
              <li className="text-2xl text-[#838383] font-semibold py-[25px]">
                Features
              </li>
              <li className="text-2xl text-[#838383] font-semibold">Fleets</li>
              <li className="text-2xl text-[#838383] font-semibold pt-[25px]">
                Service
              </li>
            </ul>
          </div>
          <div className="w-[370px]">
            <p className="text-[#FDFDFD] text-[32px] font-semibold mb-[45px]">
              Service
            </p>
            <ul>
              <li className="text-2xl text-[#838383] font-semibold">
                Car Rental
              </li>
              <li className="text-2xl text-[#838383] font-semibold py-[25px]">
                Airport Transfer
              </li>
              <li className="text-2xl text-[#838383] font-semibold">
                Car Maintenance
              </li>
              <li className="text-2xl text-[#838383] font-semibold pt-[25px]">
                Roadside Assistance
              </li>
            </ul>
          </div>
          <div className="w-[270px]">
            <p className="text-[#FDFDFD] text-[32px] font-semibold mb-[45px]">
              Resource
            </p>
            <ul>
              <li className="text-2xl text-[#838383] font-semibold">Blog</li>
              <li className="text-2xl text-[#838383] font-semibold py-[25px]">
                Reference
              </li>
              <li className="text-2xl text-[#838383] font-semibold">FAQ</li>
              <li className="text-2xl text-[#838383] font-semibold pt-[25px]">
                Support
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-[#FDFDFD] text-[32px] font-semibold mb-[45px]">
              Information
            </p>
            <ul>
              <li className="text-2xl text-[#838383] font-semibold">
                Promotion
              </li>
              <li className="text-2xl text-[#838383] font-semibold py-[25px]">
                Career
              </li>
              <li className="text-2xl text-[#838383] font-semibold">Media</li>
              <li className="text-2xl text-[#838383] font-semibold pt-[25px]">
                License
              </li>
            </ul>
          </div>
        </Flex>
        <Flex className={"border-t border-[#838383] justify-between pt-7.5"}>
          <Flex className={"gap-x-10"}>
            <p className="text-[#FDFDFD] text-2xl font-semibold">
              Privacy Policy
            </p>
            <p className="text-[#FDFDFD] text-2xl font-semibold">
              Terms of Service
            </p>
          </Flex>
          <div className="text-[#FDFDFD] text-2xl font-semibold">
            © 2026 Pathfinderstd - All Rights Reserved
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
