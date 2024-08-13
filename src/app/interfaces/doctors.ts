export interface Doctors {
    id?: string;
    name?: string;
    image?: string;
    availability?: string;
    title?:string;
    field?: string;
    icon?:string;
    location?: string;
    languages?: string[];
    minPrice?: number;
    department?: string;
    maxPrice?:number;
    availableDay?:string;
    rating?: number;
    email?: string;
    experience?:number;
    consultation?: { type: string; icon: string }[];
    feedback?: number;
    recommended?: number;
    services?: string;
    clinicImages: string[];
}
