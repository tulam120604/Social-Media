/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

interface iAxiosBaseQuery {
  url: string;
  method: string;
  data?: Record<string, any>;
  params?: Record<string, any>;
  headers?: Record<string, any>;
}

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosInstance = axios.create({
  // Replace with your API base URL
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
    // Add any other headers or configurations you need
  },
  withCredentials: true, // Thêm withCredentials để gửi cookie
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request config here, e.g., add authentication headers
    // config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify the response data here, e.g., handling pagination
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params, headers }: iAxiosBaseQuery) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const error = axiosError;
      return {
        error,
      };
    }
  };
