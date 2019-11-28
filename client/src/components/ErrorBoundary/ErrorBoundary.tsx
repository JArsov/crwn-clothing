import React from "react";
import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div<{ imageUrl: string }>`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;

interface ErrorBoundaryState {
  hasErrored: boolean;
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasErrored: false
  };

  static getDerivedStateFromError(_: Error) {
    return { hasErrored: true };
  }

  componentDidCatch(error: Error) {
    console.log(error);
  }

  render() {
    const { hasErrored } = this.state;
    const { children } = this.props;
    if (hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Sorry, this page is currently broken.</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
