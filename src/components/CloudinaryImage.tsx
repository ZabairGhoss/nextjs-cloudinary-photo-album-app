"use client";

import { HeartIcon } from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { setAsFavouriteAction } from "../app/gallery/actions";
import { useState, useTransition } from "react";
import { SearchResult } from "../app/gallery/page";
import { FullHeartIcon } from "@/components/icons/filled-heart";
import { ImageMenu } from "./image-menu";

export function CloudinayImage(
  props: {
    imagedata: SearchResult;
    onUnheart?: (unheartedResource: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const { imagedata, onUnheart } = props;

  const [transition, startTransition] = useTransition();
  const [isFavorite, setIsFavorite] = useState(
    imagedata.tags.includes("favorite")
  );

  return (
    <div className="relative">
      <CldImage {...props} src={imagedata.public_id} />
      {isFavorite ? (
        <FullHeartIcon
          onClick={() => {
            onUnheart?.(imagedata);
            setIsFavorite(false);
            startTransition(() => {
              setAsFavouriteAction(imagedata.public_id, false);
            });
          }}
          className="absolute top-2 left-2 hover:text-white text-red-600 cursor-pointer"
        />
      ) : (
        <HeartIcon
          onClick={() => {
            onUnheart?.(imagedata);
            setIsFavorite(true);
            startTransition(() => {
              setAsFavouriteAction(imagedata.public_id, true);
            });
          }}
          className="absolute top-2 left-2 hover:text-red-600 cursor-pointer"
        />
      )}
      <ImageMenu image={imagedata} />
    </div>
  );
}
