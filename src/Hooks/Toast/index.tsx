import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  ReactNode,
} from 'react';
import { toast } from 'react-toastify';

import { ToastContainer } from './styles';

interface ToastProps {
  message: string;
}

interface AuthContextData {
  Toastsuccess(props: ToastProps): void;
  ToastError(props: ToastProps): void;
  children: ReactNode;
}

const ToastContext = createContext({} as AuthContextData);

interface ToastProviderProps {
  children: ReactNode;
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [autoClose] = useState(3000);

  const Toastsuccess = useCallback(({ message }: ToastProps) => {
    toast.success(message);
  }, []);

  const ToastError = useCallback(({ message }: ToastProps) => {
    toast.error(message);
  }, []);

  return (
    <ToastContext.Provider value={{ Toastsuccess, ToastError, children }}>
      <ToastContainer
        position="top-right"
        autoClose={autoClose}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        bodyClassName={() => 'background: red;'}
      />
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): AuthContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToat must be used within a ToastProvider');
  }

  return context;
}

export { ToastContext, ToastProvider, useToast };
