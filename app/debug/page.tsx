export default function DebugPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Image Debug Test</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Screenshot {num}</h3>
              <div className="w-full h-64 bg-gray-200 rounded overflow-hidden">
                <img
                  src={`/screenshots/0${num}.png`}
                  alt={`Screenshot ${num}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error(`Failed to load screenshot ${num}`)
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling!.style.display = 'flex'
                  }}
                />
                <div 
                  className="hidden w-full h-full items-center justify-center text-red-500"
                  style={{ display: 'none' }}
                >
                  ❌ Failed to load
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Path: /screenshots/0{num}.png</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </div>
  )
} 