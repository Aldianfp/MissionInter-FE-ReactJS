import React from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import Hero from "../components/molecules/Hero";
import Collection from "../components/molecules/Collection";
import CTA from "../components/molecules/CTA";
import DataForm from "../components/molecules/DataForm";
import DataList from "../components/molecules/DataList";

export default function Beranda() {
  return (
    <>
      <HomeLayouts>
        <Hero />
        <Collection />
        <CTA />
      </HomeLayouts>
    </>
  );
}
