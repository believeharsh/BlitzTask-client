import useSWR from 'swr';
import { Task, CreateTaskInput, UpdateTaskInput } from '@/types/task';
import { taskAPI } from '@/lib/api';

export const useTasks = () => {
  const { data, error, isLoading, mutate } = useSWR<Task[]>(
    '/tasks',
    taskAPI.getTasks,
    {
      revalidateOnFocus: false,
      refreshInterval: 0,
    }
  );

  const createTask = async (taskData: CreateTaskInput) => {
    const newTask = await taskAPI.createTask(taskData);
    mutate([...(data || []), newTask], false);
    return newTask;
  };

  const updateTask = async (id: string, taskData: UpdateTaskInput) => {
    const updatedTask = await taskAPI.updateTask(id, taskData);
    mutate(
      data?.map((task) => (task.id === id ? updatedTask : task)),
      false
    );
    return updatedTask;
  };

  const deleteTask = async (id: string) => {
    await taskAPI.deleteTask(id);
    mutate(
      data?.filter((task) => task.id !== id),
      false
    );
  };

  const toggleTaskStatus = async (task: Task) => {
    const newStatus = task.status === 'pending' ? 'completed' : 'pending';
    return updateTask(task.id, { status: newStatus });
  };

  return {
    tasks: data || [],
    isLoading,
    error,
    createTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
    mutate,
  };
};