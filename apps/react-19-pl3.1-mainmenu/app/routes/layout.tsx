import { defineCustomElements } from "@liebherr/patternlib/loader";
import { Outlet } from "react-router";

import Footer from "~/routes/footer/footer";
import { Header } from "~/routes/header/header";

import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Layout() {
  /*
  defineCustomElements() can only be called after the very initial render,
  therefore, we cannot put it inside the <App> component
  */
  defineCustomElements();

  return (
    <>
      <Header />
      <div className="app-content-wrapper">
        <div className="app-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
