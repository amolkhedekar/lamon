import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div
      class="loader__wrap"
      role="alertdialog"
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading…"
    >
      <div class="loader" aria-hidden="true">
        <div class="loader__sq"></div>
        <div class="loader__sq"></div>
      </div>
    </div>
  );
}

export default Loading;
