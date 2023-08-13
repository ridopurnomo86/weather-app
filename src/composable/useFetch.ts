import axios from 'axios';
import { ref } from 'vue';

const data = ref(null);
const error = ref(null);
const { signal, abort } = new AbortController();

type UseFetchType = {
    query?: { [key: string]: any };
    path: string;
};

const useFetch = ({ query, path }: UseFetchType) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL || '';

    const APP_ID = import.meta.env.VITE_APP_ID || '';

    const request = async () => {
        try {
            const res = await axios.get(`${BASE_URL}${path}`, {
                params: {
                    ...query,
                    APPID: APP_ID,
                },
                signal,
            });
            data.value = await res.data;
            return res;
        } catch (err: unknown) {
            if (err instanceof Error) {
                (error.value as any) = err;
            }
        }
    };

    return { data, error, request, abort };
};

export default useFetch;
