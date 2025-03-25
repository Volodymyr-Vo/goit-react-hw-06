import { FcPhoneAndroid } from "react-icons/fc";
import { GrUserManager } from "react-icons/gr";
import css from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.contact}>
      <p>
        <GrUserManager className={css.icon} />
        {name}
      </p>
      <p>
        <FcPhoneAndroid className={css.icon} />
        {number}
      </p>
      <button className={css.btnDelete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
