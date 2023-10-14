"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

export function SearchForm({ initialSearch }: { initialSearch: string }) {
  const [tagName, setTagName] = useState(initialSearch ?? "");
  const router = useRouter();

  const handleTagNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTagName(e.currentTarget.value);
  };
  useEffect(() => {
    setTagName(initialSearch);
  }, [initialSearch]);

  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
          router.refresh();
        }}
      >
        <Label htmlFor="tag-name" className="text-right">
          Search by Tag
        </Label>
        <div className="flex gap-2">
          <Input
            onChange={(e) => handleTagNameChange(e)}
            id="album-name"
            value={tagName}
            className="col-span-3"
          />

          <Button type="submit">Search</Button>
        </div>
      </form>
    </React.Fragment>
  );
}
