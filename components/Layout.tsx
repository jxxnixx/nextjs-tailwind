import NavBar from "./NavBar";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <NavBar />
      <div>{props.children}</div>
    </>
  );
}
