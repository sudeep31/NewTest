import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { GetGifImagesService } from '../get-gif-images.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {
  @Input() item = { name: "" };
  @Output() newItemEvent = new EventEmitter();
  holdGitImages: any = [];
  constructor(public getGifImageService: GetGifImagesService) { }

  ngOnInit(): void {
    this.newItemEvent.emit("Sudeep");
  }

  findGif() {

    let getValue = <HTMLInputElement>document.getElementById("search");

    if (getValue && getValue.value != '' && getValue.value != undefined) {
      this.DisplayGif(getValue);
    } else {
      alert("please fill the data")
    }





  }

  DisplayGif(data: any) {
    this.getGifImageService.getGifImageService(data).subscribe((res: any) => {
      let data = [];
      if (res && res.data.length > 1)
        this.holdGitImages = Object.keys(res).map(k => res[k]);
      else
        alert("no records found")

    })

  }

}
