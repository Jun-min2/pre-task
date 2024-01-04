// import { useState } from 'react';
// import Dropdown from './Dropdown';

// const App = () => {
//   const [view, setView] = useState(false);

//   return (
//     <div>
//       <ul
//         onClick={() => {
//           setView(!view);
//         }}
//       >
//         반가워요, nickname 님! {view ? '⌃' : '⌄'}
//         {view && <Dropdown />}
//       </ul>
//     </div>
//   );
// };

// export default App;

import Dropdown from './Dropdown';
import { useState } from 'react';
const App = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  return (
    <div className="app">
      <button onClick={() => setDropdownVisibility(!dropdownVisibility)}>
        {dropdownVisibility ? 'Close' : 'Open'}
      </button>
      <Dropdown visibility={dropdownVisibility}>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </Dropdown>
    </div>
  );
};

export default App;
