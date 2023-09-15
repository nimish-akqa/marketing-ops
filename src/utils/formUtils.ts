import { FormEvent } from 'react';

export const handleTaskFormSubmit =
  <T>(formData: T, jobName: string) =>
  async (e: FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
    try {
      const apiUrl = `/api/tasks?jobName=${jobName}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Job created:', data.job);
      } else {
        console.error('Job creation failed');
      }
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
