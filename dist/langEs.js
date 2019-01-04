var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var LangEs = (function () {
    function LangEs() {
        this.url_image_logo = "assets/imgs/logo_safe.png";
        this.url_avatar_default = "assets/imgs/camera.png";
        this.url_background_safe = "assets/imgs/fondo_safe.jpg";
    }
    LangEs.prototype.getEs = function () {
        return {
            "$new": "Nuevo",
            "$app": "Safe conductor",
            "$dni": "DNI",
            "$certificate": "Certificado",
            "$license": "Licencia",
            "$the_license": "La licencia",
            "$ok": "Ok",
            "$year": "Año",
            "$image_of": "Imagen del ",
            "$car": "Vehiculo",
            "$new_safe": "Eres nuevo en safe?",
            "$join_now": "Unete Ahora",
            "$address": "Dirección de habitación",
            "$address_help": "Referencia de habitación",
            "$driver": "Conductor",
            "$register": "Registrar",
            "$connect": "Conectado",
            "$unconnect": "Desconectado",
            "$yes": "Si",
            "$not": "No",
            "$error": "Error",
            "$alect": "Alerta",
            "$detail": "Detalle",
            "$data_personal": "Datos Personales",
            "$notification": "Notificación",
            "$information": "Información",
            "$save": "Guardar",
            "$cancel": "Cancelar",
            "$update": "Actualizar",
            "$profile": "Perfil",
            "$contact": "Contactos",
            "$max_contacts": "Maximo de contactos",
            "$origin": "Origen",
            "$run_date": "Fecha de Ejecución",
            "$hour_start": "Hora de inicio",
            "$hour_end": "Hora Final",
            "$amount": "Costo",
            "$destination": "Destino",
            "$status": "Estado",
            "$message": "Mensaje",
            "$reload": "Recargar",
            "$email": "Correo",
            "$password": "Contraseña",
            "$re_password": "Repetir contraseña",
            "$enter": "Iniciar sesión",
            "$check_in": "Registrarse",
            "$facebook": "Facebook",
            "$google": "Google",
            "$name": "Nombres",
            "$phone": "Teléfono",
            "$add_phone": "Agregar Teléfono",
            "$user_customer": "Pasajero",
            "$user_driver": "Conductor",
            "$lastname": "Apellidos",
            "$gender": "Genero",
            "$tradermark": "Marca",
            "$enrollment": "Placa",
            "$model": "Modelo",
            "$plate": "Plate",
            "$color": "Color",
            "$serial_engine": "Serial de motor",
            "$air_conditioner": "Aire acondicionado",
            "$baby_chair": "Silla para el bebe",
            "$bodywork_serial": "Serial de carroceria",
            "$birthdate": "Fecha de nacimiento",
            "$services": "Servicios",
            "$hola": "hola",
            "$bienvenido": "Bienvenido",
            "$welcome_to": "BIENVENIDO A",
            "$total_available": "Total disponible",
            "$card_debit": "Tarjeta de debito",
            "$card_credit": "Tarjeta de credito",
            "$menu_new_service": "Nuevo servicio",
            "$menu_services": "Historial de rutas",
            "$menu_place": "Ubicaciónes guardadas",
            "$menu_wallet": "Monedero Safe",
            "$menu_payment": "Metodo de pago",
            "$menu_panic_button": "Boton de panico",
            "$menu_map_option": "Opciones de mapa",
            "$menu_promotion": "Promociones",
            "$menu_video_surveillance": "Video vigilancia",
            "$logout": "Cerrar Sesión",
            "$msg_error_internet": "Tienes problema con la conección a internet intentelo mas tarde",
            "$msg_error_login_facebook": "Error en el login con facebook",
            "$msg_new_service": "Desea solicitar un nuevo servicio",
            "$msg_error_server": "Algun problema con el servidor safe por favor intentelo mas tarde.",
            "$msg_update_sucessfull": "Actualizado exitosamente",
            "$msg_err_img_certificate": "Se registro el vehiculo pero fallo al guardar la imagen del certificado intente mas tarde",
            "$msg_err_img_vehicle": "Se registro el vehiculo pero fallo al guardar las imagenes del vehiculo intente mas tarde",
            "$msg_option_map_changed_waze": "Cambiado a Waze",
            "$msg_option_map_changed_google_map": "Cambiado a GoogleMap",
            "$your_email": "Tu correo electrónico",
            "$your_password": "Tu contraseña",
            "$your_phone": "Tu teléfono",
            "$your_name": "Tus nombres",
            "$your_lastname": "Tus apellidos",
            "$your_dni": "Tu DNI",
            "$your_gender": "Tu genero",
            "$your_tradermark": "Tu Marca",
            "$your_birthdate": "Tu fecha de nacimiento",
            "$your_address": "Tu dirección de habitación",
            "$your_address_help": "Tu referencia de habitación.",
            "$where_do_you_want_to_go": "¿A dónde quieres ir?",
            "$change_your_locate": "Fija tu ubicación en el mapa",
            "$reload_map": "Recargar el mapa",
            "$enter_valid_email": "* Ingrese un correo electrónico válido",
            "$enter_valid_name": "* Solo dos nombre y no contener caracteres especiales.",
            "$enter_valid_lastname": "* Solo dos apellidos y no contener caracteres especiales.",
            "$enter_valid_phone": "* requerido formato internacional +51 00000000",
            "$enter_valid_dni": "* se requiere un formato 00000000-0",
            "$password_more_6_characters": "Su contraseña debe tener más de 6 caracteres.",
            "$incorrect_password_confirmation": "Confirmación de contraseña incorrecta",
            "$incorrect_gender_confirmation": "Seleccione un genero",
            "$cordova_not_available": "La plataforma no esta disponible por favor ejecutar en otra plataforma",
            "$url_image_logo": this.url_image_logo,
            "$url_background_safe": this.url_background_safe,
            "$url_avatar_default": this.url_avatar_default,
            "$genders": [{ id: 1, name: 'Masculino' }, { id: 2, name: 'Femenino' }],
            "$code400": "La solicitud contiene sintaxis errónea y no debería repetirse",
            "$code401": "El usuario es incorrecto  intentelo nuevamente",
            "$code404": "Recurso no encontrado.",
            "$code201": "Se ha registrado exitosamente.",
            "$code2011": "Se ha actualizado exitosamente.",
            "$code422": "No puede procesar la solicitud.",
            "$codeMsg": [{
                    code: '0000001',
                    message: "Registro creado exitosamente"
                }, {
                    code: '0000002',
                    message: "Falta parametros en la petición"
                }, {
                    code: '0000003',
                    message: "Registro actualizado exitosamente"
                }, {
                    code: '0000004',
                    message: "Registro eliminado exitosamente"
                }, {
                    code: '0000005',
                    message: "El correo ya esta registrado en safe."
                }, {
                    code: '0000006',
                    message: "Intente mas tarde."
                }, {
                    code: '0000007',
                    message: "Correo o contraseña incorrecta"
                }, {
                    code: '0000008',
                    message: "Autenticada exitosamente"
                }, {
                    code: '0000009',
                    message: "Ya existe una cuenta registrada como conductor"
                }, {
                    code: '0000010',
                    message: "Ya existe una cuenta registrada como pasajero"
                }, {
                    code: '0000011',
                    message: "El dni ya se encuentra registrado"
                }, {
                    code: '0000012',
                    message: "La placa del vehiculo ya esta registrada"
                }, {
                    code: '0000013',
                    message: "El correo no esta registrado en safe."
                }, {
                    code: '0000014',
                    message: "El codigo de verificacion ya fue enviado a "
                }, {
                    code: '0000015',
                    message: "El codigo de verificacion no es correcto"
                }, {
                    code: '0000016',
                    message: "La contraseña fue cambiada exitosamente"
                }, {
                    code: '0000017',
                    message: "Codigo invalido"
                }, {
                    code: '0000018',
                    message: "Usuario fue cancelado no possees los permisos necesarios de acceso a tu cuenta facebook."
                }, {
                    code: '0000019',
                    message: "Ya se envio un codigo a tu correo espere 5 mimito"
                }],
            "$res_color": ['Rojo', 'Azul', 'Blanco', 'Negro', 'Amarillo', 'Verde']
        };
    };
    LangEs = __decorate([
        Injectable()
    ], LangEs);
    return LangEs;
}());
export { LangEs };
//# sourceMappingURL=langEs.js.map