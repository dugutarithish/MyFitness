# MyFitness

A lightweight, containerized fitness web application packaged with Nginx and Docker for fast and reliable deployment.

## Features
- **Modern Web Interface:** Clean, responsive UI for tracking fitness goals and activities.
- **Dockerized Architecture:** Runs inside an ultra-lightweight Nginx Alpine container, making it easy to deploy anywhere.
- **Production Ready:** Optimized static asset serving for high performance and low resource usage.

## Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript
- **Web Server:** Nginx (Alpine)
- **Containerization:** Docker
- **Version Control:** Git & GitHub

## Getting Started Locally

### Prerequisites
Make sure you have [Docker](https://docs.docker.com/get-docker/) installed on your machine.

### Running with Docker

Clone the repository and build the container using these commands:

```bash
git clone https://github.com/dugutarithish/MyFitness.git
cd MyFitness
docker build -t myfitness .
docker run -d -p 8080:80 --name myfitness-container myfitness

##Open your browser and navigate to:
http://localhost:8080



<img width="1897" height="972" alt="image" src="https://github.com/user-attachments/assets/996158ec-df1e-4856-a999-117769c901e1" />
