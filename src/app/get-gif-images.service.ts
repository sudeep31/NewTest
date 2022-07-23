import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetGifImagesService {

  constructor(public httpClient: HttpClient) { }

 // https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=Birthday&limit=25&offset=0&rating=g&lang=en

  //YsiH4HCNV3lHlY9ctyLDj1EAwHF9p301


  getGifImageService(data : any){
    return this.httpClient.get(`https://api.giphy.com/v1/gifs/search?api_key=YsiH4HCNV3lHlY9ctyLDj1EAwHF9p301&q=${data.value}&limit=25&offset=0&rating=g&lang=en

    `)
}

}
