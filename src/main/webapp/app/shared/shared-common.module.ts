import { NgModule } from '@angular/core';

import { ArbitrosSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ArbitrosSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ArbitrosSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ArbitrosSharedCommonModule {}
