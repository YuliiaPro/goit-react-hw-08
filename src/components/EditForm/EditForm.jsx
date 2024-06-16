import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./EditForm.module.css";
import toast, { Toaster } from "react-hot-toast";
import { selectCurrentContact } from "../../redux/contacts/selectors";
import { addCurrentContact } from "../../redux/contacts/slice";
import { changeContact } from "../../redux/contacts/operations";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short! Min 3 items")
    .max(50, "Too Long! Max 50 items")
    .required("Required"),

  number: Yup.string()
    .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, "Number's format is xxx-xx-xx")
    .required("Required"),
});

export default function EditForm() {
  const fieldId = useId();
  const dispatch = useDispatch();
  const currentContact = useSelector(selectCurrentContact);

  const handleSubmit = ({ name, number }, actions) => {
    dispatch(changeContact(name, number))
      .unwrap()
      .then(() => {
        toast.success("Contact successfully changed!", {
          icon: "👏",
        });
        actions.resetForm();
      })
      .catch(() => {
        toast.error("Failed to change contact!");
      });
  };

  return (
    <Formik
      initialValues={{
        name: currentContact.name,
        number: currentContact.number,
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.container}>
        <label htmlFor={`${fieldId}-name`}>Name</label>
        <Field type="text" name="name" id={`${fieldId}-name`} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label className={css.space} htmlFor={`${fieldId}-number`}>
          Number
        </label>
        <Field type="text" name="number" id={`${fieldId}-number`} />
        <ErrorMessage className={css.error} name="number" component="span" />
        <div className={css.btnContainer}>
          <button className={css.btn} type="submit">
            Change
          </button>
          <button
            className={css.btn}
            type="submit"
            onClick={() => {
              dispatch(addCurrentContact(null));
            }}
          >
            Cancel
          </button>
        </div>
        <Toaster position="top-center" />
      </Form>
    </Formik>
  );
}
