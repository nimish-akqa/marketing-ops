import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
// import React, { useState } from "react";

const ProjectModal: React.FC = () => {
  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);

  // const handleFormSubmit = () => {
  //   // Implement your form submission logic here
  //   // Close the modal after submission if needed
  //   closeModal();
  // };
  return (
    <Modal>
      <ProjectForm />
    </Modal>
  );
};

export default ProjectModal;
