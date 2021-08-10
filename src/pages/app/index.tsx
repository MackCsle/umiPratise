import { useState } from 'react';
import useSyncCallback from '@/utils/hightool';
function App() {
  const [state, setstate] = useState(0);

  const setT = () => {
    setstate(state + 1);
    func();
  };

  const func = useSyncCallback(() => {
    console.log(state);
  });

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={setT}>set 22</button>
      </header>
    </div>
  );
}
export default App;
