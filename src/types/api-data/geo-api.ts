export type AdministrativeType = {
    name: string;
    description: string;
    order: number;
    adminLevel: number;
    isoCode: string;
    wikidataId: string;
    geonameId: number;
};

export type InformativeTypes = {
    name: string;
    description: string;
    order: number;
    isoCode: string;
    wikidataId: string;
    geonameId: number;
};

export type GeoApiDataTypes = {
    latitude: number;
    lookupSource: string;
    longitude: number;
    localityLanguageRequested: string;
    continent: string;
    continentCode: string;
    countryName: string;
    countryCode: string;
    principalSubdivision: string;
    principalSubdivisionCode: string;
    city: string;
    locality: string;
    postcode: string;
    plusCode: string;
    localityInfo: {
        administrative: AdministrativeType[];
        informative: InformativeTypes[];
    };
};
