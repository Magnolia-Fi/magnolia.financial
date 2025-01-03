import video from "./assets/homepage-video.mp4";
import { Navbar } from "./Navbar";

export const TopHeadingSection = () => {
  return (
    <div className="flex pt-[60px] flex-col  h-screen min-h-screen  relative">
      <div className="absolute right-[36px] top-[36px]">
        <Navbar />
      </div>

      <div className="flex justify-center relative w-full h-screen pr-[20%] pb-[10%] max-[880px]:pr-0 ">
        <video
          autoPlay
          loop
          muted
          src={video}
          className={`-z-10 absolute w-full h-[90%] pointer-events-none`}
        />

        <div
          className={`w-fit self-center
          	ml-[30%]
              relative
              leading-none
              bg-white
              pb-3`}
        >
          {/* yellow bg */}
          <div
            className={`absolute
                -left-[15px] -top-[20px]
                rounded-full
                w-[111px] h-[111px]

                max-[880px]:w-[60px]
                max-[880px]:h-[60px]
                max-[880px]:-left-[8px]
                max-[880px]:-top-[6px]

                mix-blend-multiply
                bg-[#FFE63D]/70`}
          />

          <p
            className={`font-aktiv-grotesk font-bold
                	mt-[-20px]
                 	max-[880px]:mt-[-5px]
                	text-[102px]
                 	max-[880px]:text-[50px]`}
          >
            magnolia
          </p>

          {/* tagline  */}
          <p className={`mt-5 max-[880px]:mt-3 max-[880px]:text-sm`}>
            Best-in-class on-ramps &amp; custody, built by cypherpunks.
          </p>
        </div>
      </div>
    </div>
  );
};
