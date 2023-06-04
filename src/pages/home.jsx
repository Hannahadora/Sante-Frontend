import React from "react";
import Footer from "../components/Footer";
import WhoWeAre from "../components/Home/WhoWeAre";
import reasons from "../../public/json/reasonToChoose";
import Hero from "../components/Home/Hero";
import Header from "../components/Header";
import JoinWaitListBtn from "../components/JoinWaitListBtn";

const home = () => {
  return (
    <>
    <Header />
    <Hero />
      <main className="w-full">
        <section className="app-container py-[60px]">
          <h3 className="lg:mb-[40px] mb-[30px] lg:text-[40px] text-[30px] text-center">
            Why Choose Santé
          </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[24px] gap-y-[32px]">
            {reasons.map((el, i) => (
              <div
                key={i}
                className="px-[20px] py-[28px] rounded-[16px] bg-[#F1FBFD]"
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-[60px] h-[60px]">
                    <img
                      src={el.icon}
                      alt={`${el.title}-icon`}
                      className="mb-[10px]"
                    />
                  </div>
                  <p className="sub-title_01">{el.title}</p>
                  <p>{el.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-[#F9F9F9] py-[60px]">
          <div className="app-container flex flex-col items-center justify-center">
            <h5 className="lg:w-[75%] w-[100%] text-center lg:mb-[60px] mb-[40px] lg:text-[28px] text-[22px]">
              Don’t miss out on the opportunity to take control of your mental
              health and unlock a brighter future
            </h5>
            <div className="lg:w-[75%] w-[100%] py-[8px] pr-[8px] pl-[16px] bg-[#fff] rounded-[16px] border border-[#D3D7D7] flex items-center justify-between">
              <div className="w-[50%]">
                <input
                  placeholder="Enter your email"
                  className="bg-transparent w-full"
                  type="text"
                  name="email"
                />
              </div>
              <div className="lg:w-[40%] w-[50%]">
                 <JoinWaitListBtn />
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhoWeAre />
      <Footer />
    </>
  );
};

export default home;
