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

        stage('ssh into VM and deploying dockerimage') {
            agent{
                label 'slave'
            }
            steps{
                sh 'gcloud compute ssh odeand@devops1'
                sh 'sudo su -'
                sh 'sudo apt-get update && \
                    sudo apt-get -y install apt-transport-https \
                         ca-certificates \
                         curl \
                         gnupg2 \
                         software-properties-common && \
                    sudo curl -fsSL https://download.docker.com/linux/$(. /etc/os-release; sudo echo "$ID")/gpg > /tmp/dkey; apt-key add /tmp/dkey && \
                    sudo add-apt-repository \
                       "deb [arch=amd64] https://download.docker.com/linux/$(. /etc/os-release; sudo echo "$ID") \
                       $(lsb_release -cs) \
                       stable" && \
                    sudo apt-get update && \
                    sudo apt-get -y install docker-ce'
                sh 'docker pull odeand14/devopsexam'
                sh 'docker run -p 80:80 odeand14/devopsexam'
            }
        }
    }
}
