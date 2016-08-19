import {bootstrap}  from 'angular2/platform/browser';
import {MainComponent} from '../client/components/main/main';
//import {Httpprovider} from './services/httpprovider';
import {Userdetails} from '../client/services/userdetails';
import {ROUTER_BINDINGS, Location, ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {bind, enableProdMode, provide} from 'angular2/core';

enableProdMode();
bootstrap(MainComponent,[Userdetails,ROUTER_PROVIDERS, Location, ROUTER_BINDINGS, bind(APP_BASE_HREF).toValue('/')]);