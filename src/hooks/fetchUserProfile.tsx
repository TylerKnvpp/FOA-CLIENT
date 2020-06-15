const fetchUserData = async (id: string) => {
  const url = `http://localhost:4000/users/${id}`;

  try {
    const request = await fetch(url);
    if (request.ok) {
      const res = await request.json();
      return res;
    }
  } catch (error) {
    return error;
  }
};

export { fetchUserData };
