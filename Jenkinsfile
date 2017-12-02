@Library("jenkins shared library")_

def app

pipeline {
    agent any
    stages{
        stage('build in maven and node') {
            agent{
                label 'slave'
            }
            tools{
                jdk "JDK 8"
                maven "apache-maven-3.3.9"
            }
            steps{
                sh('mvn clean compile')
            }
        }
        stage('build docker image') {
            agent{
                label 'slave'
            }
            tools{
                Docker 'docker-newest'
            }
            steps{
                sh('cd reactDevops')
                script{
                    app = docker.build("reactDevops")
                }
            }
        }

        stage('push image') {
            agent{
                label 'slave'
            }
            tools{
                Docker 'docker-newest'
            }
            steps{
                script{
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                }
            }
        }
    }
}
