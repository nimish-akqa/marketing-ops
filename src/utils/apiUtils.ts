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

export const getProject = async (projectId: number) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/projects/${projectId}`,
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

export const getTask = async (taskId: number) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/tasks/${taskId}`,
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

export const getTaskDeliverables = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/task-deliverables/`,
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
export const getDeliverables = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/deliverables/`,
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
