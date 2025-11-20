'use client';

import { useTasks } from '@/hooks/useTasks';
import TaskForm from '@/components/TaskFrom';
import TaskList from '@/components/TaskList';

export default function Home() {
  const { 
    tasks, 
    isLoading, 
    error,
    createTask, 
    deleteTask, 
    toggleTaskStatus 
  } = useTasks();

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-red-800 font-semibold text-lg mb-2">Error Loading Tasks</h2>
          <p className="text-red-600 text-sm">
            {error.message || 'Failed to connect to the server. Please make sure the backend is running.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-300 mb-2">
            📋 Task Manager
          </h1>
          <p className="text-gray-500">
            Organize your tasks efficiently and boost your productivity
          </p>
        </header>

        {/* Task Form */}
        <TaskForm onSubmit={createTask} />

        {/* Task List */}
        <TaskList
          tasks={tasks}
          isLoading={isLoading}
          onToggle={toggleTaskStatus}
          onDelete={deleteTask}
        />
      </div>
    </main>
  );
}