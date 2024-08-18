import { Component, ViewChild, Renderer2 } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile-img-card',
  templateUrl: './profile-img-card.component.html',
  styleUrls: ['./profile-img-card.component.css']
})
export class ProfileImgCardComponent {

  @ViewChild('fileUpload') fileUpload: FileUpload;

  constructor(private messageService: MessageService, private renderer: Renderer2) { }

  clearFiles() {
    // Seçili dosyaları temizleme
    this.fileUpload.clear();

    // Dosya input alanını sıfırlama
    const fileInput = this.renderer.selectRootElement('input[type="file"]');
    if (fileInput) {
      this.renderer.setProperty(fileInput, 'value', '');
    }
  }

  onUpload(event: any) {
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
