import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // ---선언부 시작
  @Input() visible1: boolean = false; // 받는 역할
  @Output() sendMyEvent: EventEmitter<boolean> = new EventEmitter(); // 보내는 역할

  id: FormControl = new FormControl('');
  pwd: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  private message: string = '';

  styleArray = { wrong_id: false, wrong_pwd: false };
  // ---선언부 끝

  constructor() {}

  ngOnInit(): void {}

  tryToLogin(): void {
    if (this.id.value == 'admin' && this.pwd.value == '1234') {
      alert('로그인합니다!');
      this.visible1 = true;
      this.sendMyEvent.emit(this.visible1); // app 컴포넌트에 전달
    } else if (this.id.value != 'admin') {
      this.setMessage = 'wrong id';
      this.styleArray.wrong_id = true;
      this.styleArray.wrong_pwd = false;
    } else if (this.pwd.value != '1234') {
      this.setMessage = 'wrong pwd';
      this.styleArray.wrong_id = false;
      this.styleArray.wrong_pwd = true;
    }
  }

  // 대입하는 메소드
  set setMessage(arg: string) {
    this.message = arg;
  }

  // 가져오는 메소드
  get getMessage(): any {
    return this.message;
  }
}
