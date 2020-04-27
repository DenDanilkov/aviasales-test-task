import { takeEvery, put, call, select } from 'redux-saga/effects';
import { createSlice } from '@reduxjs/toolkit';
import { ticketsApi } from '../api/api';
import { dateFormater, minutesToHours } from '../utils/dateFormatter';

export const ticketsFeature = createSlice({
  name: 'tickets',
  initialState: {
    loading: false,
    rawTickets: [],
    errors: [],
    appTicketsData: [],
    activeFilters: [],
    sortMode: 'price',
  },
  reducers: {
    fetchTicketsRequest: state => {
      state.loading = true;
    },
    fetchTicketsChunkSuccess: (state, { payload }) => {
      state.rawTickets = [...state.rawTickets, ...payload];
      state.errors = [];
    },
    setTicketsData: (state, { payload }) => {
      state.appTicketsData = payload;
      state.errors = [];
      state.loading = false;
    },
    fetchAllChunksSuccess: state => {
      state.errors = [];
    },
    fetchTicketsFail: (state, action) => {
      state.errors.push(action);
    },
  },
});

export const {
  fetchTicketsRequest,
  fetchTicketsChunkSuccess,
  fetchAllChunksSuccess,
  fetchTicketsFail,
  setTicketsData,
} = ticketsFeature.actions;
export default ticketsFeature.reducer;

function* fetchTickets(id) {
  try {
    yield call(retrieveTicketsChunks, id);
  } catch (e) {
    yield put(fetchTicketsFail(e.message));
  }
}

function* retrieveTicketsChunks({ payload }) {
  let searchId;
  try {
    if (!payload) {
      const response = yield call(ticketsApi.getSearchId);
      searchId = response.searchId;
    } else {
      searchId = payload;
    }
    let responseMessage;
    do {
      console.log('SearchId', searchId);
      responseMessage = yield call(subscribe, searchId);
      console.log('READY?', responseMessage);
      if (responseMessage) {
        console.log('YEAH');
      }
    } while (!responseMessage);
    yield put(fetchAllChunksSuccess());
    const rawTicketsData = yield select(state => state.tickets.rawTickets);
    const readyAppData = rawTicketsData.map(({ segments, carrier, ...rest }) => {
      const icon = `//pics.avs.io/99/36/${carrier}.png`;
      const [forward, backward] = segments;
      const totalTime = forward.duration + backward.duration;
      const changePlanesAmount = forward.stops.length + backward.stops.length;
      const ticketSections = {};

      ticketSections['from-destination'] = [
        dateFormater(forward.date, forward.duration),
        `${forward.origin}-${forward.destination}`,
      ];
      ticketSections['from-duration'] = [minutesToHours(forward.duration), 'В ПУТИ'];

      ticketSections['from-changes'] = [
        `${forward.stops.join(', ')}`,
        `${forward.stops.length} пересадок`,
      ];

      ticketSections['backward-destination'] = [
        dateFormater(backward.date, backward.duration),
        `${backward.origin}-${backward.destination}`,
      ];
      ticketSections['backward-duration'] = [minutesToHours(backward.duration), 'В ПУТИ'];

      ticketSections['backward-changes'] = [
        `${backward.stops.join(', ')}`,
        `${backward.stops.length} пересадок`,
      ];

      //   ticketSections[
      //     dateFormater(backward.date, backward.duration)
      //   ] = `${backward.origin}-${backward.destination}`;
      //   ticketSections[minutesToHours(backward.duration)] = 'В ПУТИ';
      //   ticketSections[`${backward.stops.length} пересадок`] = `${backward.stops.join(' ')}`;

      return { icon, totalTime, changePlanesAmount, ticketSections, ...rest };
    });
    yield put(setTicketsData(readyAppData));
  } catch (e) {
    if (e.message === 'Request failed with status code 500') {
      yield put(fetchTicketsFail(e.message));
      yield call(fetchTickets, { payload: searchId });
    }
  }
}

function* subscribe(id) {
  const response = yield call(ticketsApi.getTickets, id);
  yield put(fetchTicketsChunkSuccess(response.tickets));
  return response.stop;
  // if (e.status == 500) {
  //   // Status 502 is a connection timeout error,
  //   // may happen when the connection was pending for too long,
  //   // and the remote server or a proxy closed it
  //   // let's reconnect
  //   await subscribe();
  // } else if (response.status != 200) {
  //   // An error - let's show it
  //   showMessage(response.statusText);
  //   // Reconnect in one second
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  //   await subscribe();
  // } else {
  //   // Get and show the message
  //   let message = await response.text();
  //   showMessage(message);
  //   // Call subscribe() again to get the next message
  //   await subscribe();
}

export function* ticketsSaga() {
  yield takeEvery(fetchTicketsRequest().type, fetchTickets);
}
