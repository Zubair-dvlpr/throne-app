import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import Button from '../../components/Shared/Button';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-950">
      <h1 className="text-7xl font-bold text-white font-Ringbearer mb-4">404</h1>
      <p className="text-2xl text-white font-Ringbearer mb-8">Oops! Page not found</p>
      
        <Link to="/" className=""><Button>Go Home </Button></Link>
      
    </div>
  );
}

export default ErrorPage;
