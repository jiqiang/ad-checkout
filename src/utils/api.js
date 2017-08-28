export const loadData = () => (
  fetch('/data/data.json').then(response => response.json())
)