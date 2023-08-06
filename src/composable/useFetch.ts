import axios from 'axios';
import { ref } from 'vue';

const data = ref(null);
const error = ref(null);
const isLoading = ref(true);
const { signal, abort } = new AbortController();

type UseFetchType = {
    query: { [key: string]: any };
};

const useFetch = ({ query }: UseFetchType) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL || '';

    const APP_ID = import.meta.env.VITE_APP_ID || '';

    const request = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/weather`, {
                params: {
                    ...query,
                    APPID: APP_ID,
                },
                signal,
            });
            data.value = await res.data;
            isLoading.value = false;
            return res;
        } catch (err: unknown) {
            if (err instanceof Error) {
                (error.value as any) = err;
            }
            isLoading.value = false;
        }
    };

    return { data, error, isLoading, request, abort };
};

export default useFetch;
