interface SuccessResponse<T> {
  status: 'success';
  payload: T;
}

interface ErrorResponse {
  status: 'error';
  error: string;
}

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

const result1: ApiResponse<string> = {
  status: 'success',
  payload: 'Adasdads'
}

const result2: ApiResponse<string> = {
  status: 'error',
  error: 'Error'
}

const genericResponse: ApiResponse<unknown> = {} as ApiResponse<unknown>;

if(genericResponse.status === 'success') {
  console.log(genericResponse.payload);
} else {
  console.error(genericResponse.error);
}

interface User {
  name: string;
}

const userResponse: ApiResponse<User> = {
  status: 'success',
  payload: {
      name: 'Marcin'
  }
}