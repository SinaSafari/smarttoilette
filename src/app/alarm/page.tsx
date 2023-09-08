import { MainLayout } from "@/layout/main.layout";
import Image from "next/image";

const strings = {
  title: "بهتره به دکتر مراجعه کنید!",
  description:
    "شما بعد از دو روز هنوز در ادرار خود ناخالصی دارید. بهتر است برای مراقبت بیشتر به پزشک مراجعه کنید.",
};

export default function AlarmPage() {
  return (
    <MainLayout bg="bg-[#C52626]">
      <div className="w-full h-full grid place-items-center text-white  ">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Image src={"/danger.png"} alt="danger" width={77} height={77} />
          </div>
          <h1 className="text-xl mb-2">{strings.title}</h1>
          <p className="text-sm">{strings.description}</p>
        </div>
      </div>
    </MainLayout>
  );
}
