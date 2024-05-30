import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css'] // Değişiklik: styleUrls kullanılacak
})
export class OverviewComponent implements OnInit {
    revenue: any;
    RevenueOptions: any;
    appointments: any; // Yeni alan: appointments
    AppointmentsOptions: any; // Yeni alan: AppointmentsOptions

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.revenue = {
            labels: ['P', 'S', 'Ç', 'P', 'C', 'C', 'P'],
            datasets: [
                {
                    label: 'Ödemeler',
                    data: [540, 325, 702, 620, 100, 400, 703],
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgb(255, 159, 64)',
                    borderWidth: 1,
                }
            ]
        };

        this.RevenueOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        // Yeni kodlar başlangıcı
        this.appointments = {
            labels: ['P', 'S', 'Ç', 'P', 'C', 'C', 'P'],
            datasets: [
                {
                    label: 'Randevular',
                    data: [30, 40, 25, 50, 45, 60, 40],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Örnek renk
                    borderColor: 'rgb(54, 162, 235)', // Örnek renk
                    borderWidth: 1,
                }
            ]
        };

        this.AppointmentsOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor // Örnek renk
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary // Örnek renk
                    },
                    grid: {
                        color: surfaceBorder, // Örnek renk
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: textColorSecondary // Örnek renk
                    },
                    grid: {
                        color: surfaceBorder, // Örnek renk
                        drawBorder: false
                    }
                }
            }
        };
        // Yeni kodlar bitişi
    }
}
