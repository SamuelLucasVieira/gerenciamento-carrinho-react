import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,      // Porta padrão para rodar a aplicação (pode mudar)
    open: true       // Abre o navegador automaticamente ao iniciar
  },
  resolve: {
    alias: {
      // Se quiser usar @ para src, por exemplo:
      '@': '/src'
    }
  }
});
