import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {PageSkeletComponent} from './pages/page-skelet/page-skelet.component';
import {PoolActionsComponent} from './components/pool-actions/pool-actions.component';
import {CreatePoolProcessPageComponent} from './pages/create-pool-process-page/create-pool-process-page.component';
import {ContactListPageComponent} from './pages/contact-list-page/contact-list-page.component';
import {PoolsPageComponent} from './pages/pools-page/pools-page.component';
import {PublicPoolsPageComponent} from './pages/public-pools-page/public-pools-page.component';
import {PoolFillPageComponent} from './pages/pool-fill-page/pool-fill-page.component';
import {PoolResolver} from './shared/pools/pool-resolver.service';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: PageSkeletComponent,
    children: [
      {
        path: '',
        component: PoolActionsComponent,
      },
      {
        path: 'create',
        component: CreatePoolProcessPageComponent,
      },
      {
        path: 'contacts',
        component: ContactListPageComponent
      },
      {
        path: 'pools',
        component: PoolsPageComponent
      },
      {
        path: 'publicpools',
        component: PublicPoolsPageComponent
      },
      {
        path: 'pool/:id',
        component: PoolFillPageComponent,
        resolve: {pool: PoolResolver}
      },
      {
        path: 'profile',
        component: ProfilePageComponent
      }
    ]
    // data: { title: 'Heroes List' }
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
