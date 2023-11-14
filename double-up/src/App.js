import CalendarPage from "./Pages/CalendarPage"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Header from "./Components/Header"

function App() {
  return(
    <div>
      <Header />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarPage />
    </LocalizationProvider>
    </div>
  )
}

export default App;