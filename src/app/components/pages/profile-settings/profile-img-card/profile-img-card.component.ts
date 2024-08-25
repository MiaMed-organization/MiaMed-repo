import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-profile-img-card',
  templateUrl: './profile-img-card.component.html',
  styleUrls: ['./profile-img-card.component.css'],
  providers: [MessageService]
})
export class ProfileImgCardComponent {

  @ViewChild('fileUpload') fileUpload: FileUpload;
  
  imageSrc: string | ArrayBuffer | null = null;

  constructor(private messageService: MessageService) { }

  onSelect(event: any) {
    const file: File = event.files[0];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    const acceptedFormats = ['jpg', 'jpeg', 'png', 'svg'];

    if (!acceptedFormats.includes(fileExtension)) {
      this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'Dosya uzantısı geçerli değil' });
      this.fileUpload.clear();  // Geçersiz dosyayı temizle
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result;
    };
    reader.readAsDataURL(file);  
  }

  clearFiles() {
    this.imageSrc = null;  
    this.fileUpload.clear();  
  }

  onUpload(event: any) {
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
