import { createContext, useState } from 'react';

export const SampleContext = createContext({
  sampleValue: '',
  setSampleValue: () => {},
});

export const SampleProvider = ({ children }) => {
  const [sampleValue, setSampleValue] = useState('');
  return (
    <SampleContext.Provider value={{ sampleValue, setSampleValue }}>
      {children}
    </SampleContext.Provider>
  );
};
