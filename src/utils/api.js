export const loadData = () => (
  fetch('http://localhost:3000/data/data.json').then(response => response.json())
)