interface KeyTakeawaysProps {
  takeaways: string[];
  className?: string;
}

export function KeyTakeaways({ takeaways, className = '' }: KeyTakeawaysProps) {
  if (takeaways.length === 0) {
    return null;
  }

  return (
    <div className={`bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-blue-500">
          Key Takeaways
        </h3>
      </div>
      <ul className="space-y-3">
        {takeaways.map((takeaway, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-zinc-700 leading-relaxed">
              {takeaway}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

