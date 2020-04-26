import { takeEvery, put, call } from 'redux-saga/effects';
import { createSlice } from '@reduxjs/toolkit';
import { ticketsApi } from '../api/api';

export const ticketsFeature = createSlice({
  name: 'tickets',
  initialState: {
    loading: false,
    rawTickets: [],
    errors: [],
    appTicketsData: [],
  },
  reducers: {
    fetchTicketsRequest: state => {
      state.loading = true;
    },
    fetchTicketsChunkSuccess: (state, { payload }) => {
      state.rawTickets = [...state.rawTickets, ...payload];
      state.errors = [];
    },
    fetchAllChunksSuccess: state => {
      state.loading = false;
      state.errors = [];
    },
    fetchTicketsFail: (state, action) => {
      //   state.loading = false;
      state.errors.push(action);
    },
  },
});

export const {
  fetchTicketsRequest,
  fetchTicketsChunkSuccess,
  fetchAllChunksSuccess,
  fetchTicketsFail,
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
  } catch (e) {
    if (e.message == 'Request failed with status code 500') {
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
