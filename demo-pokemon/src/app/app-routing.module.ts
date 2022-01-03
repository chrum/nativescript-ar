import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {
        path: "home",
        loadChildren: () => import("./home/home.module").then((m) => m.HomeModule)
    },
    {
        path: "augment-card",
        loadChildren: () => import("./augment-card/augment-card.module").then((m) => m.AugmentCardModule)
    },
    {
        path: "search-by-card",
        loadChildren: () => import("./search-by-card/search-by-card.module").then((m) => m.SearchByCardModule)
    },
    {
        path: "try-before-you-buy",
        loadChildren: () => import("./try-before-you-buy/try-before-you-buy.module")
            .then((m) => m.TryBeforeYouBuyModule)
    },
    {
        path: "settings",
        loadChildren: () => import("./settings/settings.module").then((m) => m.SettingsModule)
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
