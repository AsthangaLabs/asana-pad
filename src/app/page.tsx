export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold">AsanaPad</h1>
        <p className="mt-2 text-gray-600 max-w-md">
          Your digital notebook for creating and timing yoga sequences.
        </p>
      </section>

      <footer className="text-sm text-gray-400 text-center p-4">
        &copy; 2025 by{" "}
        <a
          className="underline hover:text-gray-600"
          href="https://github.com/AsthangaLabs"
          rel="noopener noreferrer"
          target="_blank"
        >
          AshtangaLabs
        </a>
      </footer>
    </main>
  );
}
