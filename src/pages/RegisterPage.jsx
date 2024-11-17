import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

function RegisterPage() {
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register(email, password);
            navigate('/home'); // Redirect to home after registration
        } catch (error) {
            setError('This email is already registered. Please use a different email.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-8 w-full sm:w-96">
                <h2 className="mb-6">Register</h2>

                {error && <p className="mb-4">{error}</p>}
                
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-4 py-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-4 py-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="w-full py-2">Register</button>
                </form>

                <div className="mt-4 text-center">
                    <p className="">
                        Already have an account?{' '}
                        <Link to="/login" className="">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
