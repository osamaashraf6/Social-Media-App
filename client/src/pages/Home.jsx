import React from "react";
import AsideLeft from "../components/AsideLeft";
import AsideCenter from "../components/AsideCenter";
import AsideRight from "../components/AsideRight";

const Home = () => {
  return (
    <>
      <main className="pt-[56px]">
        <section className="big_section" id="big_section">
          <div className="asides flex">
            <div className="aside_left w-[19%] fixed h-full z-10 overflow-y-auto">
              <AsideLeft />
            </div>
            <div className="aside w-[49%] pt-2 ml-[22%]">
              <AsideCenter />
            </div>
            <div className="aside_right w-[25%] mr-4 pt-2 fixed h-full ml-[74%] overflow-y-auto">
              <AsideRight />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
