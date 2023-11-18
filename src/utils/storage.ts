const storagePrefix = 'app_';

const storage = {
  getAccessToken: () => {
    return JSON.parse(
      localStorage.getItem(`${storagePrefix}access_token`) as string
    );
  },
  getRefreshToken: () => {
    return JSON.parse(
      localStorage.getItem(`${storagePrefix}refresh_token`) as string
    );
  },
  getWizardToken: () => {
    return JSON.parse(
      localStorage.getItem(`${storagePrefix}wizard_access_token`) as string
    );
  },
  setTokens: (tokens: { accessToken: string; refreshToken: string }) => {
    localStorage.setItem(
      `${storagePrefix}access_token`,
      JSON.stringify(tokens.accessToken)
    );
    localStorage.setItem(
      `${storagePrefix}refresh_token`,
      JSON.stringify(tokens.refreshToken)
    );
  },
  clearTokens: () => {
    localStorage.removeItem(`${storagePrefix}access_token`);
    localStorage.removeItem(`${storagePrefix}refresh_token`);
    localStorage.removeItem(`${storagePrefix}wizard_access_token`);
  },
  setWizardToken: (token: string) => {
    localStorage.setItem(
      `${storagePrefix}wizard_access_token`,
      JSON.stringify(token)
    );
  },
  clearWizardToken: () => {
    localStorage.removeItem(`${storagePrefix}wizard_access_token`);
  },
};

export default storage;
