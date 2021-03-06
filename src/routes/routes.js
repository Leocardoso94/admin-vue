import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue';
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue';

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue';
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue';
import Notifications from 'src/components/Dashboard/Views/Notifications.vue';
import Icons from 'src/components/Dashboard/Views/Icons.vue';
import Maps from 'src/components/Dashboard/Views/Maps.vue';
import Typography from 'src/components/Dashboard/Views/Typography.vue';
import TableList from 'src/components/Dashboard/Views/TableList.vue';
import Participantes from 'src/components/Dashboard/Views/Participantes.vue';
import Dizimistas from 'src/components/Dashboard/Views/Dizimistas.vue';

import Visitantes from 'src/components/Dashboard/Views/Visitantes';
import VisitanteProfile from 'src/components/Dashboard/Views/Visitantes/Profile.vue';
import AddVisitantes from 'src/components/Dashboard/Views/Visitantes/Add.vue';

import Pastorais from 'src/components/Dashboard/Views/Pastorais';
import PastoralProfile from 'src/components/Dashboard/Views/Pastorais/Profile.vue';
import AddPastoral from 'src/components/Dashboard/Views/Pastorais/Add.vue';

import Comunidades from 'src/components/Dashboard/Views/Comunidades';
import ComunidadeProfile from 'src/components/Dashboard/Views/Comunidades/Profile.vue';
import AddComunidade from 'src/components/Dashboard/Views/Comunidades/Add.vue';

import MembrosPastorais from 'src/components/Dashboard/Views/MembrosPastorais';
import MembroPastoralProfile from 'src/components/Dashboard/Views/MembrosPastorais/Profile.vue';
import AddMembroPastoral from 'src/components/Dashboard/Views/MembrosPastorais/Add.vue';

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'visitantes/add',
        name: 'novo Visitante',
        component: AddVisitantes,
      },
      {
        path: 'visitantes/:id',
        name: 'Visitante',
        component: VisitanteProfile,
      },
      {
        path: 'visitantes',
        name: 'visitantes',
        component: Visitantes,
      },
      {
        path: 'participantes',
        name: 'participantes',
        component: Participantes
      },
      {
        path: 'membros-pastorais/add',
        name: 'novo Membro Pastoral',
        component: AddMembroPastoral,
      },
      {
        path: 'membros-pastorais/:id',
        name: 'membro Pastoral',
        component: MembroPastoralProfile,
      },
      {
        path: 'membros-pastorais',
        name: 'membros Pastorais',
        component: MembrosPastorais
      },
      {
        path: 'dizimistas',
        name: 'dizimistas',
        component: Dizimistas
      },
      {
        path: 'pastorais/add',
        name: 'nova Pastoral',
        component: AddPastoral,
      },
      {
        path: 'pastorais/:id',
        name: 'Pastoral',
        component: PastoralProfile,
      },
      {
        path: 'pastorais',
        name: 'pastorais',
        component: Pastorais
      },
      {
        path: 'comunidades/add',
        name: 'nova Comunidade',
        component: AddComunidade,
      },
      {
        path: 'comunidades/:id',
        name: 'Comunidade',
        component: ComunidadeProfile,
      },
      {
        path: 'comunidades',
        name: 'comunidades',
        component: Comunidades
      },
      {
        path: 'stats',
        name: 'stats',
        component: UserProfile
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      }
    ]
  },
  { path: '*', component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
