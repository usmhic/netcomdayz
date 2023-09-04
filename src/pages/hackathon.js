import Hackathon from '../components/Hackathon'

import enData from '/public/locales/en/hackathon.json';

function App() {
  return (
    <>
      <Hackathon data={enData} />
    </>
  );
}

export default App;