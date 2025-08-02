export default function TestImagesPage() {
  const screenshots = [
    '/screenshots/01.png',
    '/screenshots/02.png',
    '/screenshots/03.png',
    '/screenshots/04.png',
    '/screenshots/05.png',
    '/screenshots/06.png',
    '/screenshots/07.png',
    '/screenshots/08.png',
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Image Test Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {screenshots.map((src, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-sm font-medium mb-2">Screenshot {index + 1}</h3>
              <p className="text-xs text-gray-500 mb-2">{src}</p>
              <div className="relative w-full h-48 bg-gray-200 rounded overflow-hidden">
                <img
                  src={src}
                  alt={`Test Screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Failed to load:', src)
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling!.style.display = 'block'
                  }}
                />
                <div 
                  className="hidden w-full h-full flex items-center justify-center text-red-500 text-sm"
                  style={{ display: 'none' }}
                >
                  ❌ Failed to load
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </div>
  )
} 