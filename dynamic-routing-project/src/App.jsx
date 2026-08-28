import Navbar from "./components/Navbar"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <div className="bg-black text-white h-screen">
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default App
