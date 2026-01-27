import { useSearchParams } from "react-router-dom";

export default function Editor() {
  const [searchParams] = useSearchParams();
  const dir = searchParams.get("dir");

  return (
    <div>
      <h1>Editor</h1>
      <p>Directory: {dir ?? "No directory selected"}</p>
    </div>
  );
}
