import Venue from '../components/Venue'

import enData from '/public/locales/en/venue.json';

function App() {
  return (
    <>
      <Venue data={enData} />
    </>
  );
}

export default App;
