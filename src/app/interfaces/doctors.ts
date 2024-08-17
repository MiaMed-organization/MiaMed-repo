export interface Doctors {
    id?: string;
    name?: string;
    image?: string;
    availability?: string;
    title?: string;
    field?: string;
    icon?: string;
    location?: string;
    hospital?: string; // Yeni eklendi
    languages?: string[];
    minPrice?: number;
    department?: string;
    maxPrice?: number;
    availableDay?: string;
    availableTime?: string; // Yeni eklendi
    rating?: number;
    email?: string;
    bio?:string;
    experience?: number;
    consultation?: { type: string; icon: string }[];
    feedback?: number;
    recommended?: number;
    services?: string[]; // Dizi olarak değiştirildi
    bookedAppointment?: number; // Yeni eklendi
    clinicImages: string[];
    practiceExperience?: {  // Practice Experience için dizi
        img: string[];
        hospital: string[];
        timePeriod: string[];
        total: string[];
        experiencedIn: string[];
    }[];
}
