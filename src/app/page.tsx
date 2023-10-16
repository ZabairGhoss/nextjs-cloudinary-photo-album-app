"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to Next-Cloudinary Photo Album Web App</h1>
      <Button className="mt-10">
        <Link href={"/gallery"}>Open Gallery</Link>
      </Button>
    </main>
  );
}
