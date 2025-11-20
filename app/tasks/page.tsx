'use client';

import Link from 'next/link';
import Image from 'next/image';
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800">
        <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-md text-center shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error loading tasks</h2>
          <p className="text-gray-600 text-sm mb-6">
            {error.message || 'Failed to connect to the server. Please make sure the backend is running.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar - matching landing page */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-lg flex items-center p-1 justify-center">
                <Image
                  src="/logo/blitztask_main_logo.png"
                  alt="BlitzTask logo"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-xl font-sans text-gray-900">BlitzTask</span>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </Link>
              <span className="px-3 py-1 rounded-full border border-gray-200 text-gray-700 bg-gray-50">
                Tasks
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Header */}
          <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Your Tasks
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Capture, track, and complete your tasks — all in one simple view.
              </p>
            </div>

            {/* Small summary pill */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-600 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gray-900 animate-pulse" />
              <span>
                {tasks.length === 0
                  ? 'No tasks yet — start by adding one'
                  : `${tasks.filter(t => t.status === 'pending').length} pending • ${tasks.length} total`}
              </span>
            </div>
          </header>

          {/* Layout: form + list */}
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] items-start">
            {/* Left: Form */}
            <div>
              <TaskForm onSubmit={createTask} />
            </div>

            {/* Right: List */}
            <div>
              <TaskList
                tasks={tasks}
                isLoading={isLoading}
                onToggle={toggleTaskStatus}
                onDelete={deleteTask}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer - subtle, consistent */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BlitzTask. All rights reserved.</p>
          <p className="text-gray-400">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
