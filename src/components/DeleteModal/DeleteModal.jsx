import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import css from "./DeleteModal.module.css";
import { deleteContact } from "../../redux/contacts/operations";

Modal.setAppElement("#modal");

export default function DeleteModal({ id, modalIsOpen, closeModal }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact successfully deleted!", {
          icon: "👏",
        });
        closeModal();
      })
      .catch(() => {
        toast.error("Failed to delete contact!");
      });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      shouldCloseOnEsc={true}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <p className={css.paragraph}>Delete contact?</p>
      <div className={css.btnContainer}>
        <button className={css.btn} onClick={handleDelete}>
          OK
        </button>
        <button className={css.btn} onClick={closeModal}>
          Cancel
        </button>
      </div>

      <button className={css.btnClose} onClick={closeModal}>
        <MdClose />
      </button>
      <Toaster position="top-center" reverseOrder={false} />
    </Modal>
  );
}
