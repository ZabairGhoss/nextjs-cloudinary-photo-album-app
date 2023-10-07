"use client";

import { HeartIcon } from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import { setAsFavouriteAction } from "./actions";
import { useTransition } from "react";
import { SearchResult } from "./page";
import { FullHeartIcon } from "@/components/icons/filled-heart";

export default function CloudinayImage(
  props: any & { imagedata: SearchResult, path: string }
) {
  const { imagedata } = props;

  const [transition, startTransition] = useTransition();
  const isFavorited = imagedata.tags.includes("favorite");

  return (
    <div className="relative">
      <CldImage {...props} src={imagedata.public_id} />
      {isFavorited ? (
        <FullHeartIcon
          onClick={() => {
            startTransition(() => {
              setAsFavouriteAction(imagedata.public_id, false, props.path);
            });
          }}
          className="absolute top-2 right-2 hover:text-white text-red-600 cursor-pointer"
        />
      ) : (
        <HeartIcon
          onClick={() => {
            startTransition(() => {
              setAsFavouriteAction(imagedata.public_id, true, props.path);
            });
          }}
          className="absolute top-2 right-2 hover:text-red-600 cursor-pointer"
        />
      )}
    </div>
  );
}
