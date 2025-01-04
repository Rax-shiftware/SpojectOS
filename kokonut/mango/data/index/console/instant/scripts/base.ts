export const baseConfig = {
    appName: 'Kokonut',
    version: '1.0.0',
    environment: 'development',
    apiEndpoint: 'http://localhost:3000/api',
    timeout: 5000,
};

export function getConfig() {
    return baseConfig;
}
getConfig();