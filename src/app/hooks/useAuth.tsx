const useAuth = () => {
  const authenticate = async () => {
    const res = await fetch("/api/auth");
    const url = await res.text();

    window.open(url);
  };

  return { authenticate };
};

export default useAuth;
