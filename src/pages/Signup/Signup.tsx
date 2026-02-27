import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';

type SignupResponse = {
  accessToken: string;
  user: {
    sub: string;
    name: string;
    number: string;
    role: 'admin' | 'user';
  };
};

const Signup = () => {
  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    password: '',
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setShowSuccessCard(false);

    try {
      const response = await api.post<SignupResponse>('/auth/signup', formData);
      localStorage.setItem('alifAuth', JSON.stringify(response.data));
      setShowSuccessCard(true);
      setFormData({ name: '', number: '', password: '' });
    } catch (error: any) {
      const message = error?.response?.data?.message || 'Signup failed. Please try again.';
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-brand-dark/20 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
        {showSuccessCard && (
          <div className="mb-5 rounded-2xl border border-green-300 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
            Signup completed successfully.
          </div>
        )}
        {errorMessage && (
          <div className="mb-5 rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {errorMessage}
          </div>
        )}
        <h1 className="text-3xl font-bold text-text-primary">Signup</h1>
        <p className="mt-2 text-sm text-text-secondary">Create your account.</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-semibold text-text-primary">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Your name"
              className="w-full rounded-xl border border-brand-dark/30 px-4 py-2.5 outline-none transition focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="number" className="mb-1 block text-sm font-semibold text-text-primary">
              Number
            </label>
            <input
              id="number"
              type="tel"
              value={formData.number}
              onChange={(event) => setFormData((prev) => ({ ...prev, number: event.target.value }))}
              placeholder="01XXXXXXXXX"
              className="w-full rounded-xl border border-brand-dark/30 px-4 py-2.5 outline-none transition focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-semibold text-text-primary">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(event) => setFormData((prev) => ({ ...prev, password: event.target.value }))}
              placeholder="********"
              className="w-full rounded-xl border border-brand-dark/30 px-4 py-2.5 outline-none transition focus:border-accent"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-accent px-6 py-2.5 text-base font-semibold text-text-inverse transition hover:bg-accent-hover"
          >
            {isSubmitting ? 'Signing up...' : 'Signup'}
          </button>
        </form>

        <div className="mt-5 text-center text-sm text-text-secondary">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-accent hover:text-accent-hover">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
