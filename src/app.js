import {inject} from 'aurelia-framework';
import {Snippet} from './snippet';
import {SnippetService} from './snippet-service';
import {HttpClient} from 'aurelia-http-client';

@inject(SnippetService)
export class App {
  constructor(snippetService) {
    this.heading = "Snippets";
    this.snippets = [];
    this.snippetCode = ''
    this.snippetService = snippetService;
    this.getSnippets();
  }

  addSnippet() {
    if (this.snippetCode) {
      this.snippets.push(new Snippet(this.snippetCode));
      this.snippetCode = '';
    }
  }

  removeSnippet(snippet) {
    let index = this.snippets.indexOf(snippet);
    if (index !== -1) {
      this.snippets.splice(index, 1);
    }
  }

  getSnippets() {
    this.snippetService.getSnippets().then(snippets => {
      this.snippets = snippets; 
    }).catch(error => {
      console.log(error);
    });
  }
  
}