import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';


const hospitalCredentials = {
  "13": { id: "admin@city-general.com", password: "123" },
  "14": { id: "admin@general.com", password: "123"}
};

const bloodCredentials = {
  "9D55VE7GY69": {id:"blood@bank1.com", password: "123"},
  "3NN2X55VV67": {id:"blood@bank2.com", password: "123"}
}


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      // Check hospital credentials
      const hospitalId = Object.keys(hospitalCredentials).find(
        id =>
          hospitalCredentials[id].id === email &&
          hospitalCredentials[id].password === password
      );

      if (hospitalId) {
        navigate('admin', { state: { type: 'hospital', id: hospitalId } });
        return;
      }

      // Check blood bank credentials
      const bloodBankId = Object.keys(bloodCredentials).find(
        id =>
          bloodCredentials[id].id === email &&
          bloodCredentials[id].password === password
      );

      if (bloodBankId) {
        // Pass blood bank data along with ID 
        navigate('bloodadmin', { state: { type: 'blood', id: bloodBankId } });
        return;
      }

      setError('Invalid credentials');
    } else {
      // Handle registration
      setError('Registration functionality not implemented');
    }
  };

  const toggleForm = (value) => setIsLogin(value);


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3efff] p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <div className="flex">
            <button
              className={`flex-1 py-4 text-center text-sm font-medium relative z-10 ${
                isLogin ? 'text-white bg-purple-600' : 'text-gray-500'
              }`}
              onClick={() => toggleForm(true)}
            >
              Login
            </button>
            <button
              className={`flex-1 py-4 text-center text-sm font-medium relative z-10 ${
                !isLogin ? 'text-white bg-purple-600' : 'text-gray-500'
              }`}
              onClick={() => toggleForm(false)}
            >
              Sign Up
            </button>
          </div>
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-primary"
            initial={false}
            animate={{ x: isLogin ? '0%' : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            key={isLogin ? 'login' : 'signup'}
          >
            <h2 className="text-2xl font-bold text-center mb-6">
              {isLogin ? 'Admin Login' : 'Register Admin'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" required />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@example.com" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" required />
                </div>
              )}
              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}
              <Button type="submit" className="w-full bg-purple-600 text-white">
                {isLogin ? 'Login' : 'Sign Up'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;