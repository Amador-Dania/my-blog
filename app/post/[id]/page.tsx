"use client";
import * as React from "react";
import { useParams } from "next/navigation";

export default function Post() {
  const { id } = useParams();

  return <h1>{id} Page</h1>;
}
