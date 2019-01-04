import { Injectable } 		from '@angular/core';
import { LangEn } 				from './langEn'
import { LangEs } 				from './langEs'

const TAG = 'LangProvider ';

@Injectable()
export class LangProvider {

  constructor(
  	private langEn: LangEn,
  	private langEs: LangEs
  	) {
    console.log(TAG);
  }

  getLang(){
  	return this.langEs.getEs();
  }

}
