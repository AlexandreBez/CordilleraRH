'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">cordillera-rh-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e2314ff9abe185969adcc4461ca984ee770b056abffbe507fff3e1d7544d78f7222062065999a7d64da549c2865df966bde0b1c94118d0ce30bb42d5cb2652b6"' : 'data-target="#xs-components-links-module-AppModule-e2314ff9abe185969adcc4461ca984ee770b056abffbe507fff3e1d7544d78f7222062065999a7d64da549c2865df966bde0b1c94118d0ce30bb42d5cb2652b6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e2314ff9abe185969adcc4461ca984ee770b056abffbe507fff3e1d7544d78f7222062065999a7d64da549c2865df966bde0b1c94118d0ce30bb42d5cb2652b6"' :
                                            'id="xs-components-links-module-AppModule-e2314ff9abe185969adcc4461ca984ee770b056abffbe507fff3e1d7544d78f7222062065999a7d64da549c2865df966bde0b1c94118d0ce30bb42d5cb2652b6"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-de3b409c3fa768ab9866bc41550e87dc2467f802a777455adc258d2cbb0da97cc24ec40cb618693692623a366be66bd1fce90bb0b306a304455c345d225e5439"' : 'data-target="#xs-components-links-module-AuthModule-de3b409c3fa768ab9866bc41550e87dc2467f802a777455adc258d2cbb0da97cc24ec40cb618693692623a366be66bd1fce90bb0b306a304455c345d225e5439"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-de3b409c3fa768ab9866bc41550e87dc2467f802a777455adc258d2cbb0da97cc24ec40cb618693692623a366be66bd1fce90bb0b306a304455c345d225e5439"' :
                                            'id="xs-components-links-module-AuthModule-de3b409c3fa768ab9866bc41550e87dc2467f802a777455adc258d2cbb0da97cc24ec40cb618693692623a366be66bd1fce90bb0b306a304455c345d225e5439"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRouterModule.html" data-type="entity-link" >AuthRouterModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommonPaymentsModule.html" data-type="entity-link" >CommonPaymentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CommonPaymentsModule-6af238d421c7e09b2dfbadf5a8c1054e2fc49731e4bbcf4c5d0965aa3d6b6b95693fde83a15fb5999b366b896e09f749902321366b487f800ce2d03dd369509e"' : 'data-target="#xs-components-links-module-CommonPaymentsModule-6af238d421c7e09b2dfbadf5a8c1054e2fc49731e4bbcf4c5d0965aa3d6b6b95693fde83a15fb5999b366b896e09f749902321366b487f800ce2d03dd369509e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CommonPaymentsModule-6af238d421c7e09b2dfbadf5a8c1054e2fc49731e4bbcf4c5d0965aa3d6b6b95693fde83a15fb5999b366b896e09f749902321366b487f800ce2d03dd369509e"' :
                                            'id="xs-components-links-module-CommonPaymentsModule-6af238d421c7e09b2dfbadf5a8c1054e2fc49731e4bbcf4c5d0965aa3d6b6b95693fde83a15fb5999b366b896e09f749902321366b487f800ce2d03dd369509e"' }>
                                            <li class="link">
                                                <a href="components/BillReceiptComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillReceiptComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommonPaymentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonPaymentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteRegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteRegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewPaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewPaymentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GovernmentPaymentsModule.html" data-type="entity-link" >GovernmentPaymentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GovernmentPaymentsModule-4524f853b84fe9cdab202ff833969cc9c0e78ef366f92228796cd5be9e83a9e08033dfc31016becd01076cb1ea72af60afd00b98cf71ac2c7b463309e9e9cff0"' : 'data-target="#xs-components-links-module-GovernmentPaymentsModule-4524f853b84fe9cdab202ff833969cc9c0e78ef366f92228796cd5be9e83a9e08033dfc31016becd01076cb1ea72af60afd00b98cf71ac2c7b463309e9e9cff0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GovernmentPaymentsModule-4524f853b84fe9cdab202ff833969cc9c0e78ef366f92228796cd5be9e83a9e08033dfc31016becd01076cb1ea72af60afd00b98cf71ac2c7b463309e9e9cff0"' :
                                            'id="xs-components-links-module-GovernmentPaymentsModule-4524f853b84fe9cdab202ff833969cc9c0e78ef366f92228796cd5be9e83a9e08033dfc31016becd01076cb1ea72af60afd00b98cf71ac2c7b463309e9e9cff0"' }>
                                            <li class="link">
                                                <a href="components/BillReceiptComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillReceiptComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GovernmentPaymentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GovernmentPaymentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewPaymentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewPaymentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-bec91967af038b45b0b58e188b0e6e1ee88a61e81bd11c8c959d2336daa9cb850b99652b346f04c90a36286ffa19b8f045998a7bd7adfdc8959442a01f4f9a2e"' : 'data-target="#xs-components-links-module-HomeModule-bec91967af038b45b0b58e188b0e6e1ee88a61e81bd11c8c959d2336daa9cb850b99652b346f04c90a36286ffa19b8f045998a7bd7adfdc8959442a01f4f9a2e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-bec91967af038b45b0b58e188b0e6e1ee88a61e81bd11c8c959d2336daa9cb850b99652b346f04c90a36286ffa19b8f045998a7bd7adfdc8959442a01f4f9a2e"' :
                                            'id="xs-components-links-module-HomeModule-bec91967af038b45b0b58e188b0e6e1ee88a61e81bd11c8c959d2336daa9cb850b99652b346f04c90a36286ffa19b8f045998a7bd7adfdc8959442a01f4f9a2e"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LegalPaymentsModule.html" data-type="entity-link" >LegalPaymentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LegalPaymentsModule-89d81a0fbdc1b23329c20e551526bb3a42f6c00d093683874dd14cf3a11ed5e6dcb7513d89b15b9ecca148c2a866aaeaf35078c204c9735ff804cee66623b086"' : 'data-target="#xs-components-links-module-LegalPaymentsModule-89d81a0fbdc1b23329c20e551526bb3a42f6c00d093683874dd14cf3a11ed5e6dcb7513d89b15b9ecca148c2a866aaeaf35078c204c9735ff804cee66623b086"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LegalPaymentsModule-89d81a0fbdc1b23329c20e551526bb3a42f6c00d093683874dd14cf3a11ed5e6dcb7513d89b15b9ecca148c2a866aaeaf35078c204c9735ff804cee66623b086"' :
                                            'id="xs-components-links-module-LegalPaymentsModule-89d81a0fbdc1b23329c20e551526bb3a42f6c00d093683874dd14cf3a11ed5e6dcb7513d89b15b9ecca148c2a866aaeaf35078c204c9735ff804cee66623b086"' }>
                                            <li class="link">
                                                <a href="components/BillReceiptComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillReceiptComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteRegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteRegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LegalPaymentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LegalPaymentsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NacionalSolutionsModule.html" data-type="entity-link" >NacionalSolutionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NacionalSolutionsModule-9f7efea2fbd7c2527bf834907d99ae51d3b23ca87ac3b1d9f60b8212b4c3319cc98d710bd5aef90ef49b877b1ed9041e084755a98e85e9850b12b93d83dff812"' : 'data-target="#xs-components-links-module-NacionalSolutionsModule-9f7efea2fbd7c2527bf834907d99ae51d3b23ca87ac3b1d9f60b8212b4c3319cc98d710bd5aef90ef49b877b1ed9041e084755a98e85e9850b12b93d83dff812"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NacionalSolutionsModule-9f7efea2fbd7c2527bf834907d99ae51d3b23ca87ac3b1d9f60b8212b4c3319cc98d710bd5aef90ef49b877b1ed9041e084755a98e85e9850b12b93d83dff812"' :
                                            'id="xs-components-links-module-NacionalSolutionsModule-9f7efea2fbd7c2527bf834907d99ae51d3b23ca87ac3b1d9f60b8212b4c3319cc98d710bd5aef90ef49b877b1ed9041e084755a98e85e9850b12b93d83dff812"' }>
                                            <li class="link">
                                                <a href="components/NacionalSolutionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NacionalSolutionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewInternacionalContracModule.html" data-type="entity-link" >NewInternacionalContracModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NewInternacionalContracModule-3363b8a07f4e15ca2e00f23f7a5fd859a731653c0ba0f4e8da9c5c1416f9f364173a9aefddf5a1b6bae99001a9b3b7efdd96f5923c93ed3005dbe910d1b3f86d"' : 'data-target="#xs-components-links-module-NewInternacionalContracModule-3363b8a07f4e15ca2e00f23f7a5fd859a731653c0ba0f4e8da9c5c1416f9f364173a9aefddf5a1b6bae99001a9b3b7efdd96f5923c93ed3005dbe910d1b3f86d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NewInternacionalContracModule-3363b8a07f4e15ca2e00f23f7a5fd859a731653c0ba0f4e8da9c5c1416f9f364173a9aefddf5a1b6bae99001a9b3b7efdd96f5923c93ed3005dbe910d1b3f86d"' :
                                            'id="xs-components-links-module-NewInternacionalContracModule-3363b8a07f4e15ca2e00f23f7a5fd859a731653c0ba0f4e8da9c5c1416f9f364173a9aefddf5a1b6bae99001a9b3b7efdd96f5923c93ed3005dbe910d1b3f86d"' }>
                                            <li class="link">
                                                <a href="components/NewInternacionalContracComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewInternacionalContracComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NewInternacionalContracModule-3363b8a07f4e15ca2e00f23f7a5fd859a731653c0ba0f4e8da9c5c1416f9f364173a9aefddf5a1b6bae99001a9b3b7efdd96f5923c93ed3005dbe910d1b3f86d"' : 'data-target="#xs-injectables-links-module-NewInternacionalContracModule-3363b8a07f4e15ca2e00f23f7a5fd859a731653c0ba0f4e8da9c5c1416f9f364173a9aefddf5a1b6bae99001a9b3b7efdd96f5923c93ed3005dbe910d1b3f86d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NewInternacionalContracModule-3363b8a07f4e15ca2e00f23f7a5fd859a731653c0ba0f4e8da9c5c1416f9f364173a9aefddf5a1b6bae99001a9b3b7efdd96f5923c93ed3005dbe910d1b3f86d"' :
                                        'id="xs-injectables-links-module-NewInternacionalContracModule-3363b8a07f4e15ca2e00f23f7a5fd859a731653c0ba0f4e8da9c5c1416f9f364173a9aefddf5a1b6bae99001a9b3b7efdd96f5923c93ed3005dbe910d1b3f86d"' }>
                                        <li class="link">
                                            <a href="injectables/CompanyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewNacionalContracModule.html" data-type="entity-link" >NewNacionalContracModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NewNacionalContracModule-2d70b9ed6726a576201afa0cf4807ae8638dcb6d6cd6091f4197d2bbbbbdf035002f8895bf1cb852eb94563c5d1697c7e0a2925a800feac045090a5364005759"' : 'data-target="#xs-components-links-module-NewNacionalContracModule-2d70b9ed6726a576201afa0cf4807ae8638dcb6d6cd6091f4197d2bbbbbdf035002f8895bf1cb852eb94563c5d1697c7e0a2925a800feac045090a5364005759"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NewNacionalContracModule-2d70b9ed6726a576201afa0cf4807ae8638dcb6d6cd6091f4197d2bbbbbdf035002f8895bf1cb852eb94563c5d1697c7e0a2925a800feac045090a5364005759"' :
                                            'id="xs-components-links-module-NewNacionalContracModule-2d70b9ed6726a576201afa0cf4807ae8638dcb6d6cd6091f4197d2bbbbbdf035002f8895bf1cb852eb94563c5d1697c7e0a2925a800feac045090a5364005759"' }>
                                            <li class="link">
                                                <a href="components/NewNacionalContractComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewNacionalContractComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NewNacionalContracModule-2d70b9ed6726a576201afa0cf4807ae8638dcb6d6cd6091f4197d2bbbbbdf035002f8895bf1cb852eb94563c5d1697c7e0a2925a800feac045090a5364005759"' : 'data-target="#xs-injectables-links-module-NewNacionalContracModule-2d70b9ed6726a576201afa0cf4807ae8638dcb6d6cd6091f4197d2bbbbbdf035002f8895bf1cb852eb94563c5d1697c7e0a2925a800feac045090a5364005759"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NewNacionalContracModule-2d70b9ed6726a576201afa0cf4807ae8638dcb6d6cd6091f4197d2bbbbbdf035002f8895bf1cb852eb94563c5d1697c7e0a2925a800feac045090a5364005759"' :
                                        'id="xs-injectables-links-module-NewNacionalContracModule-2d70b9ed6726a576201afa0cf4807ae8638dcb6d6cd6091f4197d2bbbbbdf035002f8895bf1cb852eb94563c5d1697c7e0a2925a800feac045090a5364005759"' }>
                                        <li class="link">
                                            <a href="injectables/CompanyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentAssistanceModule.html" data-type="entity-link" >PaymentAssistanceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PaymentAssistanceModule-a52ac5889ee75eaaf33ebc209621edabd4babe3e85ede7f9a6912e722a79a049c6fa4f24697d622f91b2eccdc39f18dfd39599fe0f390ef4912204ffb6db1e36"' : 'data-target="#xs-components-links-module-PaymentAssistanceModule-a52ac5889ee75eaaf33ebc209621edabd4babe3e85ede7f9a6912e722a79a049c6fa4f24697d622f91b2eccdc39f18dfd39599fe0f390ef4912204ffb6db1e36"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaymentAssistanceModule-a52ac5889ee75eaaf33ebc209621edabd4babe3e85ede7f9a6912e722a79a049c6fa4f24697d622f91b2eccdc39f18dfd39599fe0f390ef4912204ffb6db1e36"' :
                                            'id="xs-components-links-module-PaymentAssistanceModule-a52ac5889ee75eaaf33ebc209621edabd4babe3e85ede7f9a6912e722a79a049c6fa4f24697d622f91b2eccdc39f18dfd39599fe0f390ef4912204ffb6db1e36"' }>
                                            <li class="link">
                                                <a href="components/PaymentAssistanceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentAssistanceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchCompanyModule.html" data-type="entity-link" >SearchCompanyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchCompanyModule-ae177bae10f099e0b1bfc6955a9e172899a9e5ef694eeda00041c703f35855f35ae1afcd73ac76854fd943fef49217b7c621f579e48813a4eb7b0844fe917683"' : 'data-target="#xs-components-links-module-SearchCompanyModule-ae177bae10f099e0b1bfc6955a9e172899a9e5ef694eeda00041c703f35855f35ae1afcd73ac76854fd943fef49217b7c621f579e48813a4eb7b0844fe917683"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchCompanyModule-ae177bae10f099e0b1bfc6955a9e172899a9e5ef694eeda00041c703f35855f35ae1afcd73ac76854fd943fef49217b7c621f579e48813a4eb7b0844fe917683"' :
                                            'id="xs-components-links-module-SearchCompanyModule-ae177bae10f099e0b1bfc6955a9e172899a9e5ef694eeda00041c703f35855f35ae1afcd73ac76854fd943fef49217b7c621f579e48813a4eb7b0844fe917683"' }>
                                            <li class="link">
                                                <a href="components/CompanyTerminationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyTerminationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditCompanyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditCompanyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FullDetailCompanyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FullDetailCompanyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchCompanyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchCompanyComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SearchCompanyModule-ae177bae10f099e0b1bfc6955a9e172899a9e5ef694eeda00041c703f35855f35ae1afcd73ac76854fd943fef49217b7c621f579e48813a4eb7b0844fe917683"' : 'data-target="#xs-injectables-links-module-SearchCompanyModule-ae177bae10f099e0b1bfc6955a9e172899a9e5ef694eeda00041c703f35855f35ae1afcd73ac76854fd943fef49217b7c621f579e48813a4eb7b0844fe917683"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SearchCompanyModule-ae177bae10f099e0b1bfc6955a9e172899a9e5ef694eeda00041c703f35855f35ae1afcd73ac76854fd943fef49217b7c621f579e48813a4eb7b0844fe917683"' :
                                        'id="xs-injectables-links-module-SearchCompanyModule-ae177bae10f099e0b1bfc6955a9e172899a9e5ef694eeda00041c703f35855f35ae1afcd73ac76854fd943fef49217b7c621f579e48813a4eb7b0844fe917683"' }>
                                        <li class="link">
                                            <a href="injectables/CompanyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompanyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchEmployeeModule.html" data-type="entity-link" >SearchEmployeeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchEmployeeModule-1f28243fe0e9e11dacf7f5aac2e9963f3a457b141f0e603c65f3aefd01b339e8641f756bdaaae14d0f49fe0d2a20c02fafe4bfc063a31a5cabb7fd7c4a49bf67"' : 'data-target="#xs-components-links-module-SearchEmployeeModule-1f28243fe0e9e11dacf7f5aac2e9963f3a457b141f0e603c65f3aefd01b339e8641f756bdaaae14d0f49fe0d2a20c02fafe4bfc063a31a5cabb7fd7c4a49bf67"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchEmployeeModule-1f28243fe0e9e11dacf7f5aac2e9963f3a457b141f0e603c65f3aefd01b339e8641f756bdaaae14d0f49fe0d2a20c02fafe4bfc063a31a5cabb7fd7c4a49bf67"' :
                                            'id="xs-components-links-module-SearchEmployeeModule-1f28243fe0e9e11dacf7f5aac2e9963f3a457b141f0e603c65f3aefd01b339e8641f756bdaaae14d0f49fe0d2a20c02fafe4bfc063a31a5cabb7fd7c4a49bf67"' }>
                                            <li class="link">
                                                <a href="components/EditEmployeeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditEmployeeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmployeeTerminationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeeTerminationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FullDetailEmployeeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FullDetailEmployeeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchEmployeeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchEmployeeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-d8c6fdf24f7b63127c03b307da1047c58c007442b1e1f53f11bc790745796fd9a88f089c2c8761ae58f1362983a60fdc0248f16b5b8cbf86a0b25a8fc939b7ae"' : 'data-target="#xs-components-links-module-SharedModule-d8c6fdf24f7b63127c03b307da1047c58c007442b1e1f53f11bc790745796fd9a88f089c2c8761ae58f1362983a60fdc0248f16b5b8cbf86a0b25a8fc939b7ae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-d8c6fdf24f7b63127c03b307da1047c58c007442b1e1f53f11bc790745796fd9a88f089c2c8761ae58f1362983a60fdc0248f16b5b8cbf86a0b25a8fc939b7ae"' :
                                            'id="xs-components-links-module-SharedModule-d8c6fdf24f7b63127c03b307da1047c58c007442b1e1f53f11bc790745796fd9a88f089c2c8761ae58f1362983a60fdc0248f16b5b8cbf86a0b25a8fc939b7ae"' }>
                                            <li class="link">
                                                <a href="components/SpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SuppliersContractsModule.html" data-type="entity-link" >SuppliersContractsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SuppliersContractsModule-e022e711b588b7bde79d47e599fcdfe4a4e6d6e1e414f7d6367aca5518fe04ddb4b02e1ef565925764e80ec2ca385f0bd7c7d03843f1898e54a722195ec42837"' : 'data-target="#xs-components-links-module-SuppliersContractsModule-e022e711b588b7bde79d47e599fcdfe4a4e6d6e1e414f7d6367aca5518fe04ddb4b02e1ef565925764e80ec2ca385f0bd7c7d03843f1898e54a722195ec42837"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SuppliersContractsModule-e022e711b588b7bde79d47e599fcdfe4a4e6d6e1e414f7d6367aca5518fe04ddb4b02e1ef565925764e80ec2ca385f0bd7c7d03843f1898e54a722195ec42837"' :
                                            'id="xs-components-links-module-SuppliersContractsModule-e022e711b588b7bde79d47e599fcdfe4a4e6d6e1e414f7d6367aca5518fe04ddb4b02e1ef565925764e80ec2ca385f0bd7c7d03843f1898e54a722195ec42837"' }>
                                            <li class="link">
                                                <a href="components/EditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EndContractComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EndContractComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewSupplierComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewSupplierComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RemoveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoveComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RenewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RenewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuppliersContractsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuppliersContractsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuppliersDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuppliersDetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BillReceiptComponent-1.html" data-type="entity-link" >BillReceiptComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BillReceiptComponent-2.html" data-type="entity-link" >BillReceiptComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BussinesIntelligenceComponent.html" data-type="entity-link" >BussinesIntelligenceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CurriculumStoreComponent.html" data-type="entity-link" >CurriculumStoreComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DeleteRegisterComponent-1.html" data-type="entity-link" >DeleteRegisterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DeleteRegisterComponent-2.html" data-type="entity-link" >DeleteRegisterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmployeesSolutionsComponent.html" data-type="entity-link" >EmployeesSolutionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InfrastructureContractsComponent.html" data-type="entity-link" >InfrastructureContractsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InternacionalPartnershipComponent.html" data-type="entity-link" >InternacionalPartnershipComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InternacionalSolutionsComponent.html" data-type="entity-link" >InternacionalSolutionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InternalOpportunitiesComponent.html" data-type="entity-link" >InternalOpportunitiesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MyCandidatesComponent.html" data-type="entity-link" >MyCandidatesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MyInfoComponent.html" data-type="entity-link" >MyInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MySchedulesComponent.html" data-type="entity-link" >MySchedulesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MySuggestionsComponent.html" data-type="entity-link" >MySuggestionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MyTeamComponent.html" data-type="entity-link" >MyTeamComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MyTicketsComponent.html" data-type="entity-link" >MyTicketsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MyTimeComponent.html" data-type="entity-link" >MyTimeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MyWorkComponent.html" data-type="entity-link" >MyWorkComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NacionalInternacionalPartnershipComponent.html" data-type="entity-link" >NacionalInternacionalPartnershipComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NacionalInternacionalSolutionsComponent.html" data-type="entity-link" >NacionalInternacionalSolutionsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NacionalPartnershipComponent.html" data-type="entity-link" >NacionalPartnershipComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NewEmployeeComponent.html" data-type="entity-link" >NewEmployeeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NewPaymentComponent-1.html" data-type="entity-link" >NewPaymentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NewPaymentComponent-2.html" data-type="entity-link" >NewPaymentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OpportunitiesComponent.html" data-type="entity-link" >OpportunitiesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsComponent.html" data-type="entity-link" >SettingsComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CompanyModel.html" data-type="entity-link" >CompanyModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmployeeModel.html" data-type="entity-link" >EmployeeModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompanyService.html" data-type="entity-link" >CompanyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmployeeService.html" data-type="entity-link" >EmployeeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});