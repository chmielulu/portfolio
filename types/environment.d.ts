export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      AUTH_TOKEN: string;
      NEXT_PUBLIC_FORM_SERVER_URI: string;
    }
  }
}
