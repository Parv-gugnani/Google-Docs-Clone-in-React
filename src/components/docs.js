import React from "react";
import { useState } from "react";
import CustomModal from "./modal";

export default function Docs() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="docs-main">
      <h1>Google Docs clone</h1>

      <button className="add-docs" onClick={handleOpen}>
        Add a Documents +
      </button>
      <CustomModal open={open} setOpen={setOpen} />
    </div>
  );
}
