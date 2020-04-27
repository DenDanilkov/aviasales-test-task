import * as R from 'ramda';

export const getTickets = state => {
  const activeFilters = state.tickets.activeFilters;

  //   const activeCategoryId = getActiveCategoryId(ownProps);

  const applySearch = item => R.includes(R.prop('changePlanesAmount', item), activeFilters);

  //   const applyCategory = item => R.equals(activeCategoryId, R.prop('categoryId', item));

  const tickets = R.compose(
    R.sortBy(R.prop(state.tickets.sortMode)),
    R.when(R.always(R.not(R.isEmpty(activeFilters))), R.filter(applySearch))
  )(state.tickets.appTicketsData);
  return tickets;
};
