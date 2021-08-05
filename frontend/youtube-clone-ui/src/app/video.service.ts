import {Injectable} from '@angular/core';
import {FileSystemFileEntry} from "ngx-file-drop";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UploadVideoResponse} from "./upload-video/UploadVideoResponse";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private httpClient: HttpClient) {
  }

  uploadVideo(fileEntry: FileSystemFileEntry): Observable<UploadVideoResponse> {
    return fileEntry.file(file => {
      const fd = new FormData();
      fd.append("file", file, file.name);

      return this.httpClient.post<UploadVideoResponse>('http://localhost:8080/api/videos', fd);
    })
  }
}
