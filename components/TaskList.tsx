'use client';

import { Task } from '@/types/task';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  isLoading: boolean;
  onToggle: (task: Task) => Promise<any>;
  onDelete: (id: string) => Promise<void>;
}

export default function TaskList({ tasks, isLoading, onToggle, onDelete }: TaskListProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-gray-200 border-t-gray-900" />
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="bg-white border border-gray-200 p-10 rounded-xl text-center shadow-sm">
        <svg
          className="mx-auto h-10 w-10 text-gray-300 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <h3 className="text-base font-semibold text-gray-900 mb-1">No tasks yet</h3>
        <p className="text-sm text-gray-500">
          Create your first task using the form on the left.
        </p>
      </div>
    );
  }

  const pendingTasks = tasks.filter(task => task.status === 'pending');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  return (
    <div className="space-y-8">
      {/* Stats - match landing style */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
          <p className="text-xs text-gray-500">Total tasks</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">
            {tasks.length}
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
          <p className="text-xs text-gray-500">Pending</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">
            {pendingTasks.length}
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
          <p className="text-xs text-gray-500">Completed</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">
            {completedTasks.length}
          </p>
        </div>
      </div>

      {/* Pending Tasks */}
      {pendingTasks.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2 uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-gray-900" />
            Pending tasks
          </h3>
          <div className="space-y-3">
            {pendingTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </div>
        </section>
      )}

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2 uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            Completed tasks
          </h3>
          <div className="space-y-3">
            {completedTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
