export const ContactForm = () => {
  return (
    <div
      className={`flex flex-col justify-between pb-[41px] items-center h-[832px] w-full bg-no-repeat bg-center bg-cover bg-contactBG`}
    >
      <div className="flex-1 flex items-center">
        <div className="w-[400px] gap-[24px] flex flex-col">
          <p className={`text-[30px] font-bold font-aktiv-grotesk`}>
            Ready to build with us?
          </p>

          <div className={`self-center flex flex-col gap-[4px]`}>
            <label htmlFor="email" className=" text-[12px] font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="hughes@soda.berkely.edu"
              className="w-[400px] h-[50px] border-2 px-[12px] border-black font-[16px]"
            />
          </div>

          <div className={`self-center flex flex-col gap-[4px]`}>
            <label htmlFor="message" className=" text-[12px] font-bold">
              Message
            </label>

            <textarea
              id="message"
              placeholder="Enter your message"
              rows={7}
              className="resize-none w-[400px]  border-2 px-[12px] border-black font-[16px]"
            />
          </div>
          {/* <button className="bg-yellow-300 px-4 py-2 font-bold text-black shadow-md relative transform transition hover:-translate-y-0.5 active:translate-y-0">
            Send Message
          </button> */}
          <button
            className={`w-fit
          bg-[#FFE63D]
          border-2
          border-[#FFFFFF]
          font-aktiv-grotesk

          px-4
          py-3
          font-bold
          shadow-[6px_6px_0_0_#000]
          transition-all duration-150 ease-in-out
          transform
          hover:translate-y-[-2px]
          hover:translate-x-[-2px]
          hover:brightness-95
          active:translate-y-0
          active:translate-x-0`}
          >
            Send Message
          </button>
        </div>
      </div>
      <p className="p-[4px] self-center bg-white text-center w-fit font-[16px] leading-[19px]">
        Copyright 2024 Magnolia Financial, LLC.
      </p>
    </div>
  );
};
