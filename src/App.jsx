import { useState } from 'react'





// ==========================================
// 1. COMPONENT (Child)
// ==========================================
// This is a reusable component. 
// It accepts 'name' and 'clickCount' as PROPS.
function GreetingCard({ name, clickCount }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
      <h2>Hello, {name}! 👋</h2>
      <p>The button has been clicked <strong>{clickCount}</strong> times.</p>
    </div>
  );
}

// ==========================================
// 1. COMPONENT (Parent)
// ==========================================
// This is the main application component.
export default function App() {
  
  // ========================================
  // 2. STATE
  // ========================================
  // We define a state variable called 'count' and set its initial value to 0.
  // 'setCount' is the function we use to update it.
  const [count, setCount] = useState(0);

  // A simple function to update our state
  const handleButtonClick = () => {
    setCount(count + 1); 
   
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>React Core Concepts</h1>
      
      {/* Clicking this button updates the STATE */}
      <button 
        onClick={handleButtonClick} 
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Click Me!
      </button>

      {/* ===================================== */}
      {/* 3. PROPS                              */}
      {/* ===================================== */}
      {/* We render the child component and pass data to it using props. */}
      {/* 'name' is a static string, 'clickCount' is our dynamic state.  */}
      <GreetingCard name="Alex" clickCount={count} />
      
    </div>
  );
}
