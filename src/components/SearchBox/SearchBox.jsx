import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.container}>
      <label className="{css.label}">Find contacts by name</label>
      <input
        className="{css.input}"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
