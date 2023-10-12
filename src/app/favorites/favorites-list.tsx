"use client";

import { ImageGrid } from "@/components/image-grid";
import { CloudinayImage } from "../../components/CloudinaryImage";
import { SearchResult } from "./page";
import { useEffect, useState } from "react";

export default function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <ImageGrid
      images={resources}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinayImage
            key={imageData.public_id}
            imagedata={imageData}
            width="400"
            height="300"
            alt={"image discription"}
            priority={true}
            onUnheart={(unheartedResources) => {
              setResources((currentResources) =>
                currentResources.filter((resource) => {
                  resource.public_id !== unheartedResources.public_id;
                })
              );
            }}
          />
        );
      }}
    />
  );
}
