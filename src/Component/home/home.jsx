import backRound from "./../../../images/background.webp";
import profil from "./../../../images/profile.webp";
import reactIcont from "./../../../images/tailwind.webp";
import tailwindIcon from "./../../../images/react.webp";
import Typed from "typed.js";
import React from "react";

export default function Home() {
  return (
    <div
      style={{
        background: `url(${backRound})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div>
        <div className="relative h-screen flex justify-center items-center">
          
            <img className=" animate-icon  z-10 absolute left-[75px] -mt-[40px]
              sm:left-[180px]
              sm:w-[3.4rem]
              sm:-mt-[180px]  
              
              
              md:left-[230px]
              md:w-[4rem]
              md:-mt-[70px]  

              lg:-mt-[230px]
              lg:left-[390px]
              lg:w-[3rem]

              xl:left-[500px]
              xl:w-[4rem]

            " src={tailwindIcon} alt="tailwindIcon"/>
            <img className=" absolute animate-icon right-[68px] -mt-[50px]
              sm:right-[180px]
              sm:w-[3.7rem]
              sm:-mt-[180px] 

              md:right-[220px]      
              md:w-[3.9rem]
              md:z-10
              md:-mt-[70px]
              
              lg:-mt-[230px]
              lg:right-[390px]
              lg:w-[3rem]

              xl:right-[500px]
              xl:w-[4rem]
            " src={reactIcont} alt="reactIcon"/>
          <img src={profil} alt="profile" className="absolute 
            sm:w-[27rem]
            sm:top-[10rem]
            
            md:top-[24rem]
            md:w-[30rem]
            
            lg:w-[25rem]
            lg:top-[5rem]
            xl:top-[8rem]
            xl:w-[30rem]
          "/>

          <div className="absolute text-[#eefffe] mt-4 flex -mb-[410px] flex-col items-center p-3 font-hebo
            md:mt-[20rem]
            lg:-mt-[1rem]
            xl:mt-[8rem]
          ">
            <h1 className="text-3xl shadow-bayang p-1
              md:text-4xl
              lg:text-2xl
              xl:text-4xl
            ">Farid anang s</h1>
            <div className="flex my-2 text-2xl flex-wrap
                md:text-3xl
                lg:text-xl
                xl:text-2xl
            ">
              <h1>I'm a</h1>
              <span className="ml-1">
                {" "}
                <MyComponent />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyComponent() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["frontend developer"],
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });
    return () => typed.destroy();
  });

  return <span ref={el} />;
}
