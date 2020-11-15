import React, {useEffect} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';

const App = (props) => {
  useEffect(() => {
    console.log('APP DID MOUNT');
  }, []);

  return (
    <div>
      <Layout/>
    </div>
  );
}

export default App;
