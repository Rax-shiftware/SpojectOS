export const config = {
    appName: 'Kokonut',
    version: '1.0.0',
    environment: 'development', // or 'production'
    apiEndpoint: 'https://api.kokonut.com',
    logging: {
         // 'debug', 'info', 'warn', 'error'
            enabled: true,
            },
            database: {
            host: 'localhost',
            port: 5432,
            username: 'user',
            password: 'password',
            databaseName: 'kokonut_db',
            ssl: false,
            connectionTimeoutMillis: 3000,
            },
            features: {
            enableFeatureX: true,
            enableFeatureY: false,
        jwtSecret: 'your-secret-key',
        tokenExpiration: '1h',
    },
    email: {
        smtpHost: 'smtp.kokonut.com',
        smtpPort: 587,
        username: 'emailUser',
        password: 'emailPassword',
        fromAddress: 'no-reply@kokonut.com',
    },
    thirdPartyServices: {
        googleAnalyticsId: 'UA-XXXXX-Y',
        sentryDsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
    },
};

export default config;
export const getDatabaseConfig = () => config.database;

export const isFeatureEnabled = (feature: keyof typeof config.features) => {
    return config.features[feature];
};

export const getApiEndpoint = () => config.apiEndpoint;

export const getEmailConfig = () => config.email;

export const getThirdPartyServiceConfig = (service: keyof typeof config.thirdPartyServices) => {
    return config.thirdPartyServices[service];
};

export const getAppName = () => config.appName;

export const getVersion = () => config.version;

export const getEnvironment = () => config.environment;

export const isLoggingEnabled = () => config.logging.enabled;

export const getJwtSecret = () => config.features.jwtSecret;

export const getTokenExpiration = () => config.features.tokenExpiration;

export const getSmtpHost = () => config.email.smtpHost;

export const getSmtpPort = () => config.email.smtpPort;

export const getEmailUsername = () => config.email.username;

export const getEmailPassword = () => config.email.password;

export const getEmailFromAddress = () => config.email.fromAddress;

export const getGoogleAnalyticsId = () => config.thirdPartyServices.googleAnalyticsId;

export const getSentryDsn = () => config.thirdPartyServices.sentryDsn;