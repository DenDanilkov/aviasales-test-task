import React from 'react';
import PropTypes from 'prop-types';
import { manageTicketsFilter } from '../../features/app';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';

const CheckBox = ({ labelNumber, filtersMember }) => {
  const dispatch = useDispatch();
  // const checked = labelNumber > 0 ? filtersMember : !filtersMember;
  const checked = filtersMember;
  // const [isChecked, checkboxStateToggler] = useState(checked);

  const handleCheckboxChange = () => {
    // checkboxStateToggler(!isChecked);

    const activeFiltersAction = checked ? 'delete' : 'add';
    dispatch(manageTicketsFilter({ activeFiltersAction, labelNumber }));

    //else {
    //   const activeFiltersAction = isChecked ? [1, 2, 3] : [];
    //   dispatch(manageTicketsAllFilters(activeFiltersAction));
    // }
  };

  return (
    <div className={styles.checkbox}>
      <label htmlFor={`checkbox-${labelNumber}`}>
        <input
          name={`checkbox-${labelNumber}`}
          type="checkbox"
          id={`checkbox-${labelNumber}`}
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  labelNumber: PropTypes.number,
  filtersMember: PropTypes.bool,
};

export default CheckBox;
