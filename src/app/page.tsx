"use client";

import Image from "next/image";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";


export default function Home() {
  const [imageId, setImageId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: any) => {
           setImageId(result.info.public_id)
            console.log(result.info.public_id);
            
          }}
        uploadPreset="yu2kismj"
      />
      {imageId && (
        <CldImage
          width="960"
          height="600"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
