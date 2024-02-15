import { useState } from "react";

import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import UserRegistrationForm from "@/components/UserRegistrationForm/UserRegistrationForm";

function TableFilters() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="pt-2.5 px-5 flex items-center flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div>
          <Button
            onClick={() => {
              setIsModalOpen(true);
            }}
            type="light"
          >
            დამატება
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        title={"მომხმარებლის დამატება"}
        onClose={() => setIsModalOpen(false)}
      >
        <UserRegistrationForm setModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
}

export default TableFilters;
