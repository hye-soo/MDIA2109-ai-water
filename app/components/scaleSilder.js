"use client";

import { useState } from "react";

export default function ScaleSlider({ promptCount }) {
  const [scale, setScale] = useState(1);

  return (
    <div>
      <input
        type="range"
        min="1"
        max="100"
        value={scale}
        onChange={(e) => setScale(e.target.value)}
      />
      <p>Scale: {scale}</p>
    </div>
  );
}
