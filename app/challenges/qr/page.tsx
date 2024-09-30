import Image from "next/image";

export default function QrComponent() {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-slate-300 ">
      <div className="w-[320px] h-[499px] bg-white rounded-[20px] shadow-xl shadow-black/10">
        <div className="flex flex-col justify-center items-center">
          <div className="p-[16px]">
            <Image
              className="rounded-[20px]"
              src="/qr_component/image-qr-code.png"
              height={288}
              width={288}
              alt="qr"
            />
          </div>
          <div className="outfit flex flex-col justify-center items-center w-[288px] h-[132px] space-y-[16px]">
            <div className="flex items-center  h-[53px]">
              <h1 className=" text-slate-900 text-[22px] text-center leading-[120%] tracking-[0px] font-bold">
                Improve your front-end skills by building projects
              </h1>
            </div>
            <div className=" w-[256px] h-[63px]">
              <p className="text-slate-500 text-[15px] leading-[140%] tracking-[0.2px] text-center font-normal">
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
