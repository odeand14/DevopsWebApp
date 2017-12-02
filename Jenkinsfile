@Library("jenkins shared library")_

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
                sh('cd reactDevops')
            }
        }
        stage('build and push docker image') {
            def app

            node {
                app = docker.build("reactDevops")

                docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                                app.push("${env.BUILD_NUMBER}")
                                app.push("latest")
                            }
            }

        }

        stage('create server') {

        }
    }
}
