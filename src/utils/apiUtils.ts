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

export const getProjectUsers = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/project-users/`,
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

export const getAudiencePersona = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/audience/`,
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

export const getTasks = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/tasks/`,
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

export const getProjectTasks = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/project-tasks/`,
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
