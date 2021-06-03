export const fetchUSStories = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/us.json?api-key=3WFYADXBKGNAUyKlI4gXRZTp7ouSRq4r')
    .then(response => response.json())
}