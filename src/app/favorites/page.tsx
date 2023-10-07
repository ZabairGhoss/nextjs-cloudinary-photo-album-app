import cloudinary from "cloudinary";
import CloudinayImage from "../gallery/CloudinaryImage";
import { ForceRefresh } from "@/components/force-refresh";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function FavoritesPage() {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorite Images</h1>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {result.resources.map((result) => (
            <CloudinayImage
              key={result.public_id}
              imagedata={result}
              path="/favorites"
              width="400"
              height="300"
              alt={"image discription"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
