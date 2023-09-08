import { MainLayout } from "@/layout/main.layout";
import { RegisterForm } from "./_components/registerForm";

const strings = {
  title: "به اپلیکیشن توالت هوشمند خوش آمدید!",
  description:
    "برای بهره مندی از تجربه و دسترسی اتصال به توالت هوشمند لطفا فرم زیر را پر کنید.",
  fullname: {
    label: "نام و نام خانوادگی",
    placeholder: "نام و نام خانوادگی خود را وارد کنید",
  },
  age: {
    label: "سن",
    placeholder: "سن خود را وارد کنید",
  },
  gender: {
    label: "جنسیت",
    options: {
      male: {
        label: "مرد",
        value: "male",
      },
      female: {
        label: "زن",
        value: "female",
      },
      pickOne: {
        label: "جنسیت خود را انتخاب کنید",
        value: "none",
      },
    },
  },
  btnText: "ثبت در سیستم",
};

export default function RegisterPage() {
  return (
    <MainLayout bg="bg-white">
      <div className="w-full mt-20 px-4 mb-8">
        <h1 className="text-4xl pl-28 font-bold">{strings.title}</h1>
        <p className="text-sm pl-20 text-gray-600 mt-8">
          {strings.description}
        </p>
      </div>
      <RegisterForm strings={strings} />
    </MainLayout>
  );
}
