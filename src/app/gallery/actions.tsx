"use server";
import cloudinary from "cloudinary";

export async function setAsFavouriteAction(
  publicid: string,
  isFavorite: boolean,
) {
  if (isFavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicid]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicid]);
  }
}
