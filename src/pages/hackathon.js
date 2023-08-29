import HackathonPage from '../components/Hackathon'

import enData from '/public/locales/en/Hackathon.json';

function App() {
  return (
    <>
      <HackathonPage data={enData} />
    </>
  );
}

export default App;