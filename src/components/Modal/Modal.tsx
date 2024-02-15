import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      id="default-modal"
      className="fixed flex bg-[#00000038] h-screen overflow-y-auto overflow-x-hidden z-100 top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
    >
      <div className="relative p-6 pb-0 w-full max-w-2xl max-h-full">
        {/* content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* header */}
          <div className=" max-h-[51px] relative flex items-center justify-center min-h-[51px] border-b rounded-t border-[#C9D0E1]">
            <h3 className="text-sm text-[#334870] dark:text-white">{title}</h3>
            <button
              type="button"
              className="absolute right-1 top-2 ml-[auto]text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  // stroke-linejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          {/* body  */}
          <div className="p-4 pb-0 space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
