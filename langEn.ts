import { Injectable } from '@angular/core';
@Injectable()
export class LangEn {
	private url_image_logo = "assets/imgs/logo_safe.png";
	private url_avatar_default = "assets/imgs/camera.png";//http://169.63.2.153/profiles/usuario.jpg";
	private url_background_safe = "assets/imgs/fondo_safe.jpg";

	getEn(){
  	return {
  		"$new": "New",
		"$app": "safe",
		"$app_driver": "SAFE",
		"$dni": "DNI",
		"$certificate": "certificate",
		"$license": "License",
		"$the_license": "The license",
		"$ok": "Ok",
		"$car": "Vehicle",
		"$year": "Year",
		"$image_of": "Image ",
		"new_safe": "Are you new to safe?",
		"$join_now": "Join Now",
		"$address": "Address",
		"$address_help": "Address of refernce",
		"$driver": "Driver",
		"$register": "Register",
		"$connect": "Connect",
		"$unconnect": "Unconnect",
		"$yes": "Yes",
		"$not": "Not",
		"$error": "Error",
		"$alect": "Alert",
		"$detail": "Detail",
		"$data_personal": "Data personal",
		"$notification": "Notification",
		"$information": "Information",
		"$save": "Save",
		"$cancel": "Cancel",
		"$update": "Update",
		"$profile": "Profile",
		"$contact": "Contacts",
		"$max_contacts": "Max contacts",
		"$origin": "Origin",
		"$run_date": "Run Date",
		"$hour_start": "Hour Start",
		"$hour_end": "Hour End",
		"$amount": "Amount",
		"$destination": "Destination",
		"$status": "Status",
		"$message": "Message",
		"$reload": "Reload",
		"$email": "E-Mail",
		"$password": "Password",
		"$re_password": "Repeat Password",
		"$enter": "log in",
		"$check_in": "Register",
		"$facebook": "Facebook",
		"$google": "Google",
		"$name": "Names",
		"$phone": "Phone",
		"$add_phone": "Add phone",
		"$user_customer": "Customer",
		"$user_driver": "Driver",
		"$lastname": "Last names",
		"$gender": "Gender",
		"$tradermark": "Tradermark",
		"$enrollment": "Enrollment",
		"$model": "Model",
		"$plate": "Plate",
		"$color": "Color",
		"$serial_engine": "Serial of Engine",
		"$air_conditioner": "Air Conditioner",
		"$baby_chair": "baby_chair",
		"$bodywork_serial": "Bodywork serial",
		"$birthdate": "Birthdate",
		"$services": "Services",
		"$hello": "Hello",
		"$welcome": "Welcome",
		"$welcome_to": "WELCOME TO",
		"$total_available": "Total available",
		"$card_debit": "Card debit",
		"$card_credit": "Card credit",
		"$menu_new_service": "New service",
		"$menu_services": "History routes",
		"$menu_place": "Saved locations",
		"$menu_wallet": "Wallet safe",
		"$menu_payment": "Methor of payment",
		"$menu_panic_button": "Button panic",
		"$menu_map_option": "Map options",
		"$menu_promotion": "Promoción",
		"$menu_video surveillance": "Video surveillance",
		"$logout": "Logout",
		"$msg_error_internet": "Error conection to internet",
		"$msg_error_login_facebook": "Error in login with facebook",
		"$msg_error_server": "Any problem with the server safe please try it later.",
		"$msg_new_service": "Do you want to request a new service",
		"$msg_update_sucessfull": "Update sucessfull",
		"$msg_err_img_certificate": "Be register the vehicle but fail in save image certificate",
		"$msg_err_img_vehicle":"Be register the vehicle but fail in save image vehicle",
		"$msg_option_map_changed_google_map": "changed to GoogleMap",
		"$your_email": "Your email",
		"$your_password": "Your password",
		"$your_phone": "Your phone",
		"$your_name": "Your names",
		"$your_lastname": "Your lastnames",
		"$your_dni": "Your DNI",
		"$your_gender": "Your gender",
		"$your_tradermark": "Your tradermark",
		"$your_birthdate": "Your birthdate",
		"$your_address": "Your address",
		"$your_address_help": "Your address of reference",
		"$where_do_you_want_to_go": "Where do you want to go?",
		"$change_your_locate": "Change your location",
		"$reload_map": "Reload the map",
		"$enter_valid_email": "Please enter a valid email.",
		"$enter_valid_name": "Please enter a valid name.",
		"$enter_valid_lastname": "Please enter a valid lastname.",
		"$enter_valid_phone": "* require format international +51 00000000",
		"$enter_valid_dni": "* require a format 00000000-0",
		"$password_more_6_characters": "Your password must be more than 6 characters.",
		"$incorrect_password_confirmation": "Incorrect password confirmation.",
		"$incorrect_gender_confirmation": "Select a gender",
		"$cordova_not_available": "The plataform is not available please run in other Plataform",
		"$url_image_logo": this.url_image_logo,
		"$url_background_safe": this.url_background_safe,
		"$url_avatar_default": this.url_avatar_default,
		"$genders": [{id: 1,name: 'Male'} , {id: 2,name: 'Famale'}],
		"$code400": "The request contains incorrect syntax and should not be repeated",
		"$code401": "The user is wrong try again.",
		"$code404": "Resourse not found.",
		"$code201": "Successfully registered.",
		"$code2011": "Successfully updated",
		"$code422": "No can not request.",
		"$codeMsg": [{
			code: '0000001',
			message: "Registro creado exitosamente"
		} , {
			code: '0000002',
			message: "Falta parametros en la petición"
		} , {
			code: '0000003',
			message: "Registro actualizado exitosamente"
		} , {
			code: '0000004',
			message: "Registro eliminado exitosamente"
		} , {
			code: '0000005',
			message: "El correo ya esta registrado en safe."
		} , {
			code: '0000006',
			message: "Intente mas tarde."
		} , {
			code: '0000007',
			message: "Correo o contraseña incorrecta"
		} , {
			code: '0000008',
			message: "Autenticada exitosamente"
		} , {
			code: '0000009',
			message: "Ya existe una cuenta registrada como conductor"
		} , {
			code: '0000010',
			message: "Ya existe una cuenta registrada como pasajero"
		} , {
			code: '0000011',
			message: "El dni ya se encuentra registrado"
		} , {
			code: '0000013',
			message: "El correo no esta registrado en safe."
		} ],
		"$res_color":['red', 'blue']
	}; 
  }
}