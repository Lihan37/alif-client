import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';

type StoredAuth = {
  accessToken: string;
  user: {
    sub: string;
    name: string;
    number: string;
    role: 'admin' | 'user';
  };
};

type AdminUser = {
  _id: string;
  name: string;
  number: string;
  role: 'admin' | 'user';
  createdAt?: string;
};

const AdminDashboard = () => {
  const [status, setStatus] = useState<'loading' | 'allowed' | 'denied'>('loading');
  const [message, setMessage] = useState('Checking admin access...');
  const [users, setUsers] = useState<AdminUser[]>([]);

  useEffect(() => {
    const checkAccess = async () => {
      const raw = localStorage.getItem('alifAuth');
      if (!raw) {
        setStatus('denied');
        setMessage('Please login first.');
        return;
      }

      let parsed: StoredAuth | null = null;
      try {
        parsed = JSON.parse(raw) as StoredAuth;
      } catch {
        setStatus('denied');
        setMessage('Invalid session data. Please login again.');
        return;
      }

      if (parsed.user.role !== 'admin') {
        setStatus('denied');
        setMessage('Only admin account can access this dashboard.');
        return;
      }

      try {
        await api.get('/admin-only', {
          headers: { Authorization: `Bearer ${parsed.accessToken}` },
        });
        const usersResponse = await api.get<{ users: AdminUser[] }>('/admin/users', {
          headers: { Authorization: `Bearer ${parsed.accessToken}` },
        });
        setUsers(usersResponse.data.users ?? []);
        setStatus('allowed');
        setMessage('Welcome to Admin Dashboard');
      } catch {
        setStatus('denied');
        setMessage('Admin session invalid or expired. Please login again.');
      }
    };

    void checkAccess();
  }, []);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-brand-dark/20 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
        {status === 'loading' && (
          <div className="rounded-2xl border border-brand-dark/20 bg-surface-section px-4 py-4 text-sm font-semibold text-text-secondary">
            {message}
          </div>
        )}

        {status === 'allowed' && (
          <>
            <h1 className="text-3xl font-bold text-text-primary">Admin Dashboard</h1>
            <p className="mt-3 text-text-secondary">{message}</p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-brand-dark/20">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-surface-section text-text-primary">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Name</th>
                    <th className="px-4 py-3 font-semibold">Number</th>
                    <th className="px-4 py-3 font-semibold">Role</th>
                    <th className="px-4 py-3 font-semibold">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id} className="border-t border-brand-dark/10">
                      <td className="px-4 py-3">{user.name}</td>
                      <td className="px-4 py-3">{user.number}</td>
                      <td className="px-4 py-3 capitalize">{user.role}</td>
                      <td className="px-4 py-3">
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {users.length === 0 && (
                <p className="px-4 py-4 text-sm text-text-secondary">No users found.</p>
              )}
            </div>
          </>
        )}

        {status === 'denied' && (
          <div className="rounded-2xl border border-red-300 bg-red-50 px-4 py-4">
            <h1 className="text-xl font-bold text-red-700">Access Denied</h1>
            <p className="mt-2 text-sm text-red-700">{message}</p>
            <div className="mt-4">
              <Link to="/login" className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-text-inverse">
                Go to Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;
