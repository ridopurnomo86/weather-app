export type WeatherCategoryType = 'Rain' | 'Clouds' | 'Clear' | 'Snow' | 'Drizzle' | 'Thunderstorm';

type CoordType = {
    lon: number;
    lat: number;
};

type WeatherType = {
    id: number;
    main: WeatherCategoryType;
    description: string;
    icon: string;
};

type MainType = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
};

type WindType = {
    speed: number;
    deg: number;
};

type SysType = {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
};

type CloudsType = {
    all: number;
};

export type WeatherApiDataType = {
    coord: CoordType;
    weather: WeatherType[];
    base: string;
    main: MainType;
    visibility: number;
    wind: WindType;
    clouds: CloudsType;
    dt: number;
    sys: SysType;
    timezone: number;
    id: number;
    name: string;
    cod: number;
    dt_txt: string;
};
