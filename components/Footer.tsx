import React from "react";
import Container from "./Container";
import { navigation } from "@/config/navigation";
import Alinks from "./Alinks";
import Logo from "./Logo";

const nav = navigation.footerNav;

const Footer = () => {
  return (
    <Container fullSize as="footer">
      <hr className="mt-12 border-white" />
      <Container
        as="div"
        className="flex flex-col py-12 sm:px-6 md:flex-row md:items-center md:justify-between"
      >
        {nav.length && (
          <div className="flex justify-center space-x-6 md:order-2">
            {nav.map((item) => (
              <Alinks
                key={item.title}
                href={item.href}
                animatedUnderline
                className="font-medium text-white"
              >
                {item.title}
              </Alinks>
            ))}
          </div>
        )}
        <div className="mt-8 flex flex-col items-center justify-center font-medium md:order-1 md:mt-0 md:flex-row md:flex-wrap">
          <Logo textSize="text-base font-medium" />
          <p className="ml-0 mt-4 md:mt-0 md:ml-2">
            &copy; 2023 &mdash;{" "}
            <Alinks dottedLine animatedUnderline href="/">
              Desing and development by me
            </Alinks>
            .
          </p>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
