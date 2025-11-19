import { Shield, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import kaitakiLogo from '../../kaitaki.png';

interface WaitlistPageProps {
  onBack: () => void;
}

export default function WaitlistPage({ onBack }: WaitlistPageProps) {
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (typeof window !== 'undefined') {
    (window as any).__waitlistEmails = emails;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (emails.includes(email)) {
      setError('This email is already on the waitlist');
      return;
    }

    setEmails([...emails, email]);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 relative overflow-hidden">
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={kaitakiLogo} alt="Kaitaki" className="w-6 h-6" />
            <span className="text-xl font-semibold">Kaitaki</span>
          </div>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 relative z-0">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Join the Waitlist
            </h1>
            <p className="text-lg text-zinc-600">
              Get ready to experience the future of privacy compliance automation
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <div className="space-y-4">
                <a
                  href="https://global.kaitaki.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors inline-block text-center"
                >
                  Try the Demo
                </a>

                <p className="text-xs text-zinc-500 text-center leading-relaxed">
                  By submitting your email, you agree to receive product updates and announcements from Kaitaki. You can unsubscribe at any time.
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center p-8 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-zinc-900">You're on the list!</h2>
              <p className="text-zinc-600">
                We'll notify you when Kaitaki is ready to transform your privacy compliance workflow.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 text-blue-500 hover:text-blue-600 transition-colors"
              >
                Add another email
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
