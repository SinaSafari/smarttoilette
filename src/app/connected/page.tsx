import { MainLayout } from "@/layout/main.layout";
import Image from "next/image";
const strings = {
  title: "اتصال به توالت با موفقیت انجام شد!",
};
export default function ConnectedPage() {
  return (
    <MainLayout>
      <div className="w-full h-full grid place-items-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-3xl mb-8 text-center px-6">{strings.title}</p>
          <Image
            src={"/toilette.png"}
            alt="toilette"
            width={368}
            height={430}
          />
        </div>
      </div>
    </MainLayout>
  );
}
