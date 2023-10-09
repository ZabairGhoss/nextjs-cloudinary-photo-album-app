"use server"
import cloudinary from "cloudinary";

export async function CreateFolder(folder: string) {
    const existingFolder = await cloudinary.v2.api.create_folder(folder);
}