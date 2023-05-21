import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

export default function ContactItem({ name, number, onDeleteContact }) {
  return (
    <li className={css.contact__item}>
      <p className={css.contact__text}>
        {name}: {number}
      </p>
      <button
        className={css.contactItem__btn}
        onClick={onDeleteContact}
        type="button"
      >
        Del
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
