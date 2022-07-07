import { useState } from 'react';
import axios from 'axios';
import './style.css';
import Sidebar from '../../components/Sidebar/Sidebar';

function Home() {
  const [data, setData] = useState({});

  axios.get('')


  return (
    <>
        <div className='App'>
          <div className='Container'>
            <Sidebar/>
            <div className='Home'>
              <div className='Grid'>
                <div className='Title'>
                  Home
                  <div className = 'SmallText'>
                    Make me money, or don't. The choice is yours.
                  </div>
                </div>
                <div className='Chart'>
                  Chart
                  <div className='Box'>
                    
                  </div>
                </div>
                <div className='Order'>
                  Order
                  <div className='Box'>

                  </div>
                </div>
                <div className='Activity'>
                  Activity
                  <div className='Box'>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;
