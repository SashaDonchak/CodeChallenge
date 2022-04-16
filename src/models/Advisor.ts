export type AdvisorId = string;
export type AdvisorStatus = 'online' | 'offline';
export type AdvisorLang = 'en' | 'de' | 'es' | 'it';

export interface Advisor {
    id: AdvisorId;
    reviews: string[];
    status: AdvisorStatus;
    lang: AdvisorLang;
    firstName: string;
    lastName: string;
}