import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />

     
      <div
        style={{ backgroundColor: '#f5f0e8', minHeight: '80vh' }}
        className="flex items-center justify-center"
      >
        <div className="text-center" style={{ fontFamily: 'Georgia, serif', color: '#1a2332' }}>
          <h1 className="text-4xl font-bold mb-4">Welcome to Jewellery</h1>

        </div>
      </div>
    </main>
  );
}
