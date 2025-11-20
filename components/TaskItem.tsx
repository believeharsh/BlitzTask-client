'use client';

import { useState } from 'react';
import { Task } from '@/types/task';

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
    <div
      className="
        rounded-xl border border-gray-200 bg-white px-4 py-3 sm:px-5 sm:py-4
        flex items-start gap-3 sm:gap-4
        hover:border-gray-900 hover:shadow-sm transition-all
      "
    >
      {/* Checkbox */}
      <div className="pt-1">
        <input
          type="checkbox"
          checked={!isPending}
          onChange={handleToggle}
          disabled={isToggling || isDeleting}
          className="
            w-5 h-5 rounded border-gray-300 text-gray-900
            focus:ring-2 focus:ring-gray-900
            cursor-pointer disabled:cursor-not-allowed
          "
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2">
          <h3
            className={`
              text-sm sm:text-base font-semibold truncate
              ${isPending ? 'text-gray-900' : 'text-gray-500 line-through'}
            `}
            title={task.title}
          >
            {task.title}
          </h3>

          <div className="flex items-center gap-2 shrink-0">
            <span
              className={`
                inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium
                ${isPending ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}
              `}
            >
              {isPending ? 'Pending' : 'Completed'}
            </span>
            <span className="text-[11px] text-gray-400">
              {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        {task.description && (
          <p
            className={`
              mt-1.5 text-xs sm:text-sm wrap-break-word
              ${isPending ? 'text-gray-600' : 'text-gray-400'}
            `}
          >
            {task.description}
          </p>
        )}
      </div>

      {/* Delete button */}
      <button
        onClick={handleDelete}
        disabled={isDeleting || isToggling}
        className="
          ml-1 text-gray-400 hover:text-red-600 hover:bg-red-50
          p-1.5 rounded-lg transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed
        "
        title="Delete task"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}
