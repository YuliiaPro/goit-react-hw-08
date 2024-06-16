import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import DeleteModal from "../DeleteModal/DeleteModal";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiPencil } from "react-icons/ti";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { addCurrentContact } from "../../redux/contacts/slice";

export default function Contact({ contact: { id, name, number } }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={css.container}>
      <div>
        <p>
          <IoPerson className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>

      <div className={css.btncontainer}>
        <button className={css.btn} onClick={openModal}>
          <RiDeleteBinLine size="24" fill="#0671eb" />
        </button>
        <button
          className={css.btn}
          onClick={() => dispatch(addCurrentContact({ id, name, number }))}
        >
          <TiPencil size="24" fill="#0671eb" />
        </button>
      </div>

      <DeleteModal
        modalIsOpen={modalIsOpen}
        onRequestClose={closeModal}
        closeModal={closeModal}
        id={id}
      />
    </div>
  );
}
