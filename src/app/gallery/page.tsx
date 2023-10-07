import { CldImage } from "next-cloudinary";
import UploadButton from "./UploadButton";
import cloudinary from "cloudinary";
import CloudinayImage from "./CloudinaryImage";

type SearchResult = {
    public_id: string;
}

export default async function GalleryPage() {
    const result = await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at','desc')
    .max_results(10)
    .execute() as {resources: SearchResult[]};
    console.log('cloudinary Result:', result);
    
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
        </div>

        <div className="grid grid-cols-4 gap-4">

        {result.resources.map((result) => (
            <CloudinayImage
            key={result.public_id}
            src={result.public_id}
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
