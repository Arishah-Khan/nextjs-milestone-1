export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-orange-200">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-950 mb-6 shadow-lg p-4 bg-white rounded-lg animate-slide-in-left">
        Hello, Arishah!
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-amber-950 mb-4 shadow-md p-2 bg-white rounded-lg animate-slide-in-top">
        Welcome to My First Next.js App!
      </h2>
      <p className="text-lg md:text-xl text-brown-600 max-w-2xl text-center animate-slide-in-top">
        This is a simple webpage built using Next.js. Explore and enjoy the creative journey as you dive into the world of modern web development.
      </p>
    </div>
  );
}
