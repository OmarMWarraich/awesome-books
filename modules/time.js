// eslint-disable-next-line import/no-unresolved
import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default function time() {
  const localTime = DateTime.local();
  const timeNow = document.querySelector('.date-time');
  timeNow.innerText = `${localTime.toLocaleString(DateTime.DATE_FULL)}, ${localTime.toLocaleString(DateTime.TIME_WITH_SECONDS)}`;
  setTimeout(time, 1000);
}