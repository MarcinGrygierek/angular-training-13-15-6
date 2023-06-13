const arr: (string | number)[] = [1, "2"];

interface User {
    fullname: string;
}

interface SuperUser {
    name: string;
    role: 'SuperUser'
}

type AnyUser = User | SuperUser;
type ComplexUser = User & SuperUser;

const user: AnyUser = {
    name: 'Lorem',
    role: 'SuperUser',
}

const user2: ComplexUser = {
    fullname: 'a',
    name: 'a',
    role: 'SuperUser',
}

interface SuccessResponse {
    status: 'success';
    payload: any;
}

interface ErrorResponse {
    status: 'error';
    error: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

const result1: ApiResponse = {
    status: 'success',
    payload: 'Adasdads'
}

const result2: ApiResponse = {
    status: 'error',
    error: 'Error'
}

const genericResponse: ApiResponse = {} as ApiResponse;

if(genericResponse.status === 'success') {
    console.log(genericResponse.payload);
} else {
    console.error(genericResponse.error);
}