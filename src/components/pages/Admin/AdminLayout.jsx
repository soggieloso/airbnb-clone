"use client";

import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Admin/Sidebar';
import { AdminSidebar } from '../../components/Admin/AdminSidebar';
import { Header } from '../../components/Admin/Header';
import { useAuth } from '../../hooks/useAuth';

export default function AdminLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} onLogout={logout} />
        <div className="flex flex-1 overflow-hidden">
          <AdminSidebar />
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}