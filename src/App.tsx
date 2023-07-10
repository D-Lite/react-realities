import './App.css'
import { ModelViewer } from './components'

function App() {
  return (
    <div>
      <ModelViewer
        src="./src/assets/tiger_high_detailed.glb"
        srcalt="A low detailed tiger"
        loading="eager"
        ar={false}
        title="Google Model Viewer Example"
      />
    </div>
  )
}

export default App
