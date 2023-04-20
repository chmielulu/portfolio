export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      AUTH_TOKEN: string;
      SSL_PRIVATE_KEY: string;
      SSL_CERTIFICATE: string;
      SSL_CHAIN: string;
      NEXT_PUBLIC_FORM_SERVER_URI: string;
    }
  }
}
