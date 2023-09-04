export const getProjects = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/projects/`,
    {
      cache: 'no-store'
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
  return data;
};

export const getProject = async (slug: number) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/projects/${slug}`,
    {
      cache: 'no-store'
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
  return data;
};

export const getAgents = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/agents/`,
    {
      cache: 'no-store'
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
    });
  return data;
};
