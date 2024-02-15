import React from "react";
import Button from "../Button/Button";

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const SubmitionModal: React.FC<SubmissionModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  if (!isOpen) return;

  return (
    <div
      id="popup-modal"
      className="flex bg-[#00000038] h-[100vh] overflow-y-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
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
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              ნამდვილად გსურთ წაშლა?
            </h3>
            <Button type="base" onClick={onSubmit}>
              დიახ
            </Button>
            <Button type="base" onClick={onClose}>
              გაუქმება
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitionModal;
