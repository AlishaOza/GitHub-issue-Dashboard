import { Routes } from '@angular/router';
import {HomePage} from './home-page/home-page';
import{SearchBar} from './components/search-bar/search-bar';

export const routes: Routes = [
    { path:'home_page', component:HomePage},
    { path:'search_bar',component:SearchBar}
];
