export const getTopMarginOfSection = (appWidth, appHeight, ratio) => (
  // 72             : top bar height
  // appWidth - 72  : disk height
  // 50             : info height
  // 64             : ctrl bar height
  (appHeight - 72 - (appWidth - 72) - 50 - 64) * ratio
)
