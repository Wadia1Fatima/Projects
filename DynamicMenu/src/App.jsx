import DynamicMenu from "./components"
import menuData from "./components/data"

function App() {

  return (
    <div>
      <DynamicMenu menus={menuData} />
    </div>
  )
}

export default App
