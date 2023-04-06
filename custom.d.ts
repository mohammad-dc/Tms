namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_URL: string;

    //* jwt
    JWT_SECRET: string;
    JWT_ISSUER: string;
    JWT_AUDIENCE: string;
  }
}
