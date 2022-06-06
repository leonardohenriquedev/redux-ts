import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Example from '../pages/Example';
import Login from '../pages/Login';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/example" element={<Example />} />
    </Routes>
  );
}
