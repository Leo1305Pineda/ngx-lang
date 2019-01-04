import { Injectable } 	from '@angular/core';
import { en }           from './langEn';
import { es }           from './langEs';

@Injectable()
export class LangProvider {

  getLang(){
  	return es;
  }

}
