# BDNR-Areco-Canas-Bzurovski
Entregado como requerimiento para la materia Base de Datos No Relacionales

# Tesla

## _Users and Telemetry implementations_

You have to make sure that you have access to the databases before executing the service. 
To interact with the servers endpoints there is a postman collection available

## Telemtry

Telemtry uses Cassandra. To connect you to DB you should use enviroment variables or the defualt values:

- PORT (default "3000")
- CASSANDRA_KEYSPACE (default "bdnr")
- CONTACT_POINTS (default ["127.0.0.1"])
- CASSANDRA_LOCAL_DATA_CENTER (default "datacenter1")

To run the service

- Go to the telemetry/src directory
- Run `npm install`
- Run `node index.js`

## Users

Users uses MongoDB. To connect to you DB you should use enviroment variables or the defualt values:

- DATA_BASE_ADDRESS (default "mongodb://127.0.0.1:27017/tesla_db")
- PORT (default "3892")

To run the service

- Go to the users/src directory
- Run `npm install`
- Run `node index.js`
