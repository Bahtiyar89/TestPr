import {createSelector} from 'reselect';

export const selecEvents = ({events}) => events;

export const selectAllEvents = createSelector(
  selecEvents,
  ({allEvents}) => allEvents,
);

export const selectedItem = createSelector(selecEvents, ({item}) => item);
