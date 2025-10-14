import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            Get Started
          </h1>
          <p className="text-slate-400">Create your ThreatBuster account</p>
        </div>
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-white/5 backdrop-blur-lg border border-white/10",
            }
          }}
        />
      </div>
    </div>
  );
}
