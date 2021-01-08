import React from 'react';
import Spinner from '../Spinner/Spinner';

interface WithSpinnerProps {
  isLoading: boolean;
}

const WithSpinner = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => ({ isLoading, ...props }: WithSpinnerProps) =>
  isLoading ? <Spinner /> : <WrappedComponent {...(props as P)} />;

export default WithSpinner;
