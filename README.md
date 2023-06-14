
## Introduction

This project is a monorepo utilizing the TurboRepo structure. The monorepo contains three main projects: front-end, subscriber, and publisher.The front-end project serves as the user interface, while the subscriber and publisher projects implement the Redis Pub/Sub model for intercommunication.

## Installation
 To set up the project, follow the steps below:
 
1. Clone the repository:
```
git clone <repository_url>
```

2. Install dependencies for all projects. From the root directory of the repository, run the following command:
```
pnpm install
```

3. Configure the Redis Pub/Sub system:

* Make sure you have Redis installed and running either on your local machine or a remote server.
* Update the Redis connection details in the configuration files of both the subscriber and publisher projects.

## Running the Projects

1. Front-end:
```
cd apps/front-end
pnpm dev
```

1. Subscriber:
```
cd apps/subscriber
pnpm dev
```

1. Publisher:
```
cd apps/publisher
pnpm dev
```

### Front-end User Interface

The front-end project serves as the user interface for the application. It includes an input field where you can enter a message to publish, and upon sending the message, it will be displayed in the VS Code terminal.



### Redis Pub/Sub Model

The Redis Pub/Sub model is used for intercommunication between the subscriber and publisher projects. Here's an overview of how it works:

Publisher:

* The publisher project produces messages and publishes them to Redis channels.
* It utilizes the Redis client library to establish a connection with the Redis server and publish messages.
* Messages can be published to one or more channels, allowing multiple subscribers to receive them.

Subscriber:

* The subscriber project subscribes to Redis channels and consumes messages.
* It also uses the Redis client library to connect to the Redis server and      subscribe to specific channels.
* When a message is published to a channel, the subscriber receives it and performs the necessary actions.

The Redis Pub/Sub model enables a decoupled and scalable architecture, where the publisher and subscriber projects can operate independently. This approach facilitates easy scaling, fault tolerance, and extensibility.

