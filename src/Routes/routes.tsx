import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext/useAuth';
import { useToast } from '../Hooks/Toast';

function ProtectedLayout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null {
  const { ToastError } = useToast();
  const auth = useAuth();
  const navigation = useNavigate();
  if (!auth.email) {
    ToastError({ message: 'Ops! Verifique email ou senha!' });
    navigation('/');
    return null;
  }

  return children;
}
export default ProtectedLayout;
