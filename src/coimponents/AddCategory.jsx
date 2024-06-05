import { useState } from 'react';
import PropTypes from 'prop-types'; 

const AddCategory = ({ setCategory }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const searchGift = e => {
    e.preventDefault();
    if (value === ''){
      setError(true);
      return; 
    }
    setError(false);
    setCategory(value);
    setValue("");
  };

  return (
    <>
      <form onSubmit={searchGift}>
        <input
          type="text"
          placeholder="Buscar.."
          onChange={e => setValue(e.target.value)}
          value={value}
        />
      </form>
      {error ? <p className='error'>El campo está vacío</p> : ""}
    </>
  );
}

// Definir PropTypes
AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired 
};

export default AddCategory;
