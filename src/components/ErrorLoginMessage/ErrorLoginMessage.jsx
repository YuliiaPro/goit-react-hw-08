import css from "./ErrorLoginMessage.module.css";

export default function ErrorLoginMessage() {
  return <p className={css.error}>Oops! Invalid login or password!</p>;
}
