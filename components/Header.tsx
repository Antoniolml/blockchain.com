import React from "react";
import Container from "./Container";
import { navigation } from "@/config/navigation";
import Alinks from "./Alinks";
import Logo from "./Logo";

const nav = navigation.mainNav;

const Header = () => {
  return (
    <Container
      as="header"
      fullSize
      className="border-b border-white animate-in slide-in-from-top duration-500 lg:border-none"
    >
      <Container as="nav" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden font-medium capitalize lg:inline-flex">
            <p>Creating digital strategies & Web experiences</p>
          </div>
          <div className="ml-10 space-x-8">
            {nav.map((item, index) => (
              <Alinks
                key={index}
                href={item.href}
                animatedUnderline
                className="text-base font-medium tracking-wide text-white"
              >
                {item.title}
              </Alinks>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Header;
