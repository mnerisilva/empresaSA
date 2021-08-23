var app = angular.module('website', ['ngRoute' ]);

/**
* Inicializamos o angular.module com o mesmo nome que definimos na diretiva ng-app
* E incluímos a dependência do ngRoute 
*/
var app = angular.module('website', [ 'ngRoute' ]);
     
    /**
     * Como possuímos a variavel app definida acima com a inicialização do Angular
     * através do app.config conseguimos criar as configurações
     * definimos que essa configuração depende do $routeProvider e usamos na function($routeProvider)
     */
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
     
            // aqui dizemos quando estivernos na url / vamos carregar o conteúdo da pagina inicila a home
            // no segundo parametro definimos um objeto contendo o templateUrl da nossa pagina home e o controller que irá
            // preparar o conteudo e processar outros eventos da página que veremos posteriormente
            .when("/", {templateUrl: "templates/home.html", controller: "HomeCtrl"})
            // configuração das rotas bem parecidas para as outras paginas
            .when("/sobre", {templateUrl: "templates/sobre.html", controller: "SobreCtrl"})
            .when("/servicos", {templateUrl: "templates/servicos.html", controller: "ServicosCtrl"})
            .when("/precos", {templateUrl: "templates/precos.html", controller: "PrecosCtrl"})
            /* aqui você pode adicionar rotas para outras paginas que desejar criar */
            // por último dizemos se nenhuma url digitada for encontrada mostramos a página 404 que não existe no nosso servidor
            .otherwise("/404", {templateUrl: "templates/404.html"});
    }]);

/*
 * Controller utilizado nesse exemplo para ativar a galeria e tooltips
 */
app.controller('HomeCtrl', function ($scope, $location) {

    // Activates the Carousel
    $('.carousel').carousel({
      interval: 5000
    });
  
    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
      selector: "a[data-toggle=tooltip]"
    })
  });
  
  app.controller('SobreCtrl', function ($scope, $location) {
  
  });
  
  app.controller('ServicosCtrl', function ($scope, $location) {
  
  });
  
  app.controller('PrecosCtrl', function ($scope, $location) {
  
  });    