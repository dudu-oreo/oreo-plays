import axios from 'axios'

const MAX_VOLUME = 512

const getStatus = () => (
  process.env.NODE_ENV === 'development'
  ? Promise.resolve(status)
  : axios.get('/requests/status.json').then(({ data }) => data)
)

export const fetchStatus = () => getStatus().then(data => {
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
})

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
