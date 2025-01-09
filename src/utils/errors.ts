export const getErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Error: Invalid email format.';
    case 'auth/email-already-in-use':
      return 'Error: Email is already in use.';
    case 'auth/missing-password':
      return 'Error: Password field is required.';
    case 'auth/weak-password':
      return 'Error: Weak password. The password must be longer.';
    case 'auth/wrong-password':
      return 'Error: Incorrect password.';
    case 'auth/user-not-found':
      return 'Error: User with the specified email was not found.';
    case 'auth/user-disabled':
      return 'Error: User has been disabled by the administrator.';
    case 'auth/too-many-requests':
      return 'Error: Too many login attempts. Please try again later.';
    case 'auth/operation-not-allowed':
      return 'Error: Authentication method is not allowed on your Firebase project.';
    case 'auth/network-request-failed':
      return 'Error: Network error, unable to complete the request.';
    default:
      return 'Authentication error.';
  }
};
