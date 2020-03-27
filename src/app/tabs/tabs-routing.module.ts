import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "home",
    component: TabsPage,
    children: [
      {
        path: "dashboard",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pages/dashboard/dashboard.module").then(
                m => m.DashboardPageModule
              )
          },
          {
            path: "users",
            loadChildren: () =>
              import("../pages/users/users.module").then(m => m.UsersPageModule)
          },
          {
            path: "createuser",
            loadChildren: () =>
              import("../pages/createuser/createuser.module").then(
                m => m.CreateuserPageModule
              )
          },
          {
            path: "createorder",
            loadChildren: () =>
              import("../pages/createorder/createorder.module").then(
                m => m.CreateorderPageModule
              )
          },
          {
            path: "createproduct",
            loadChildren: () =>
              import("../pages/createproduct/createproduct.module").then(
                m => m.CreateproductPageModule
              )
          }
        ]
      },
      {
        path: "products",
        loadChildren: () =>
          import("../pages/products/products.module").then(
            m => m.ProductsPageModule
          )
      },
      {
        path: "orders",
        loadChildren: () =>
          import("../pages/orders/orders.module").then(m => m.OrdersPageModule)
      },
      {
        path: "",
        redirectTo: "/home/dashboard",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/home/dashboard",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
