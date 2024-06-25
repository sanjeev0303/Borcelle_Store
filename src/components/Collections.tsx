"use client";

import { getCollections } from "@/lib/actions/action";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CollectionType } from "@/lib/type";
import Image from "next/image";

const Collections = () => {
  const [collections, setCollections] = useState<CollectionType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await getCollections();
        setCollections(data);
        // console.log("data: ", data);
      } catch (error) {
        console.error("Error fetching collections:", error);
        setError("Failed to load collections.");
      }
    };
    fetchCollections();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center gap-10 py-8 px-5">
        <p className="text-heading1-bold">Collections</p>
        {!collections || collections.length === 0 ? (
          <p className="text-body-bold"> No collection found </p>
        ) : (
          <div className="flex items-center justify-center gap-8">
            {collections.map((collection) => (
              <Link
                href={`/collections/${collection._id}`}
                key={collection._id}
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={350}
                  height={200}
                  className="rounded-lg cursor-pointer"
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Collections;