import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper", // Fix the attribute name
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalComponent({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input placeholder="Add a title" className="add-input" />
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            This is test in the modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This is just a random text lmao ded xd
          </Typography> */}
          <div className="button-container">
            <button className="add-docs">Add</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
