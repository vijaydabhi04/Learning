import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExmapleuseState from './concepts/useState'
import ExampleuseEffect from './concepts/useEffect'
import ExmapleuseRef from './concepts/useRef'
import ExampleuseReducer from './concepts/useReducer'
import ExampleuseContext from './concepts/useContext'
import ExampleUseMemo from './concepts/useMemo'
import ExampleUseCallback from './concepts/useCallback'
import ExampleuseImperativeHandle from './concepts/useImperativeHandle'
import ExampleuseLayoutEffect from './concepts/useLayoutEffect'
import ExampleuseDeferredValue from './concepts/useDeferredValue'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ExmapleuseState /> */}
      {/* <ExampleuseEffect /> */}
      {/* <ExmapleuseRef /> */}
      {/* <ExampleuseReducer /> */}
      {/* <ExampleuseContext /> */}
      {/* <ExampleUseMemo /> */}
      {/* <ExampleUseCallback /> */}
      {/* <ExampleuseImperativeHandle /> */}
      {/* <ExampleuseLayoutEffect/> */}
      <ExampleuseDeferredValue/>
    </>
  )
}

export default App
