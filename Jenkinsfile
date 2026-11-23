pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Test Express') {
            steps {
                sh '''
                    node --check app.js
                    node -e "const p = require('./package.json'); if (!p.dependencies || !p.dependencies.express) process.exit(1)"
                '''
            }
        }
    }

    post {
        success {
            echo 'Express CI Pipeline Successful!'
        }
        failure {
            echo 'Express CI Pipeline Failed!'
        }
    }
}
