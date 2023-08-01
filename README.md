# BookManagementSystem

This is a book management system built with Spring Boot, Angular, Docker and Kubernetes. The application is organized into microservices and is suitable for deployment on the cloud.

## Getting Started

These instructions will get you a copy of this project up and running on your local machine for development and testing purposes.

### Prerequisites

- Java 11
- Node.js and npm
- Docker
- Kubernetes (or a local solution minikube)

### Installing

1. Clone the repository:
   - `git clone https://github.com/sabir-mammadov/BookManagementSystem.git`
2. Navigate into each service directory ('book-service' and 'user-service') and build with Maven:
   - `mvn clean install`
3. Navigate in the 'frontend' directory and install dependencies with npm:
   - `npm install`

### Running the application

1. Start each service with Docker:
   - `docker build -t book-service`
   - `docker run -p 8080:8080 book-service`
3. Start the Angular application:
   - `ng serve`

## Built With

- [Spring Boot](https://spring.io/projects/spring-boot) - The backend framework used
- [Angular](https://angular.io/) - The frontend framework used
- [Docker](https://www.docker.com/) - Used for containerization
- [Kubernetes](https://kubernetes.io/) - Used for orchestration

## License

This project is licensed under the MIT License -  see the [LICENSE.MD](LICENSE.MD) file for details
