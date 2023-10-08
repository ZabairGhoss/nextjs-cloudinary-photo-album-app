import { CloudinayImage } from "@/app/gallery/CloudinaryImage";
import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

export function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (imageData: SearchResult) => ReactNode;
}) {
  const MAX_COLUMNS = 4;

  function getColumns(colIndex: number) {
    return images.filter((resource, indx) => indx % MAX_COLUMNS === colIndex);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, index) => (
          <div className="flex flex-col gap-4" key={index}>
            {column.map((getImage))}
          </div>
        )
      )}
    </div>
  );
}
