import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  downloadFile(){
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = '/assets/documents/Ajay-2023-Resume-new-edited.docx';
    link.download = 'Ajay-2023-Resume.docx';
    document.body.appendChild(link);
    link.click();
    link.remove();
}
viewFile(){
  // let link = document.createElement('a');
  // link.setAttribute('type', '_blank');
  // link.href = '/assets/documents/Ajay-2023-Resume-new.pdf';
  // link.download = 'Ajay-2023-Resume-new.pdf';
  // document.body.appendChild(link);
  // link.click();
  // link.remove();
  let url ='/assets/documents/Ajay-2023-Resume-new.pdf'
  window.open(url, '_blank');
}
}
