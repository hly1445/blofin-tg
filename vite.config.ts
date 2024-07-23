import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import basicSsl from '@vitejs/plugin-basic-ssl';
import mkcert  from 'vite-plugin-mkcert'


// console.log(resolve('cert/localhost+1.pem'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  build: {
    outDir: './docs'
  },
  base: '/blofin-tg/',
  server:{
    https:true
  }
});
