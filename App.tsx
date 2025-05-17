import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ScoreTracking from './components/ScoreTracking';
import LoanEligibility from './components/LoanEligibility';
import LoanCategories from './components/LoanCategories';
import ReportGeneration from './components/ReportGeneration';
import CreditAlerts from './components/CreditAlerts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/score" element={<ScoreTracking />} />
        <Route path="/eligibility" element={<LoanEligibility />} />
        <Route path="/categories" element={<LoanCategories />} />
        <Route path="/report" element={<ReportGeneration />} />
        <Route path="/alerts" element={<CreditAlerts />} />
      </Routes>
    </Router>
  );
}

export default App;
