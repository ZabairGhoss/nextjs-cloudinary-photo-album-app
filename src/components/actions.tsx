"use server";
import { SearchResult } from "@/app/gallery/page";
import cloudinary from "cloudinary";

export async function AddImageToAlbum(image: SearchResult, album: string) {
  await cloudinary.v2.api.create_folder(album);

  let pathParts = image.public_id.split("/");
  if (pathParts.length > 1) {
    pathParts = pathParts.slice(1);
  }

  const publicId = pathParts.join("/");

  cloudinary.v2.uploader.rename(image.public_id, `${album}/${publicId}`);
}
