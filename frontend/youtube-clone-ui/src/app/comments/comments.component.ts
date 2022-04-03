import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../user.service";
import {CommentsService} from "../comments.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CommentDto} from "../comment-dto";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  videoId: string = '';
  commentsForm: FormGroup;
  commentsDto: CommentDto[] = [];

  constructor(private userService: UserService, private commentService: CommentsService,
              private matSnackBar: MatSnackBar) {
    this.commentsForm = new FormGroup({
      comment: new FormControl('comment'),
    });
  }

  ngOnInit(): void {
    this.getComments();
  }

  postComment() {
    const comment = this.commentsForm.get('comment')?.value;

    const commentDto = {
      "commentText": comment,
      "authorId": this.userService.getUserId()
    }

    this.commentService.postComment(commentDto, this.videoId).subscribe(() => {
      this.matSnackBar.open("Comment Posted Successfully", "OK");

      this.commentsForm.get('comment')?.reset();
      this.getComments();
    })
  }

  getComments() {
    this.commentService.getAllComments(this.videoId).subscribe(data => {
      this.commentsDto = data;
    });
  }
}
