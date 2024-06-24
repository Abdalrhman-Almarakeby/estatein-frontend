import { useParams } from "react-router-dom";

export function Property() {
  const { id } = useParams();

  return <div className="flex-grow container">{id}</div>;
}
