import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import {
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  provideConfig,
  SiteContextConfig,
} from '@spartacus/core';
import {
  OutletPosition,
  defaultCmsContentProviders,
  layoutConfig,
  mediaConfig,
  provideOutlet,
} from '@spartacus/storefront';

import { RouterModule } from '@angular/router';
import { OutletCustomComponent } from '../outlet/outlet.component';

@NgModule({
  declarations: [],
  imports: [RouterModule],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443',
          prefix: '/occ/v2/',
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        currency: ['USD'],
        language: ['en'],
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3',
      },
    }),
    provideOutlet({
      id: 'footer',
      position: OutletPosition.REPLACE,
      component: OutletCustomComponent,
    }),
  ],
})
export class SpartacusConfigurationModule {}
