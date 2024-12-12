import Image from "next/image";

const BgImage = (props:{pageName: string}) => {
  return (
    <div className="relative mb-2 h-[316px]">
      {/* Bg Image */}
      <Image
        src="/assets/others/bg.webp"
        alt="background image"
        className="object-cover"
        fill
      ></Image>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Image
          src="/assets/others/bg-logo.svg"
          alt="Logo"
          width={87}
          height={87}
        />
        <h1 className="text-4xl md:text-5xl font-medium">{props.pageName}</h1>
        <div className="flex items-center gap-4 mt-3">
          <span className="font-medium">Home</span>
          <Image src="/assets/others/RightArrow.svg" alt="Right Arrow" width={10} height={10} />
          <span className="font-light">{props.pageName}</span>
        </div>
      </div>
    </div>
  );
};

export default BgImage;
