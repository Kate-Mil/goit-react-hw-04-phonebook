import css from './Filter.module.css';
export default function Filer({ value, onChange }) {
  return (
    <label className={css.contact__lable}>
      Find contacts by name
      <input
        className={css.contact__input}
        value={value}
        onChange={onChange}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
}
