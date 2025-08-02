import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate a small delay for better UX
    setTimeout(() => {
      if (username === 'adminhelvetia' && password === 'lionspub123') {
        // Set auth cookie
        Cookies.set('auth', 'true', { expires: 7 }); // Expires in 7 days
        
        // Redirect to admin
        navigate('/admin');
      } else {
        setError('Falscher Benutzername oder Passwort');
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-white">
            Admin Login
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Helvetia Pub Verwaltung
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="bg-gray-800 p-8 rounded-lg shadow-2xl border border-gray-700">
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                  Benutzername
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="adminhelvetia"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Passwort
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-900 border border-red-700 rounded-md">
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}

            <div className="mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin -ml-1 mr-3 h-5 w-5 border-2 border-black border-t-transparent rounded-full"></div>
                    Anmelden...
                  </div>
                ) : (
                  'Anmelden'
                )}
              </button>
            </div>
          </div>
        </form>

        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="text-yellow-500 hover:text-yellow-400 text-sm transition-colors"
          >
            ← Zurück zur Hauptseite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;