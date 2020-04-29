import React from 'react';
import styles from './styles.module.scss';
import ControlsItem from '../ControlsItem';
import { controlsItems } from '../../mockedData/controlsItems';
import { useSelector } from 'react-redux';
// import { getActiveSelectors } from '../../utils/selectors';

const ControlsPanel = () => {
  const activeFilters = useSelector(state => state.tickets.activeFilters);
  return (
    <div className={styles.controls}>
      <div className={styles.title}>Количество пересадок</div>
      <div className={styles['control-items']}>
        {controlsItems.map(({ changes, id }) => (
          <ControlsItem
            name={changes}
            key={id}
            labelNumber={id}
            filtersMember={activeFilters.includes(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ControlsPanel;
