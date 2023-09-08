import { MainLayout } from "@/layout/main.layout";
import Image from "next/image";

const strings = {
  title: "آب بیشتری بنوشید!",
  description:
    "برای کنترل ناخالصی های ناخواسته در ادرار خود بهتر است که آب بیشتری بنوشید",
};

export default function WarningPage() {
  return (
    <MainLayout bg="bg-[#C3A22B]">
      <div className="w-full h-full grid place-items-center text-white ">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Image src={"/warning.png"} alt="warning" width={77} height={77} />
          </div>
          <h1 className="text-xl mb-2">{strings.title}</h1>
          <p className="text-sm">{strings.description}</p>
        </div>
      </div>
    </MainLayout>
  );
}
