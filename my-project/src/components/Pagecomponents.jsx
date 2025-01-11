import React from "react";
import { ReactTyped } from "react-typed";
import mypic from "../assets/img/mypic.png";
import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import css_21577 from "../assets/img/css_21577.png";
import python_18894 from "../assets/img/python_18894.png";
import c from "../assets/img/c.png";
import linkedin from "../assets/img/linkedin.png";
import whatsapp1 from '../assets/img/whatsapp1.png';
import instagram from '../assets/img/instagram.png';
import  phone from '../assets/img/phone.png';
import  tailwindcss from '../assets/img/tailwindcss.png';

import "./Pagecomponents.css";

export default function PageContent() {
  return (
    <div>
      <div className="justify-center items-center flex flex-col">
        <section id="about"
          className="text-white h-[630px] mt-[130px] w-[800px]  
        justify-center"
        >
          <ReactTyped
            className="mt-10 text-green-300 font-mono tracking-widest 
          text-3xl font-bold text-center flex justify-center"
            strings={["ABOUT ME"]}
            typeSpeed={130}
            backSpeed={150}
            loop
          />
          <p className="pt-[80px] grid md:grid-cols-2 justify-center place-items-center">
            <div className="custom-shadow">
              <img className="user-image" src={mypic} alt="About Me" />
            </div>
            <div>
              <p className=" pt-[50px] pl-[50px]">
                <ReactTyped
                  className="  text-center text-gray-400 "
                  strings={[
                    "As a fresher Full-Stack Developer, I am eager to apply my knowledge and skills in real-world projects. I have a solid foundation in web development technologies including React, JavaScript, HTML/CSS, and Node.js.I am passionate about learning new technologies and continuously improving my coding abilities.I am excited to collaborate with experienced developers and contribute to innovative projects that make a difference. I am a quick learner, a team player, and a problem solver who is ready to take on new challenges.",
                  ]}
                  typeSpeed={0}
                />
              </p>
            </div>
          </p>
        </section>
      </div>
      <section id="education">
        <ReactTyped
          className="mt-[100px] text-green-300 font-mono tracking-widest 
          text-3xl font-bold text-center flex justify-center "
          strings={["EDUCATION"]}
          typeSpeed={130}
          backSpeed={150}
          loop
        />
        <div className="font-normal text-gray-400 mt-[70px] text-center">
          <p className="text-2xl">Masters In Computer Applications </p>
          <p className="pt-5">
            {" "}
            <ReactTyped
              className="text-3xl font-bold"
              strings={["From 2023 to 2025"]}
              typeSpeed={50}
            />
          </p>
          <p className="text-2xl pt-5"> Bacholore of Science and Computer</p>
          <p className="pt-5 pb-5">
            {" "}
            <ReactTyped
              className="text-3xl font-bold"
              strings={["From 2020 to 2023"]}
              typeSpeed={50}
            />
          </p>
          <p className="text-3xl mt-20">
            <ReactTyped
              className="font-semibold text-3xl text-center text-green-200 "
              strings={["AQUIRED SKILLS "]}
              typeSpeed={120}
            />
          </p>
          <div>
            <marquee className="flex ">
              <p className="flex justify-center items-center p-5 ">
                <img className="p-5 h-[100px]" src={tailwindcss} alt="/" />
                <img className="p-5 h-[100px]" src={js} alt="/" />
                <img id="react" className="p-5 h-[100px] " src={react} alt="/" />
                <img className=" p-5 h-[100px] " src={css_21577} alt="/" />
                <img className=" p-5 h-[100px] " src={python_18894} alt="/" />
                <img className=" p-5 h-[100px] " src={c} alt="/" />
              </p>
            </marquee>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="bg-white w-full h-[400px]  ">
          <p className="pt-[50px]">
            {" "}
            <ReactTyped
              className="mt-[70px] text-black font-mono tracking-widest 
              text-3xl font-bold text-center flex justify-center "
              strings={["CONNECT ME "]}
              typeSpeed={30}
              backSpeed={50}
              loop
            />
          </p>
          <div className="pb-[35px]">
            <div className="grid md:grid-cols-2  ">
              <img src="" alt="" />
            </div>
            <span className="flex justify-center pt-10 ">
              <p className="flex justify-center pt-[35px] gap-[50px]">
                <a href="www.linkedin.com/in/lakshmiprasad-putti-a5890a277">
                  {" "}
                  <img src={linkedin} alt="/" />
                </a>
                <a href="https://wa.me/9989844089?text=Hi">
                  {" "}
                  <img src={whatsapp1} alt="/" />
                </a>
                <a href="tel:9989844089">
                  {" "}
                  <img src={phone} alt="/" />
                </a>
                <a href="https://www.instagram.com/mr._anime_._/">
                  {" "}
                  <img src={instagram} alt="/" />
                </a>
              </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
/*
<p className='p-2'>React </p>
                <p className='p-2'>JavaScript</p> 
                <p className='p-2'>HTML/CSS</p> 
                <p className='p-2'>C Language </p> 
                <p className='p-2'>Python</p>
                */
