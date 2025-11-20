import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-30 rounded-full"></div>
              <div className="relative bg-linear-to-br from-blue-600 to-purple-600 p-6 rounded-3xl shadow-2xl">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Organize Your Life
            <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              One Task at a Time
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A simple, beautiful, and powerful task manager to help you stay productive and organized.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              href="/tasks"
              className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            
            <a 
              href="#features"
              className="px-8 py-4 bg-white text-gray-800 text-lg font-semibold rounded-full shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-blue-300 transform hover:scale-105 transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Free</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">Fast</div>
              <div className="text-gray-600">& Simple</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">∞</div>
              <div className="text-gray-600">Tasks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Everything You Need to Stay Organized
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Task Creation</h3>
            <p className="text-gray-600">
              Add tasks instantly with our simple and intuitive interface. No complexity, just productivity.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Track Progress</h3>
            <p className="text-gray-600">
              Mark tasks as complete and watch your progress. Stay motivated as you accomplish your goals.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Management</h3>
            <p className="text-gray-600">
              Edit, delete, and organize your tasks effortlessly. Full control at your fingertips.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-linear-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Create Tasks</h3>
              <p className="text-gray-600">
                Click "Get Started" and add your first task. Give it a title and optional description.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-linear-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Track Progress</h3>
              <p className="text-gray-600">
                Check off tasks as you complete them. Watch your progress in real-time.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-linear-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stay Organized</h3>
              <p className="text-gray-600">
                Edit or delete tasks anytime. Keep your list clean and up-to-date.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Task Manager?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-lg shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Simple & Intuitive</h3>
                  <p className="text-gray-600">No learning curve. Start being productive immediately.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-lg shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Lightning Fast</h3>
                  <p className="text-gray-600">Built with modern technology for instant updates.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-lg shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Always Free</h3>
                  <p className="text-gray-600">No hidden costs, no subscriptions. 100% free forever.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-lg shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Mobile Responsive</h3>
                  <p className="text-gray-600">Works perfectly on all devices - desktop, tablet, and mobile.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-blue-100 to-purple-100 p-12 rounded-3xl shadow-xl">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900">Today's Tasks</h4>
                <span className="text-sm text-gray-500">3 pending</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <input type="checkbox" className="w-5 h-5 rounded" />
                  <span className="text-gray-700">Complete project proposal</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <input type="checkbox" className="w-5 h-5 rounded" />
                  <span className="text-gray-700">Review team feedback</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg opacity-50">
                  <input type="checkbox" className="w-5 h-5 rounded" checked readOnly />
                  <span className="text-gray-700 line-through">Morning standup meeting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Things Done?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start organizing your tasks today and boost your productivity.
          </p>
          <Link 
            href="/tasks"
            className="inline-block px-10 py-4 bg-white text-blue-600 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Start Now - It's Free!
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Task Manager</h3>
              <p className="text-sm">
                The simplest way to organize your life and boost productivity.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/tasks" className="hover:text-white transition-colors">
                    Get Started
                  </Link>
                </li>
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Built With</h3>
              <p className="text-sm">
                Next.js, TypeScript, Tailwind CSS, PostgreSQL, and Express.js
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 Task Manager. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}