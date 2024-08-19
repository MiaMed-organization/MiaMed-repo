export interface Patients {
    id?: string;
    appointmentId?: string;
    name?: string;
    image?: string;
    appointmentDate?: string;
    appointmentTime?: string;
    location?: string;
    patientId?: string;
    totalFee?: number;
    paidDate?: string;
    email?: string;
    phoneNumber?: string;
    callingType?: string;
    visitType?: string;
    bookingFee?:number;
    appointmentType?: string;
    clinicLocation?: string;
    rating?: number; // 1-5 arası puan
    comment?: string; // Hastanın yorumu
    commentDate?: string; // Yorumun yapıldığı tarih
    isRecommend?: boolean; // Tavsiye durumu (true/false)
    consultingFee?: { type: string; price: number };
    paymentMethod?: { type: string; lastDigits: number ;bank :string};
}
