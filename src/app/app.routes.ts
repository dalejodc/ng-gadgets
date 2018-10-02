import { Routes, RouterModule} from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { GadgetComponent } from "./components/gadget/gadget.component";
import { GadgetsComponent } from "./components/gadget/gadgets.component";


const APP_ROUTES: Routes = [
	{path: 'home', component: HomeComponent}, 
	{path: 'gadgets', component: GadgetsComponent}, 
	{path: 'gadget/:id', component: GadgetComponent}, 

	{ path: '**', pathMatch: 'full', redirectTo: 'home'} 
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);