import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div
      id="default-modal"
      className=" flex bg-[#00000038] h-screen overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-[#C9D0E1]">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ml-[auto]">
              {/* header */}
              <button
                type="button"
                className="ml-[auto]text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* body  */}
          <div className="p-4 md:p-5 space-y-4">{children}</div>

          {/* footer */}
          <div className="flex items-end p-4 md:p-5 rounded-b border-t border-[#C9D0E1]">
            კკკკ
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
