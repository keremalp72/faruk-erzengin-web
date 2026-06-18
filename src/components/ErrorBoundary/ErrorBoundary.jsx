import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary yakaladı:", error, errorInfo);
    
    // Chunk Load Error (Tembel Yükleme Hatası) tespiti
    const isChunkLoadFailed = error?.message?.match(/Failed to fetch dynamically imported module/i) || 
                              error?.name === 'ChunkLoadError' ||
                              error?.message?.includes('Importing a module script failed');

    if (isChunkLoadFailed) {
      // Sonsuz yenileme döngüsüne girmemek için sessionStorage kontrolü yapıyoruz
      const hasReloaded = sessionStorage.getItem('chunk_load_error_reloaded');
      if (!hasReloaded) {
        sessionStorage.setItem('chunk_load_error_reloaded', 'true');
        window.location.reload(); // Otomatik yenile
      }
    }
  }

  render() {
    if (this.state.hasError) {
      // Eğer otomatik yenileme işe yaramazsa veya başka bir hata varsa gösterilecekFallback UI
      return (
        <div style={{ textAlign: 'center', padding: '50px', marginTop: '10vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <h2 style={{ color: '#002244', marginBottom: '15px' }}>Sayfa yüklenirken geçici bir sorun oluştu.</h2>
          <p style={{ color: '#666', marginBottom: '25px', lineHeight: '1.6' }}>
            İnternet bağlantınız zayıf olabilir veya tarayıcı önbelleğinizin güncellenmesi gerekebilir.
          </p>
          <button 
            onClick={() => {
              sessionStorage.removeItem('chunk_load_error_reloaded');
              window.location.reload();
            }} 
            style={{ 
              padding: '12px 25px', 
              background: '#c5a059', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(197, 160, 89, 0.3)'
            }}
          >
            Sayfayı Yenile
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
