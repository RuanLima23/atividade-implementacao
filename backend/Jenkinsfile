// pipeline {
//     agent any
//     environment {
//         PATH = "C:\\Program Files\\nodejs\\;${env.PATH}"
//         DOCKER_IMAGE = "ruanitro/nestjs-backend:1.0"
//         TAG = "1.0"
//     }
//     stages {
//         stage('checkout') {
//             steps {
//                 checkout scm
//             }
//         }
//         // stage('install') {
//         //     steps {
//         //         bat 'npm install'
//         //     }
//         // }
//         // stage('build') {
//         //     steps {
//         //         bat 'npm run build'
//         //     }
//         //}
//         //stage('test') {
//         //    steps {
//         //        bat 'npm run test'
//         //    }
//         //}
//         stage('build image') {
//             steps {
//                 bat 'docker build -t nestjs-backend:1.0 .'
//             }
//         }
//         stage('docker push') {
//             steps {
//                 withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
//                     bat """
//                         docker login -u %DOCKERHUB_USERNAME% -p %DOCKERHUB_PASSWORD%
//                         docker tag nestjs-backend:1.0 %DOCKERHUB_USERNAME%/nestjs-backend:1.0
//                         docker push %DOCKERHUB_USERNAME%/nestjs-backend:1.0
//                         docker logout
//                     """
//                 }
//             }
//         }
//     }
// }


pipeline {
    agent any
    environment {
        PATH = "C:/Program Files/nodejs/;${env.PATH}"
    }
    stages {
        stage('checkout') {
            steps {
                checkout scm
            }
        }
        stage('install') {
            steps {
                bat 'npm install'
            }
        }
        stage('build') {
            steps {
                bat 'npm run build'
            }
        }
        // stage('test') {
        //     steps {
        //         bat 'npm run test'
        //     }
        // }
        stage('build image') {
            steps {
                bat 'docker build -t to-do-list-server:1.0 .'
            }
        }
        stage('docker push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                    bat """
                        docker login -u %DOCKERHUB_USERNAME% -p %DOCKERHUB_PASSWORD%
                        docker tag nestjs-backend:1.0 %DOCKERHUB_USERNAME%/nestjs-backend:1.0
                        docker push %DOCKERHUB_USERNAME%/nestjs-backend:1.0
                        docker logout
                    """
                }
            }
        }
    }
}