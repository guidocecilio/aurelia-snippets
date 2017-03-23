import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class SnippetService {
  constructor(http){
    http.configure(config => {
      config
        .withBaseUrl('http://localhost:8000');
    });
    this.http = http;
  }

  getSnippets() {
    return new Promise((resolve, reject) => {
      this.http.get('snippets').then(httpResponse=> {
        var snippets = JSON.parse(httpResponse.response); 
        resolve(snippets);
      }).catch( error => {
        reject(error);
      });
    });
  }

  getSnippet(id) {
    return new Promise((resolve, reject) => {
      this.http.get('snippets/' + id).then(httpResponse=> {
        var snippets = JSON.parse(httpResponse.response); 
        resolve(snippets);
      }).catch( error => {
        reject(error);
      });
    });
  }

  create() {

  }
}