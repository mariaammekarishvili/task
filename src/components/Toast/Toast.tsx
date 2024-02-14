import * as React from "react";
import { GrClose } from "react-icons/gr";
import { ToastContainer } from "react-toastify";

export default function Toasts(): React.ReactElement {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      icon={<GrClose />}
      closeButton={false}
    />
  );
}
