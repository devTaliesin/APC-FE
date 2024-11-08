import axios from 'axios';
import event from './event';
import videoSource from './videoSource'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

const {
  dailyVideoRead,
  dailyFaceIdRead
} = event(api)

const {
  videoSourceList
} = videoSource(api)

export {
  dailyVideoRead,
  dailyFaceIdRead,
  videoSourceList
}