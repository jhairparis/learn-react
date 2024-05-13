import React, { createContext, useState, useContext } from 'react';

const CounterContext = createContext();
const SessionContext = createContext();

const Counter = () => {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState({ loggedIn: false}); 

  return (
    <SessionContext.Provider value={session}>
      <CounterContext.Provider value={{ count, setCount }}>
        <CounterDisplay />
      </CounterContext.Provider>
    </SessionContext.Provider>
  );
};

const CounterDisplay = () => {
  const { count, setCount } = useContext(CounterContext);
  const session = useContext(SessionContext);

  return (
    <div style={{height:"100vh"}}>
      {session.loggedIn ? (
        <>
          <p>Count: {count}</p>
          <button className='btn btn-secondary' onClick={() => setCount(count + 1)}>Increment</button>
        </>
      ) : (
        <p>Please log in to see the counter.</p>
      )}
    </div>
  );
};

export default Counter;

// Made by Jhair Paris (jhairparis.com)