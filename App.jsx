import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Chats from './pages/Chats';
import ChatView from './pages/ChatView';
import Calls from './pages/Calls';
import Payments from './pages/Payments';
import Profile from './pages/Profile';

export default function App(){
  return (
    <div style={{maxWidth:980, margin:'20px auto', padding:12}}>
      <nav style={{padding:12, display:'flex', gap:12, borderBottom:'1px solid #eee'}}>
        <Link to="/">Chats</Link>
        <Link to="/calls">Calls</Link>
        <Link to="/payments">Payments</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <main style={{padding:16}}>
        <Routes>
          <Route path="/" element={<Chats/>} />
          <Route path="/chat/:id" element={<ChatView/>} />
          <Route path="/calls" element={<Calls/>} />
          <Route path="/payments" element={<Payments/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </main>
    </div>
  );
}