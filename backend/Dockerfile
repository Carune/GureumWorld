# 1. Gradle 실행을 위해 필요한 패키지가 포함된 JDK 이미지 사용
FROM gradle:7-jdk17 AS build
WORKDIR /app
COPY . .
RUN gradle clean build -x test

# 2. 실행 환경
FROM openjdk:17
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]