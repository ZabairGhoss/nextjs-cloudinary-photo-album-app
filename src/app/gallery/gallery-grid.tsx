"use client";

import { CloudinayImage } from "../../components/CloudinaryImage";
import { ImageGrid } from "@/components/image-grid";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export function GalleryGrid({images}: {images: SearchResult[]}) {

  return (
        <ImageGrid
          images={images}
          getImage={(imageData: SearchResult) => {
            return (
              <CloudinayImage
                key={imageData.public_id}
                imagedata={imageData}
                width="400"
                height="300"
                alt={"image discription"}
              />
            );
          }}
        />
  );
}
