#!/bin/sh
SCRIPT_DIR=$(dirname "$0")
GRADLE_WRAPPER="${SCRIPT_DIR}/gradle/wrapper/gradle-wrapper.jar"
CLASSPATH="${GRADLE_WRAPPER}"
exec java -classpath "$CLASSPATH" org.gradle.wrapper.GradleWrapperMain "$@"
