import Vue from 'vue';
import { capitalize, capitalizeName, capitalizeWord } from "./capitalize";
import cep from './cep';
import cnpj from './cnpj';
import cpf from './cpf';
import currency from './currency';
import date from './date';
import pad from './pad';
import phone from './phone';

Vue.filter('capitalize', capitalize);
Vue.filter('capitalizeName', capitalizeName);
Vue.filter('capitalizeWord', capitalizeWord);
Vue.filter('cep', cep);
Vue.filter('cnpj', cnpj);
Vue.filter('cpf', cpf);
Vue.filter('currency', currency);
Vue.filter('date', date);
Vue.filter('pad', pad);
Vue.filter('phone', phone);
