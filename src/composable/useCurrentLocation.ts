import { reactive } from 'vue';
import { GeoApiDataTypes } from '@/types/api-data/geo-api';
import axios from 'axios';

const location = reactive<{ data: GeoApiDataTypes }>({
    data: {} as GeoApiDataTypes,
});

const useCurrentLocation = () => {
    const successCallback = async (position: any) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const getApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        try {
            const res = await axios.get(getApiUrl);
            location.data = await res.data;
        } catch (err) {
            throw new Error(err as any);
        }
    };

    const errorCallback = () => {
        throw new Error('Unable to Retrieve a location');
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    return location;
};

export default useCurrentLocation;
