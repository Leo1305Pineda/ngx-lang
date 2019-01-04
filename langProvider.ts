import { Injectable } 		from '@angular/core';
import { Globalization }	from '@ionic-native/globalization';
import { LangEn } 				from '.langEn'
import { LangEs } 				from '.langEs'

const TAG = 'LangProvider ';

@Injectable()
export class LangProvider {

	private url_image_logo = "assets/imgs/logo_safe.png";
	private url_avatar_default = "assets/imgs/camera.png";//http://169.63.2.153/profiles/usuario.jpg";
	private url_background_safe = "assets/imgs/fondo_safe.jpg";

  constructor(
  	private langEn: LangEn,
  	private langEs: LangEs,
  	private globalization: Globalization
  	) {
    console.log(TAG);
    this.setPreferredLanguage();
  }

  setPreferredLanguage(){
  	console.log(TAG, 'setPreferredLanguage')
    this.globalization.getPreferredLanguage()
    .then(res =>{
      console.log(res)
    }).catch(e => {
      console.log(e)
      console.log(navigator)
    });
  }

  getLang(){
  	return this.langEs.getEs();
  }

}
