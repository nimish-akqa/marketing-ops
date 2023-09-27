import { FormEvent } from 'react';
import { TaskFormProps } from '@/types/taskform';

export const handleTaskFormSubmit =
  <T>(formData: T, props: TaskFormProps) =>
  async (e: FormEvent) => {
    e.preventDefault();
    console.log('Data submitted from form: ', JSON.stringify(formData));

    try {
      const apiUrl = `/api/tasks?platform=${props.platform}&projectId=${props.projectId}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      // if (response.ok) {
      //   const data = await response.json();

      //   console.log('Job Result Received:', data.jobResult);
      // } else {
      //   console.error('Job creation failed');
      // }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

type FormChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;
export const handleTaskInputChange =
  <T>(formData: T, setFormData: React.Dispatch<React.SetStateAction<T>>) =>
  (e: FormChangeEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

export const handleProjectFormSubmit =
  <T>(formData: T) =>
  async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Data submitted from form: ', JSON.stringify(formData));

    try {
      const apiUrl = `/api/projects`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

export const handleUserFormSubmit =
  <T>(formData: T) =>
  async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Data submitted from form: ', JSON.stringify(formData));

    try {
      const apiUrl = `/api/agents`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

export const handleInputChange =
  <T>(formData: T, setFormData: React.Dispatch<React.SetStateAction<T>>) =>
  (e: FormChangeEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
