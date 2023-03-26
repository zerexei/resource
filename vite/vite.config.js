import { defineConfig, loadEnv } from 'vite';

// export default defineConfig({
//     base: "/vite/", // set base path
// });

export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_'); // mode, path, key
  const config = {
    clearScreen: false, // clear screen on change
    base: '/', // set base path
    envPrefix: 'APP_', // set env prefix
    envDir: 'path-to-env-directory', // set env directory

    // npm run dev
    server: {
      open: 'index.html', // open file
      port: 3000,
    },

    // npm run preview
    preview: {
      port: 8080,
      strictPort: true, // fail on already in use
    },

    css: {
      devSourcemap: true,
    },
  };

  if (mode === 'production') {
    Object.assign(config, {
      base: '/vite/',
    });
  }

  return config;
});
