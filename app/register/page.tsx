'use client';

import React, { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would call a server action to create the user in Prisma
    console.log('Creating user...', formData);
    alert('Funcionalidade de registro em desenvolvimento! Por enquanto, use o login.');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        <div className="text-center">
          <img src="/assets/logo.png" alt="ML Music" className="h-16 w-auto mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Crie sua conta no ML Music</h1>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Nome Completo</label>
            <input
              type="text"
              className="bg-ml-dark-grey p-3 rounded-md border border-transparent focus:border-ml-green outline-none transition-colors"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              className="bg-ml-dark-grey p-3 rounded-md border border-transparent focus:border-ml-green outline-none transition-colors"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Senha</label>
            <input
              type="password"
              className="bg-ml-dark-grey p-3 rounded-md border border-transparent focus:border-ml-green outline-none transition-colors"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-ml-green text-black font-bold p-3 rounded-full hover:scale-105 transition-transform mt-4"
          >
            Cadastrar
          </button>
        </form>

        <div className="text-center text-sm text-gray-400">
          Já tem uma conta? <a href="/login" className="text-white underline hover:text-ml-green">Faça Login</a>
        </div>
      </div>
    </div>
  );
}
