# Backend almundo
> Backend de almundo.

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

Backend construido en nodejs, express y mongoDB para la consulta de los hoteles dentro de la aplicación móvil de almundo.

![](./Logo-Almundo.png)

## Instalación

OS X, Linux y Windows:

```sh
npm install
```

##Base de datos

El sistema utiliza el motor de base de datos no SLQ mongoDB y como ORM mongoose, actualmente el sistema maneja 2 bases de datos, una para el ambiente de desarrollo y otra para el ambiente de producción y estas a su vez están alojadas en la plataforma llamada mongo Atlas.

##Ejecución del backend

Esta api se puede ejecutar en dos entornos distintos los cuales son desarrollo y producción, esto se hace igualando una variable de entorno 'NODE_ENV' al entorno en el que se desea ejecutar. Dependiendo del entorno en el que se ejecute, así mismo se seleccionará la base de datos a la que se conecte el sistema.

```sh

//producción
NODE_ENV=production

//Desarrollo
NODE_ENV=development

```

Seguido de esto le decimos a nodeJS que nos ejecute el archivo que levantara nuestro servidor:

```sh

NODE_ENV=production node app.js

```

## Configuración de desarrollo

Para instalar alguna nueva dependencia dentro del sistema el proceso es sencillo, a continuación se coloca un ejemplo de esto:

```sh

npm install <package> --save

```


## Historial de versiones

* 0.0.1
    * Trabajo en progreso

## Meta

Eder Diaz – [@ederdiaz8](https://twitter.com/ederdiaz8) – ederdiaz_@hotmail.com

Distribuido bajo la licencia MIT. Ver ``LICENSE`` para más información.

[https://github.com/ederius/backend-almundo.git](https://github.com/ederius/backend-almundo.git)

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square