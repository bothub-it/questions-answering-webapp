import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from "../../../environments/environment";

@Component({
  selector: 'app-log-in',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {

  endpoint = 'http://34.68.81.238:5000/';
  answers: Array<any> = [];
  message = '';
  selected = 'option1';
  loading = false;
  files: any[] = [];
  paper_text: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getData(formData) {

  }

  onClickAsk(formData) {
    const body = {
      "context": formData.context,
      "question": formData.text
    };
    console.log(body);
    this.loading = true;
    this.http.post(this.endpoint + 'ask',
      {
        "context": formData.context,
        "question": formData.text
      })
      .subscribe((val) => {
        this.answers = val['answers'];
        for (let i = 0; i < this.answers.length; i++) {
          this.answers[i].confidence = Number(this.answers[i].confidence).toFixed(3)
        }
        this.loading = false;
      });
  }

// {
//   "answers": [
//     {
//       "confidence": 0.8414010540895819,
//       "text": "uma frase"
//     },
//     {
//       "confidence": 0.10348111588014404,
//       "text": "isso aqui é uma frase"
//     },
//     {
//       "confidence": 0.05470147979792153,
//       "text": "frase"
//     }
//   ],
//   "id": "0"
// }


  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
