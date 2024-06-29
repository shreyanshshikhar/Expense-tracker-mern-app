import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Auth } from './pages/auth';
import { SignedIn,  UserButton } from '@clerk/clerk-react';
import { FinancialRecordsProvider } from './context/financial-record-context';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app-container">
                <div className="navbar">
                    <Link to="/auth"> Dashboard</Link>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                </div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <FinancialRecordsProvider>
                                <Dashboard />
                            </FinancialRecordsProvider>
                        }
                    />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
