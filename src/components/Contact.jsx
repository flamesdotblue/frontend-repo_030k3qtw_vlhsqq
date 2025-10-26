import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_10%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Let’s build something great</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Have a project in mind, or just want to say hi? My inbox is always open.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <form className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
                <input type="text" name="name" className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
                <input type="email" name="email" className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
                <textarea name="message" rows={5} className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell me about your project" />
              </div>
              <div className="sm:col-span-2">
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 font-medium shadow hover:bg-indigo-500 transition">
                  Send Email <Send className="w-4 h-4" />
                </a>
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <Mail className="w-5 h-5 text-indigo-600" /> hello@example.com
              </li>
              <li className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <Github className="w-5 h-5 text-zinc-900 dark:text-white" /> github.com/yourname
              </li>
              <li className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <Linkedin className="w-5 h-5 text-sky-600" /> linkedin.com/in/yourname
              </li>
            </ul>
            <p className="mt-6 text-sm text-zinc-500">Based in Anywhere, open to remote opportunities worldwide.</p>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Alex Dev. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-zinc-700 dark:hover:text-zinc-300">Back to top</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
