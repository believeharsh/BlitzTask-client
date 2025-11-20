import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "BlitzTask | Landing",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sleek Navbar */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-lg flex items-center p-1 justify-center">
                <Image
                  src="/logo/blitztask_main_logo.png"
                  alt="me"
                  width="64"
                  height="64"
                />
              </div>
              <span className="text-xl font-sans text-gray-900">BlitzTask</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#features"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </a>
              <Link
                href="/tasks"
                className="text-sm px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 mb-8">
            <span className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></span>
            Simple Task Management
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Organize Your Life,
            <span className="block text-gray-600 mt-2">One Task at a Time</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            A minimal, powerful task manager designed to help you stay focused
            and get things done.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/tasks"
              className="px-8 py-4 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-all"
            >
              Get Started Free
            </Link>

            <a
              href="#features"
              className="px-8 py-4 text-gray-700 text-lg font-medium rounded-lg border-2 border-gray-300 hover:border-gray-900 transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-500">Free Forever</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">Fast</div>
              <div className="text-sm text-gray-500">& Simple</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">∞</div>
              <div className="text-sm text-gray-500">Unlimited Tasks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-600">
              Simple features that make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-900 transition-all group">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quick Creation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Add tasks instantly with our intuitive interface. No complexity,
                just productivity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-900 transition-all group">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Track Progress
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mark tasks complete and watch your progress. Stay motivated as
                you achieve your goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-900 transition-all group">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Easy Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Edit, delete, and organize tasks effortlessly. Full control at
                your fingertips.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Create Tasks
              </h3>
              <p className="text-gray-600">
                Click "Get Started" and add your first task with a title and
                optional description.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Track Progress
              </h3>
              <p className="text-gray-600">
                Check off tasks as you complete them. Watch your progress in
                real-time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Stay Organized
              </h3>
              <p className="text-gray-600">
                Edit or delete tasks anytime. Keep your list clean and
                up-to-date.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Why Choose TaskFlow?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Simple & Intuitive
                    </h3>
                    <p className="text-gray-600">
                      No learning curve. Start being productive immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Lightning Fast
                    </h3>
                    <p className="text-gray-600">
                      Built with modern technology for instant updates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Always Free
                    </h3>
                    <p className="text-gray-600">
                      No hidden costs, no subscriptions. 100% free forever.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Mobile Responsive
                    </h3>
                    <p className="text-gray-600">
                      Works perfectly on all devices - desktop, tablet, and
                      mobile.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Today's Tasks
                  </h4>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    3 pending
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-gray-300"
                    />
                    <span className="text-gray-700">
                      Complete project proposal
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-gray-300"
                    />
                    <span className="text-gray-700">Review team feedback</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 opacity-60">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-gray-300"
                      checked
                      readOnly
                    />
                    <span className="text-gray-700 line-through">
                      Morning standup meeting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Things Done?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Start organizing your tasks today and boost your productivity.
          </p>
          <Link
            href="/tasks"
            className="inline-block px-8 py-4 bg-white text-gray-900 text-lg font-medium rounded-lg hover:bg-gray-100 transition-all"
          >
            Start Now - It's Free!
          </Link>
        </div>
      </div>

      {/* Sleek Footer */}
      <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-900 rounded-lg flex items-center p-1 md:p-2 justify-center">
                <Image
                  src="/logo/blitztask_main_logo.png"
                  alt="me"
                  width="64"
                  height="64"
                />
              </div>
              <span className="text-lg font-semibold text-gray-900">
                BlitzTask
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link
                href="/tasks"
                className="hover:text-gray-900 transition-colors"
              >
                Get Started
              </Link>
              <a
                href="#features"
                className="hover:text-gray-900 transition-colors"
              >
                Features
              </a>
              <span>Built with Next.js & Tailwind CSS</span>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            © 2025 TaskFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
