export interface Patients {
    id?: string;
    appointmentId?: string;
    name?: string;
    image?: string;
    appointmentDate?: string;
    appointmentTime?: string;
    location?: string;
    patientId?: string;
    fee?: number;
    paidDate?: string;
    email?: string;
    phoneNumber?: string;
    callingType?: string;
    visitType?: string;
    appointmentType?: string;
    clinicLocation?: string;
    rating?: number; // 1-5 arası puan
    comment?: string; // Hastanın yorumu
    commentDate?: string; // Yorumun yapıldığı tarih
    isRecommend?: boolean; // Tavsiye durumu (true/false)
}
