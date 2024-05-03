import React, { Suspense,lazy } from 'react';
import { BrowserRouter, useNavigate, Routes, Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Random from './components/Random';

// Define Dashboard component using React.lazy
const Dashboard = lazy(() => import('./components/Dashboard'));

export default function App3() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>} />
                <Route path="/Landing" element={<Landing />} />
                <Route path="/myPage" element={<Random />} />
            </Routes>
            <Navigation />
        </BrowserRouter>
    );
}

function Navigation() {
    const navigate = useNavigate();
    function toDashboard() {
        navigate('/Dashboard');
    }
    function toLanding() {
        navigate('/Landing');
    }
    function toMyPage() {
        navigate('/myPage');
    }

    return (
        <>
            <button onClick={toDashboard}>Dashboard</button>
            <button onClick={toLanding}>Landing</button>
            <button onClick={toMyPage}>Mypage</button>
        </>
    );
}
