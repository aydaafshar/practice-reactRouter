import React from "react";
import { useParams } from "react-router-dom";
export default function Profile() {
  const { name } = useParams();
  return <div>Profile of {name}</div>;
}
