"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    undefined | "generative-fill" | "blur" | "grayscale" | "bg-remove"
  >();

  const [pendingPrompt, setPendingPrompt] = useState("");
  const [prompt, setPrompt] = useState("");

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>

        <div className="flex gap-4">
          <Button
            variant={"ghost"}
            onClick={() => setTransformation(undefined)}
          >
            Clear All
          </Button>
          <div className="flex flex-col gap-3">
            <Button
              onClick={() => {
                setTransformation("generative-fill");
                setPrompt(pendingPrompt);
              }}
            >
              Apply Generative Fill
            </Button>

            <Label>Prompt</Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.currentTarget.value)}
            />
          </div>

          <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
          <Button onClick={() => setTransformation("grayscale")}>
            Convet to Gray
          </Button>
          <Button onClick={() => setTransformation("bg-remove")}>
            Remove Background
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <CldImage src={publicId} width="300" height="300" alt="some image" />

          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              width="300"
              height="300"
              alt="some image"
              crop="pad"
              fillBackground={{
                prompt,
              }}
            />
          )}

          {transformation === "blur" && (
            <CldImage
              src={publicId}
              width="300"
              height="300"
              alt="some image"
              style={{ filter: "blur(8px)" }}
            />
          )}

          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              width="300"
              height="300"
              style={{ filter: "grayscale(100%)" }}
              alt="some image"
            />
          )}

          {transformation === "bg-remove" && (
            <CldImage
              src={publicId}
              width="300"
              height="300"
              removeBackground
              alt="some image"
            />
          )}
        </div>
      </div>
    </section>
  );
}
