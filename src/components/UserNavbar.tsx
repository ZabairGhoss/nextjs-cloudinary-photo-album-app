import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserNavbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4  container mx-auto">
        <Link href={"/"}>
        <div className="flex items-center">
        <Image
          src="/album.png"
          width="50"
          height="50"
          alt="ZG photo album app logo"
        />
        ZG PHOTOS ALBUM
        </div>
        </Link>
      <div className="flex h-16 items-center px-4 container mx-auto font-bold">
        PHOTOS APP
        <div className="ml-auto flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
