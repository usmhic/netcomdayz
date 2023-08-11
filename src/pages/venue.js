import VenuePage from '../components/Venue'

import enData from '/public/locales/en/venue.json';

function App() {
  return (
    <>
      <VenuePage data={enData} />
    </>
  );
}

export default App;
