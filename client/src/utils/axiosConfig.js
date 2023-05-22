import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000',
	headers: {
		'Content-Type': 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJpYXQiOjE2ODQ2MDE2MTF9.jmpH8i0m072YET3HK-RwjjwXSRJwU_1DdMwVnYCJloI',
	},
});

export default axiosInstance;
