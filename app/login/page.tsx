import React from 'react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', { email, password, callbackUrl: '/' });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        <div className="text-center">
          <img src="/assets/logo.png" alt="ML Music" className="h-16 w-auto mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Entre no ML Music</h1>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              className="bg-ml-dark-grey p-3 rounded-md border border-transparent focus:border-ml-green outline-none transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Senha</label>
            <input
              type="password"
              className="bg-ml-dark-grey p-3 rounded-md border border-transparent focus:border-ml-green outline-none transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-ml-green text-black font-bold p-3 rounded-full hover:scale-105 transition-transform mt-4"
          >
            Entrar
          </button>
        </form>

        <div className="text-center text-sm text-gray-400">
          Não tem uma conta? <a href="/register" className="text-white underline hover:text-ml-green">Cadastre-se</a>
        </div>
      </div>
    </div>
  );
}
