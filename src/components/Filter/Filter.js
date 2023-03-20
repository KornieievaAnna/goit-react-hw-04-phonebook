import PropTypes from 'prop-types';

import { ImputForm, Label } from '../Form/Form.styled';

const Filter = ({ value, onChange }) => (
  <ImputForm>
    <Label>
      Find contacts by name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={value}
        onChange={onChange}
        required
      />
    </Label>
  </ImputForm>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
