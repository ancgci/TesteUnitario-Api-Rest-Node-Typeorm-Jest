import { Response } from 'express';

export type MockResponse<TResult> = Response & {
  state: {
    status?: number;
    json?: TResult | unknown;
  };
};

export function makeMockResponse<TResult>() {
  const response = {} as MockResponse<TResult>;

  response.status = (status: number) => {
    response.state = { ...response.state, status };
    return response;
  };

  response.json = (json: TResult) => {
    response.state = { ...response.state, json };
    return response;
  };

  return response;
}
