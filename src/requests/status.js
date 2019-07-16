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

const MAX_VOLUME = 512

export const fetchStatus = () => Promise.resolve(status).then(data => {
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
