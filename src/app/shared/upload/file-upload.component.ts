import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent implements OnInit {

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  url: string;
  isHovering: boolean;

  @Output() uploadUrl = new EventEmitter<string>();

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }

  toggleHover(event: boolean) {

  }

  startUpload(event: FileList) {
    const file = event.item(0);

    if (file.type.split('/')[0] !== 'image') {
      console.error('This file type is not supported');
    }

    const path = 'test' + new Date().getTime() + '_' + file.name;

    this.task = this.afStorage.upload(path, file);

    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    this.task.then(snapshot => {
      snapshot.ref.getDownloadURL().then(url => {
        this.url = url.toString();
        this.uploadUrl.emit(url.toString());
      });
    });
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
