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
  baseURL: import.meta.env.VITE_BASE_URL,
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
    return response;
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
        validateStatus: () => true, // để cho phép nhận mã code ngoài 200
        withCredentials: true,
      });
      return {
        data: result,
        meta: {
          // Thông tin meta từ response (status, headers...)
          status: result.status,
          headers: result.headers,
        },
      };
    } catch (axiosError) {
      const error = axiosError;
      return {
        error,
      };
    }
  };
