import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faSortDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import DropDown from "./components/DropDown/dropDown";
import logoImg from "./assets/logo.png";
import slide1Img from "./assets/slider/EFCC_10__storey_building_Jabi-Abuja.jpg";
import slide2Img from "./assets/slider/Acessing_the_EFCC_Eagle_Eye_App.jpg";
import slide3Img from "./assets/slider/EFCC_Corporate_Head_Quarters_Jabi-Abuja.jpg";
import slide4Img from "./assets/slider/EFCC_Corporate_Head_Quarters_Jabi-Abuja-1.jpg";
import slide5Img from "./assets/slider/parade002.jpg";

function App() {
  const [menuSearch, setMenuSearch] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <aside className={`fixed top-0 left-0 w-dvw h-dvh z-[999] bg-black/70 sl-animation ${sideBar ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div onClick={() => setSideBar(!sideBar)} className="absolute inset-0 w-full h-full z-10"></div>
        <div className={`absolute top-0 right-0 bg-red-80 z-20 sl-animation ${sideBar ? 'w-[300px]' : 'w-0'}`}>
          <div className="flex items-center justify-between bg-red-100 py-3 px-6">
            <a href=""><img src={logoImg} alt="" className="max-h-8" /></a>
            <button onClick={() => setSideBar(!sideBar)} className="h-8 w-8 rounded-full flex justify-center items-center text-ash-80 bg-white opacity-50 text-xs hover:bg-white/5 hover:opacity-75 hover:rotate-180 sl-animation"><FontAwesomeIcon icon={faXmark} /></button>
          </div>
          <div className="h-[calc(100dvh-40px)] overflow-y-auto p-8">
            <nav className="flex flex-col mb-8 pl-8 text-white/60">
              <a href="" className="block py-3 hover:text-white">Home</a>
              <DropDown name="About" list={["LEADERSHIP", "VISION & MISSION", "HISTORY OF EFCC", "BOARD MEMBERS", "THE ESTABLISHMENT ACT", "EFCC STRATEGIC PLAN"]} />
              <DropDown name="News & Information" list={["NEWS", "TRENDING NEWS", "WANTED PERSONS", "CARTOON ZONE"]} />
              <a href="" className="block py-3 hover:text-white">Convictions </a>
              <a href="" className="block py-3 hover:text-white">Channels of Reporting Complaints</a>
              <DropDown name="Resources" list={["INTERIM FORFEITURE", "EFCC OPERATIONAL STATISTICS", "ARCHIVES", "ARCHIVES", "SCAM & SAFETY", "EFCC ALERT", "EFCC STRATEGIC PLAN", "SPEECHES", "ZERO TOLERANCE", "ADVERT", "EAGLE EYE APP"]} />
              <a href="" className="block py-3 hover:text-white">Zonal Commands</a>
              <a href="" className="block py-3 hover:text-white">Contact Us</a>
              <a href="" className="block py-3 hover:text-white">GLOSSARY</a>
              <a href="" className="block py-3 hover:text-white">FAQ </a>
              <a href="" className="block py-3 hover:text-white">CAREERS</a>
              <a href="" className="block py-3 hover:text-white">Auction</a>
            </nav>
          </div>
        </div>
      </aside>

      <header className="fixed top-0 left-0 w-full bg-red-100 z-[99]">
        <div className="border-b border-white/10">
          <div className="sl-container">
            <ul className="w-full flex flex-wrap justify-end">
              <li className="border border-white/10">
                <a href="" className="flex items-center justify-center w-12 h-12 opacity-80 hover:opacity-100">
                  <svg className="h-4 w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                </a>
              </li>
              <li className="border border-white/10">
                <a href="" className="flex items-center justify-center w-12 h-12 opacity-80 hover:opacity-100">
                  <svg className="h-4 w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                  </svg>
                </a>
              </li>
              <li className="border border-white/10">
                <a href="" className="flex items-center justify-center w-12 h-12 opacity-80 hover:opacity-100">
                  <svg className="h-4 w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </li>
              <li className="border border-white/10">
                <a href="" className="flex items-center justify-center w-12 h-12 opacity-80 hover:opacity-100">
                  <svg className="h-4 w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sl-container">
          <div className="flex flex-wrap justify-between text-white">
            <div className="flex items-center justify-center border-x border-white/10 min-w-48 px-8">
              <a href=""><img src={logoImg} alt="logo" /></a>
            </div>
            <nav className="flex flex-row flex-auto items-center justify-center">
              <a href="" className="relative flex items-center h-full text-sm font-bold leading-[3] px-4 hover:text-red-80 after:absolute after:top-full after:left-0 after:w-full after:h-0.5 after:bg-red-80">Home</a>
              <a href="" className="group relative flex items-center h-full text-sm font-bold leading-[3] px-4">
                <span className="group-hover:text-red-80">About Us</span> <span className="ml-2 mb-2 text-xs group-hover:text-red-80"><FontAwesomeIcon icon={faSortDown} /></span>
                <ul className="absolute overflow-hidden top-full left-0 px-4 bg-red-100 max-h-0 group-hover:max-h-96 group-hover:py-4 sl-animation">
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">LEADERSHIP</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">VISION & MISSION</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">HISTORY OF EFCC</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">BOARD MEMBERS</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">THE ESTABLISHMENT ACT</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">EFCC STRATEGIC PLAN</a></li>
                </ul>
              </a>
              <a href="" className="group relative flex items-center h-full text-sm font-bold leading-[3] px-4">
                <span className="group-hover:text-red-80">News & Information</span> <span className="ml-2 mb-2 text-xs group-hover:text-red-80"><FontAwesomeIcon icon={faSortDown} /></span>
                <ul className="absolute overflow-hidden top-full left-0 px-4 bg-red-100 max-h-0 group-hover:max-h-96 group-hover:py-4 sl-animation">
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">NEWS</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">TRENDING NEWS</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">WANTED PERSONS</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">CARTOON ZONE</a></li>
                </ul>
              </a>
              <a href="" className="relative flex items-center h-full text-sm font-bold leading-[3] px-4 hover:text-red-80">Convictions</a>
              <a href="" className="group relative flex items-center h-full text-sm font-bold leading-[3] px-4">
                <span className="group-hover:text-red-80">Resources</span> <span className="ml-2 mb-2 text-xs group-hover:text-red-80"><FontAwesomeIcon icon={faSortDown} /></span>
                <ul className="absolute overflow-hidden top-full left-0 px-4 bg-red-100 max-h-0 group-hover:max-h-[30rem] group-hover:py-4 sl-animation">
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">EFCC OPERATIONAL STATISTICS</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">ARCHIVES</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">RED ALERT</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">SCAM & SAFETY</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">EFCC ALERT</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">EFCC STRATEGIC PLAN</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">SPEECHES</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">ZERO TOLERANCE</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">ADVERT</a></li>
                  <li className="w-max"><a href="" className="px-4 uppercase hover:text-red-80">EAGLE EYE APP</a></li>
                </ul>
              </a>
              <a href="" className="relative flex items-center h-full text-sm font-bold leading-[3] px-4 hover:text-red-80">Auction</a>
            </nav>
            <div className="flex items-center min-w-52">
              <div className="relative w-28 h-28 border-l border-white/10">
                <div className={`overflow-hidden flex absolute right-0 top-0 h-28 sl-animation z-10 duration-500 ${menuSearch ? 'w-[26.66rem] bg-red-60/80' : 'w-28'}`}>
                  <button onClick={() => setMenuSearch(!menuSearch)} className="flex items-center justify-center h-28 w-28"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                  <input type="text" placeholder="Search ..." className={`h-full pr-1 ${menuSearch ? 'block' : 'hidden'}`} />
                </div>
              </div>
              <div className="relative w-28 h-28 border-x border-white/10 cursor-pointer">
                <button onClick={() => setSideBar(!sideBar)} className="absolute top-1/2 left-12 -translate-y-1/2"><FontAwesomeIcon icon={faBars} /></button>
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => setMenuSearch(!menuSearch)} className={`absolute inset-0 w-dvh h-dvh z-0 ${menuSearch ? 'block' : 'hidden'}`}></div>
      </header>

      <section>
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><div className="relative">
            <img src={slide1Img} alt="slider" />
            <div className="absolute bottom-0 right-0 flex flex-col items-center text-white">
              <a href="" className="w-fit bg-red-80 uppercase font-bold text-sm py-5 px-12 mb-9 hover:opacity-85">Professionalism, </a>
              <a href="" className="w-fit bg-red-80 uppercase font-bold text-sm py-5 px-12 opacity-75 hover:opacity-100">EFCC 10 – storey building, Jabi - Abuja.</a>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="relative">
            <img src={slide5Img} alt="slider" />
            <div className="absolute bottom-0 right-0 flex flex-col items-center text-white">
              <a href="" className="w-fit bg-red-80 uppercase font-bold text-sm py-5 px-12 mb-9 hover:opacity-85">Courage,</a>
              <a href="" className="w-fit bg-red-80 uppercase font-bold text-sm py-5 px-12 opacity-75 hover:opacity-100">Cadet Officers of the EFCC on parade during the passing out Parade (POP) of D1 Course 5 at the Nigerian Defence Academy (NDA), Kaduna.</a>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="relative">
            <img src={slide4Img} alt="slider" />
            <div className="absolute bottom-0 right-0 flex flex-col items-center text-white">
              <a href="" className="w-fit bg-red-80 uppercase font-bold text-sm py-5 px-12 mb-9 hover:opacity-85">Collaboration.</a>
              <a href="" className="w-fit bg-red-80 uppercase font-bold text-sm py-5 px-12 opacity-75 hover:opacity-100">EFCC Corporate Head Quarters,  Jabi - Abuja - 1</a>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="relative">
            <img src={slide2Img} alt="slider" />
            <div className="absolute bottom-0 right-0 flex flex-col items-center text-white">
              <a href="" className="w-fit bg-red-80 uppercase font-bold text-sm py-5 px-12 opacity-75 hover:opacity-100">Accessing the EFCC Eagle Eye App</a>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="relative">
            <img src={slide3Img} alt="slider" />
            <div className="absolute bottom-0 right-0 flex flex-col items-center text-white">
              <a href="" className="w-fit bg-red-80 uppercase font-bold text-sm py-5 px-12 mb-9 hover:opacity-85">Integrity, </a>
              <a href="" className="w-fit bg-red-80 uppercase font-bold text-sm py-5 px-12 opacity-75 hover:opacity-100">EFCC Corporate Head Quarters,  Jabi- Abuja.</a>
            </div>
          </div></SwiperSlide>
        </Swiper>
      </section>

      <section className="pt-12 pb-8">
        <div className="sl-container">
          <div className="bg-red-100 text-white mb-2.5 px-4 text-5xl shadow-md">
            <div className="pr-6 pb-5">
              <br />
              <span className="text-3xl"><strong>VISION</strong></span>
              <br />
              <span className="text-xl">A Nigeria free of economic and financial crimes.</span>
            </div>
            <div className="pr-6 pb-5">
              <br />
              <span className="text-3xl"><strong>MISSION</strong></span>
              <br />
              <span className="text-xl">To eradicate economic and financial crimes through prevention, enforcement and coordination.</span>
            </div>
            <div className="pr-6 pb-5">
              <br />
              <span className="text-3xl"><strong>CORE VALUES</strong></span>
              <br />
              <span className="text-xl">The core values of the EFCC are Integrity, Professionalism, Courage, and Collaboration.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-100 text-white-100 pt-8">
        <h3 className="py-16 text-center text-4xl font-prata"><span>LATEST NEWS</span></h3>
        <div className="flex flex-wrap">
          <div className="sm:w-1/3 w-full pt-6 p-4">
            <div className="text-xs tracking-[0.5px] uppercase mb-4"><a href="/efcc/news-and-information/news-release">News</a></div>
            <h4 className="mb-4 font-prata hover:text-orange-100 hover:underline">
              <a href="">Court Jails Man for Internet Fraud in Port Harcourt</a>
            </h4>
            <div className="text-xs uppercase text-ash-60">
              <span className="relative pr-4 after:absolute after:top-1/2 after:-translate-y-1/2 after:right-1.5 after:h-1 after:w-1 after:rounded-full after:bg-dark-60">2024-05-20 21:02:25</span>
              <span>Hits </span>
              <span className="text-dark-40"> 25</span>
            </div>
          </div>
          <div className="sm:w-1/3 w-full pt-6 p-4">
            <div className="text-xs tracking-[0.5px] uppercase mb-4"><a href="/efcc/news-and-information/news-release">News</a></div>
            <h4 className="text-lg mb-4 font-prata hover:text-orange-100 hover:underline">
              <a href="">Kaduna Court Jails Two Internet Fraudsters Five Years</a>
            </h4>
            <div className="text-xs uppercase text-ash-60">
              <span className="relative pr-4 after:absolute after:top-1/2 after:-translate-y-1/2 after:right-1.5 after:h-1 after:w-1 after:rounded-full after:bg-dark-60">2024-05-20 20:59:37</span>
              <span>Hits </span>
              <span className="text-dark-40"> 45</span>
            </div>
          </div>
          <div className="sm:w-1/3 w-full pt-6 p-4">
            <div className="text-xs tracking-[0.5px] uppercase mb-4"><a href="/efcc/news-and-information/news-release">News</a></div>
            <h4 className="text-lg mb-4 font-prata hover:text-orange-100 hover:underline">
              <a href="">EFCC Arrests 23 Suspected Internet Fraudsters in Kaduna</a>
            </h4>
            <div className="text-xs uppercase text-ash-60">
              <span className="relative pr-4 after:absolute after:top-1/2 after:-translate-y-1/2 after:right-1.5 after:h-1 after:w-1 after:rounded-full after:bg-dark-60">2024-05-20 20:58:11</span>
              <span>Hits </span>
              <span className="text-dark-40"> 140</span>
            </div>
          </div>
          <div className="sm:w-1/3 w-full pt-6 p-4">
            <div className="text-xs tracking-[0.5px] uppercase mb-4"><a href="/efcc/news-and-information/news-release">News</a></div>
            <h4 className="text-lg mb-4 font-prata hover:text-orange-100 hover:underline">
              <a href="">Alleged Money Laundering: Court Adjourns Mompha's Trial till July 1</a>
            </h4>
            <div className="text-xs uppercase text-ash-60">
              <span className="relative pr-4 after:absolute after:top-1/2 after:-translate-y-1/2 after:right-1.5 after:h-1 after:w-1 after:rounded-full after:bg-dark-60">2024-05-20 20:53:53</span>
              <span>Hits </span>
              <span className="text-dark-40"> 54</span>
            </div>
          </div>
          <div className="sm:w-1/3 w-full pt-6 p-4">
            <div className="text-xs tracking-[0.5px] uppercase mb-4"><a href="/efcc/news-and-information/news-release">News</a></div>
            <h4 className="text-lg mb-4 font-prata hover:text-orange-100 hover:underline">
              <a href="">Alleged N5.7bn Fraud: EFCC Presents First Witness against Father, Son in Lagos</a>
            </h4>
            <div className="text-xs uppercase text-ash-60">
              <span className="relative pr-4 after:absolute after:top-1/2 after:-translate-y-1/2 after:right-1.5 after:h-1 after:w-1 after:rounded-full after:bg-dark-60">2024-05-20 20:49:57</span>
              <span>Hits </span>
              <span className="text-dark-40"> 38</span>
            </div>
          </div>
          <div className="sm:w-1/3 w-full pt-6 p-4">
            <div className="text-xs tracking-[0.5px] uppercase mb-4"><a href="/efcc/news-and-information/news-release">News</a></div>
            <h4 className="text-lg mb-4 font-prata hover:text-orange-100 hover:underline">
              <a href=""> EFCC,  BSIEC,  NSCDC Parley on Collaboration in Makurdi</a>
            </h4>
            <div className="text-xs uppercase text-ash-60">
              <span className="relative pr-4 after:absolute after:top-1/2 after:-translate-y-1/2 after:right-1.5 after:h-1 after:w-1 after:rounded-full after:bg-dark-60">2024-05-20 16:39:10</span>
              <span>Hits </span>
              <span className="text-dark-40"> 23</span>
            </div>
          </div>
        </div>
        <a href="" className="block w-full mt-8 py-5 px-6 text-sm font-bold text-center h-[100px] leading-[75px] hover:bg-black/20 hover:text-red-80"> LATEST NEWS </a>
      </section>

      <footer>
        <div className="bg-red-100 text-white">
          <div className="sl-container max-w-[1230px] pb-12">
            <div className="flex flex-wrap">
              <div className="lg:w-1/3 w-full pr-4 mb-8 text-white/75 text-[15px]">
                <p>
                  <strong><span className="text-orange-100">CORPORATE HEADQUARTERS </span></strong>
                  <br />
                  Plot 301/302, Institution and Research Cadastral District, Jabi,
                  <br />
                  Abuja, Nigeria.
                </p>
                <br />
                <p>
                  <span className="underline"><strong>Hotline / Central Email</strong></span>
                  <br />
                  +234 8093322644
                  <br />
                  +234 (9) 9044751
                </p>
                <a href="mailto:info@efcc.gov.ng" className="hover:text-white hover:underline">info@efcc.gov.ng</a>
              </div>
              <div className="lg:w-1/6 w-full pr-4 mb-8">
                <ul>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">LEADERSHIP</a></li>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">VISION & MISSION</a></li>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">HISTORY OF EFCC</a></li>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">BOARD MEMBERS</a></li>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">THE ESTABLISHMENT ACT</a></li>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">EFCC STRATEGIC PLAN</a></li>
                </ul>
              </div>
              <div className="lg:w-1/6 w-full pr-4 mb-8">
                <ul>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">NEWS</a></li>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">TRENDING NEWS</a></li>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">WANTED PERSONS</a></li>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">CARTOON ZONE</a></li>
                </ul>
              </div>
              <div className="lg:w-1/6 w-full pr-4 mb-8">
                <ul>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">INTERIM FORFEITURE</a></li>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">EFCC OPERATIONAL STATISTICS</a></li>
                  <li><span className="py-2">------------</span></li>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">EFCC ACADEMY</a></li>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">SCUML</a></li>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">SPEECHES</a></li>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">ZERO TOLERANCE</a></li>
                  <li><a href="/efcc/about-us-new/leadership" className="font-medium py-2 hover:underline">ADVERT</a></li>
                </ul>
              </div>
              <div className="lg:w-1/6 w-full mb-8">
                <ul className="flex">
                  <li className="border-l border-white/10">
                    <a href="https://twitter.com/OfficialEFCC" target="_blank" className="bg-[#00aced] rounded-full h-14 w-14 flex items-center justify-center opacity-80 hover:opacity-100">
                      <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                      </svg>
                    </a>
                  </li>
                  <li className="border-l border-white/10">
                    <a href="https://twitter.com/OfficialEFCC" target="_blank" className="bg-[#3b5998] rounded-full h-14 w-14 flex items-center justify-center opacity-80 hover:opacity-100">
                      <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                      </svg>
                    </a>
                  </li>
                  <li className="border-l border-white/10">
                    <a href="https://twitter.com/OfficialEFCC" target="_blank" className="bg-[#ea4c89] rounded-full h-14 w-14 flex items-center justify-center opacity-80 hover:opacity-100">
                      <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                      </svg>
                    </a>
                  </li>
                  <li className="border-x border-white/10">
                    <a href="https://twitter.com/OfficialEFCC" target="_blank" className="bg-[#f2620f] rounded-full h-14 w-14 flex items-center justify-center opacity-80 hover:opacity-100">
                      <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-80 text-white/75 uppercase text-xs pb-[150px]">
          <div className="sl-container max-w-[1230px] pb-12">
          <div>Copyright © 2024 Economic and Financial Crimes Commission - EFCC. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
