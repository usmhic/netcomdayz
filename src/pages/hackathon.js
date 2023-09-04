import Hackathon from '../components/Hackathon'

import enData from '/public/locales/en/Hackathon.json';

function App() {
  return (
    <>
      <Hackathon data={enData} />
    </>
  );
}

export default App;