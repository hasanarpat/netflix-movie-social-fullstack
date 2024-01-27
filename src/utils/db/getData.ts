export const getAllData = async (route: String) => {
  const response = await fetch(`http://localhost:3000/api/${route}`, {
    cache: 'default',
    next: {
      revalidate: 10,
    },
  });
  // console.log(await response.json());
  if (!response.ok) return console.log('something went wrong');

  return await response.json();
};

export const getData = async (route: String, id: String) => {
  const response = await fetch(`http://localhost:3000/api/${route}/${id}`, {
    cache: 'no-cache',
  });
  // console.log(await response.json());
  if (!response.ok) return console.log('something went wrong');

  return await response.json();
};
