import React from "react";

type AuthContext = {
  isLoading: boolean;
  session: null | UserAPIResponse;
  save: (data: UserAPIResponse) => void;
  remove: () => void;
};

const LOCAL_STORAGE_KEY = "@refund";

export const AuthContext = React.createContext({} as AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = React.useState<null | UserAPIResponse>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  function save(data: UserAPIResponse) {
    localStorage.setItem(
      `${LOCAL_STORAGE_KEY}:user`,
      JSON.stringify(data.user)
    );
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token);

    setSession(data);
  }

  function remove() {
    setSession(null);

    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:user`);
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:token`);

    window.location.assign("/");
  }

  function loadUser() {
    const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`);
    const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`);

    if (token && user) {
      setSession({
        token,
        user: JSON.parse(user),
      });
    }

    setIsLoading(false);
  }

  React.useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ session, save, isLoading, remove }}>
      {children}
    </AuthContext.Provider>
  );
}
