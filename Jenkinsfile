@Library("jenkins shared library")_

pipeline {
    agent any
    triggers{
        pollSCM('H 4/* 0 0 1-5')
    }
    stages{
        stage('build') {
            agent{
                label 'slave'
            }
            tools{
                jdk "JDK 8"
                maven "apache-maven-3.3.9"
            }
            steps{
                sh('mvn clean deploy')
                sh('docker build ./reactDevops -t devops')
                mystep("Test")
            }
        }
        stage('deploy') {
            agent{
                dockerfile { dir 'reactDevops' }
            }
            steps{
                sh('docker run -p 80:80 reactdevops:latest')
            }
        }
    }
}
