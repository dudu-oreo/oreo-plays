import axios from 'axios'

const MAX_VOLUME = 320

export const fetchStatus = params => (
  process.env.NODE_ENV === 'development'
  ? Promise.resolve(dumpStatusData(status))
  : axios.get('/requests/status.json', { params })
    .then(({ data }) => dumpStatusData(data))
)

export const togglePause = () => fetchStatus({ command: 'pl_pause' })

export const toNextItem = () => fetchStatus({ command: 'pl_next' })
export const toPrevItem = () => fetchStatus({ command: 'pl_previous' })

const dumpStatusData = data => {
  const {
    time, length,
    volume,
    state,
    information: { category: { meta: { artist, title } } }
  } = data
  return {
    trackInfo: {
      time, length,
      artist, title,
      volume: volume / MAX_VOLUME,
      paused: state !== 'playing'
    },
  }
}

const status = {
  "time": 109,
  "volume": 312,
  "length": 155,
  "state": "paused",
  "random": false,
  "repeat": false,
  "loop": true,
  "information": {
    "category": {
      "meta": {
        "album": "Simple Times",
        "title": "Free Of Me",
        "artist": "Joshua Radin",
        "filename": "Free Of Me.mp3"
      },
    },
  },
}
