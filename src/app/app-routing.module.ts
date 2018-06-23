import {TitleScreenComponent} from './title-screen/title-screen.component';
import {GameScreenComponent} from './game-screen/game-screen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: TitleScreenComponent
    },
    {
    	path: 'game',
    	component: GameScreenComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
