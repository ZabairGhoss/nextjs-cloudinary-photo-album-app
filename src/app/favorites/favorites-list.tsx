"use client";

import { CloudinayImage } from "../gallery/CloudinaryImage";
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
    <div className="grid grid-cols-4 gap-4">
      {resources.map((result) => (
        <CloudinayImage
          key={result.public_id}
          imagedata={result}
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
      ))}
    </div>
  );
}
