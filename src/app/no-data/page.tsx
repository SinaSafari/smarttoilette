import { MainLayout } from "@/layout/main.layout";
const strings = { title: "هنوز اطلاعاتی در اختیار نیست!" };
export default function NoDataPage() {
  return (
    <MainLayout>
      <div className="w-full h-full grid place-items-center">
        <p className="text-xl">{strings.title}</p>
      </div>
    </MainLayout>
  );
}
