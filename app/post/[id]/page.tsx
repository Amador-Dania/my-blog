"use client";
import * as React from "react";
import { useParams } from "next/navigation";

export default function Post() {
  const { id } = useParams();

  return (
    <>
      <div className="container mx-auto p-8">
        <article className="max-w-2xl mx-auto">
          <h1>{id} Page</h1>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">title</h1>
          <p className="text-md text-gray-600 mb-1">publish by :</p>
          <p className="text-md text-gray-500 mb-4">Publication date: </p>
          <div className="text-gray-700 text-lg whitespace-pre-line">
            content
          </div>
        </article>
      </div>
    </>
  );
}
