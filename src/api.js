export const fetchUSStories = (keyword) => {
  const topic = keyword || 'home';
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=3WFYADXBKGNAUyKlI4gXRZTp7ouSRq4r`)
    .then(response => response.json())
}