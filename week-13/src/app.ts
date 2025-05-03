export const initApp = async (): Promise<void> => {
    const app = document.getElementById('app') as HTMLDivElement;
    app.innerHTML = 'Hello world';
  };