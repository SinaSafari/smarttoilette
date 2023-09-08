import { PropsWithChildren } from "react";
export function MainLayout({
  children,
  bg = "bg-white",
}: PropsWithChildren<{ bg?: string }>) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className={`max-w-[500px] w-full h-full ${bg}`}>{children}</div>
    </div>
  );
}
