import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";

const Header = () => {
  return (
    <div className="py-10 fixed left-[50%] -translate-x-[50%] w-full z-1 ">
      <Container>
        <Flex className={"justify-between"}>
          <div className="cursor-pointer">
            <Image imgSrc={Logo} />
          </div>
          <div className="pr-40">
            <ul className="flex items-center gap-x-20">
              <li className="text-[#181818] text-2xl font-semibold cursor-pointer">
                Service
              </li>
              <li className="text-[#181818] text-2xl font-semibold cursor-pointer">
                About
              </li>
              <li className="text-[#181818] text-2xl font-semibold cursor-pointer">
                Fleet
              </li>
              <li className="text-[#181818] text-2xl font-semibold cursor-pointer">
                Blog
              </li>
              <li className="text-[#181818] text-2xl font-semibold cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <div className="text-[#EA002D] text-[16px] font-semibold py-5 px-15 hover:text-white hover:bg-transparent border-2 duration-300 border-white bg-white cursor-pointer">
            Call Us
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
