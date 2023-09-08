"use client";
import { MainLayout } from "@/layout/main.layout";
import { NotifContainer } from "./_components/notif";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/register");
  }, []);
  return (
    <MainLayout>
      <p>سلام</p>
      {/* <NotifContainer /> */}
    </MainLayout>
  );
}
