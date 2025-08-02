import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const authCookie = Cookies.get('auth');
    if (authCookie === 'true') {
      setIsAuthenticated(true);
    } else {
      navigate('/login');
    }
    setIsLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    Cookies.remove('auth');
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-yellow-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">Helvetia Pub Admin</h1>
              <span className="px-3 py-1 bg-green-900 text-green-300 text-xs rounded-full">
                Online
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">adminhelvetia</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm transition-colors"
              >
                Abmelden
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Dashboard Cards */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">Menu Verwaltung</h3>
                <p className="text-gray-400 text-sm">Speisekarte bearbeiten</p>
              </div>
              <div className="p-3 bg-yellow-500 rounded-lg">
                <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors">
                Menu bearbeiten
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">Öffnungszeiten</h3>
                <p className="text-gray-400 text-sm">Zeiten aktualisieren</p>
              </div>
              <div className="p-3 bg-blue-500 rounded-lg">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors">
                Zeiten bearbeiten
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">Kontakt Info</h3>
                <p className="text-gray-400 text-sm">Kontaktdaten verwalten</p>
              </div>
              <div className="p-3 bg-green-500 rounded-lg">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors">
                Kontakt bearbeiten
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">Website Status</h3>
                <p className="text-gray-400 text-sm">System Überwachung</p>
              </div>
              <div className="p-3 bg-purple-500 rounded-lg">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">Alle Systeme funktional</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">Bilder Galerie</h3>
                <p className="text-gray-400 text-sm">Fotos verwalten</p>
              </div>
              <div className="p-3 bg-pink-500 rounded-lg">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors">
                Bilder hochladen
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">Backup System</h3>
                <p className="text-gray-400 text-sm">Daten sichern</p>
              </div>
              <div className="p-3 bg-orange-500 rounded-lg">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors">
                Backup erstellen
              </button>
            </div>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="bg-gray-800 rounded-lg border border-gray-700">
            <div className="px-6 py-4 border-b border-gray-700">
              <h2 className="text-lg font-medium text-white">Letzte Aktivitäten</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">System erfolgreich gestartet</span>
                  <span className="text-gray-500 text-xs">vor 2 Minuten</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Admin angemeldet</span>
                  <span className="text-gray-500 text-xs">vor 5 Minuten</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Website aktualisiert</span>
                  <span className="text-gray-500 text-xs">vor 1 Stunde</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;