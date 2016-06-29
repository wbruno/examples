#!/bin/sh

### BEGIN INIT INFO
# Provides:          nodejs init script
# Required-Start:    forever node module
# X-Interactive:     true
# Short-Description: application initscript
# Description:       Uses forever module to running the application
### END INIT INFO

NODE_ENV="{{ enviroment }}"
PORT="3002"
APP_DIR="/var/{{ application }}/dist/server"
NODE_APP="bin/www"
CONFIG_DIR="$APP_DIR/config"
LOG_DIR="/var/log/{{ application }}"
LOG_FILE="$LOG_DIR/app.log"
NODE_EXEC="forever"

###############

USAGE="Usage: $0 {start|stop|restart|status}"

start_app() {
  mkdir -p "$LOG_DIR"

  echo "Starting node app ..."
  PORT="$PORT" NODE_ENV="$NODE_ENV" NODE_CONFIG_DIR="$CONFIG_DIR" forever start "$APP_DIR/$NODE_APP" 1>"$LOG_FILE" 2>&1 &
}
stop_app() {
  forever stop "$APP_DIR/$NODE_APP"
}
status_app() {
  forever list
}
restart_app() {
  forever restart "$APP_DIR/$NODE_APP"
}

case "$1" in
  start)
    start_app
  ;;
  stop)
    stop_app
  ;;
  restart)
    restart_app
  ;;
  status)
    status_app
  ;;
  *)
    echo $USAGE
    exit 1
  ;;
esac
