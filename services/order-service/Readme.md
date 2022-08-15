# Desafío Backend Sequra
Solución para generar una tarea automatizada que calculé los desembolsos que se deben pagar los días lunes a cada uno de los comerciantes dados de alta en la plataforma del acumulado de ventas realizadas semana a semana, realizando la retención correspondiente de las tarifas vigentes por cada uno de los pedidos completados durante la semana del cálculo.

Además de un servicio que exponga cada uno de los pagos que se han recibido.

## Requisitos

 - Instalar [**NodeJs**](https://nodejs.org/es/)
 - Instalar [**Liquibase**](https://www.liquibase.org/)
 - Instalar **[**Docker**](https://www.docker.com/products/docker-desktop/)**

## Carga inicial de registros en BD
Se utilizó **Liquibase** para mantener un versionado de la base de datos.
Tener creada una BD de acuerdo a las propiedades en el archivo `.env`

Propiedades de la BD de utilizada en la prueba.
    #mysql connection options
	    DB_NAME=u568346124_sequra
		DB_USER=u568346124_sequra
		DB_PASSWORD=W0@i6UAt+XO
		DB_PORT=3306
		DB_HOST=31.170.167.204

Ejecutar el siguiente comando desde la carpeta `/database/dev/sequra` 

    liquibase --changeLogFile=changesets/db.changelog-dev.xml update

Esto creará las tablas y la carga inicial de datos.

## Imágen Docker Microservicios
Ejecutar los siguientes comandos desde `/services/order-service` para iniciar la imágen correspondiente a los microservicios.

    docker build -t order-service .
    docker run -dp 9100:9100 order-service

El servicio de `orders` se levantará en el puerto `:9100`


## Imágen Docker Kafka
Ejecutar el siguiente comandos desde `/kafka`

    docker-compose up

## Endpoints
Obtener todos los pagos por `merchant_id`

    http://localhost:9100/api/v1/disbursements/:id

## Cron de desembolsos

El cron se ejecutará los días lunes, dejando un mensaje en el tópico de **Kafka** definido **"orders"**

    cron.schedule("0 2 * * 1", async () => {
	    await  Kafka.send("orders", JSON.stringify(new Date().toISOString().toString()))
		.then(() => {
			console.log("Disbursement process started");
		}).catch((err) => {
			console.log("Error en Kafka", err);
		});
	});

## Swagger
En la dirección siguiente se puede consultar los contratos de de **API**

    http://localhost:9100/docs

## Colaborador
Issac Centeno Andrade [[icenteno.andrade@gmail.com](mailto:icenteno.andrade@gmail.com)]

## Licencia

[**MIT**](https://opensource.org/licenses/MIT)