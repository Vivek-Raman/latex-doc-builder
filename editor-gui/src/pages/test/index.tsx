import { useCallback, useState } from "react";
import { health } from "../../api/client";

export default function Test() {
  const [output, setOutput] = useState("");

  const checkHealth = useCallback(async () => {
    try {
      setOutput("Checking health...");
      const result = await health();
      setOutput(JSON.stringify(result, null, 2));
    } catch (error) {
      setOutput(JSON.stringify(error, null, 2));
    }
  }, []);

  return (
    <div>
      <button onClick={checkHealth}>Check Health</button>
      <pre style={{ textAlign: "left", marginTop: "1rem" }}>
        {output}
      </pre>
    </div>
  );
}
