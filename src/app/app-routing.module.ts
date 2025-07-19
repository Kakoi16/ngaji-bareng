import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'quran',
    loadChildren: () => import('./quran/quran.module').then( m => m.QuranPageModule)
  },
  {
    path: 'hadist',
    loadChildren: () => import('./hadist/hadist.module').then( m => m.HadistPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
