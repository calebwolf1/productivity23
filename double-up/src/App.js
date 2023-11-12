import CalendarPage from "./Pages/CalendarPage"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarPage />
    </LocalizationProvider>
  )
}

export default App;