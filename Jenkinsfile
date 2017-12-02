@Library("jenkins shared library")_

pipeline {
    def app
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
                sh('cd reactDevops')
            }
        }
        stage('build docker image') {
            app = docker.build("reactDevops")
        }

        stage('push image') {
             docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                app.push("${env.BUILD_NUMBER}")
                app.push("latest")
            }
        }
    }
}
