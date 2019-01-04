var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { LangEn } from './langEn';
import { LangEs } from './langEs';
var TAG = 'LangProvider ';
var LangProvider = (function () {
    function LangProvider(langEn, langEs) {
        this.langEn = langEn;
        this.langEs = langEs;
        console.log(TAG);
    }
    LangProvider.prototype.getLang = function () {
        return this.langEs.getEs();
    };
    LangProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LangEn,
            LangEs])
    ], LangProvider);
    return LangProvider;
}());
export { LangProvider };
//# sourceMappingURL=langProvider.js.map