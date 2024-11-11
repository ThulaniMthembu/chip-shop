export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
      <div className="flex flex-row gap-4">
        <div className="w-6 h-6 rounded-full bg-red-600 animate-bounce"></div>
        <div className="w-6 h-6 rounded-full bg-red-600 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-6 h-6 rounded-full bg-red-600 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  )
}