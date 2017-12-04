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
                sh('cp -r ./reactDevops/build .')
            }
        }
        stage('build docker image') {
            agent{
                label 'slave'
            }
            steps{
                script{
                    app = docker.build('odeand14/devopsexam')
                }
            }
        }

        stage('push image') {
            agent{
                label 'slave'
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

        stage('Create VM in Google Cloud')  {
            agent{
                label 'slave'
            }
            steps{
                sh 'ansible-playbook gceserver.yml'
            }
        }
    }
}
