'use client';

import { Task } from '@/types/task';
import { useState } from 'react';

interface TaskItemProps {
  task: Task;
  onToggle: (task: Task) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isToggling, setIsToggling] = useState(false);

  const handleToggle = async () => {
    setIsToggling(true);
    try {
      await onToggle(task);
    } catch (error) {
      console.error('Failed to toggle task:', error);
    } finally {
      setIsToggling(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this task?')) return;
    
    setIsDeleting(true);
    try {
      await onDelete(task.id);
    } catch (error) {
      console.error('Failed to delete task:', error);
      alert('Failed to delete task. Please try again.');
      setIsDeleting(false);
    }
  };

  const isPending = task.status === 'pending';

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md border-l-4 ${
      isPending ? 'border-yellow-500' : 'border-green-500'
    } transition-all hover:shadow-lg`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <input
              type="checkbox"
              checked={!isPending}
              onChange={handleToggle}
              disabled={isToggling || isDeleting}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer disabled:cursor-not-allowed"
            />
            <h3 className={`text-lg font-semibold ${
              isPending ? 'text-gray-800' : 'text-gray-500 line-through'
            }`}>
              {task.title}
            </h3>
          </div>
          
          {task.description && (
            <p className={`text-sm ml-8 ${
              isPending ? 'text-gray-600' : 'text-gray-400'
            }`}>
              {task.description}
            </p>
          )}
          
          <div className="flex items-center gap-3 mt-2 ml-8">
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
              isPending 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-green-100 text-green-800'
            }`}>
              {isPending ? 'Pending' : 'Completed'}
            </span>
            <span className="text-xs text-gray-500">
              {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        <button
          onClick={handleDelete}
          disabled={isDeleting || isToggling}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="Delete task"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}