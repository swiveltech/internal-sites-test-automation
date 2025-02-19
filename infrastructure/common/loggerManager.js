import log4js from "log4js";

export default {
  /* this will create log4js loggers
   * to a file, console 
   */
  createLog: function () {
    log4js.configure({
      appenders: {
        console: { type: "console" },
        file: {
          type: "file",
          filename: "logs/app.log",
          layout: { type: "basic" },
        },
             },
      categories: {
        default: { appenders: ["console", "file"], level: "info" },
      },
    });

    const logger = log4js.getLogger();
    global.logger = logger; // Make the logger accessible globally

  },

  /* info type logger
   * @message - logger message
   */
  logInfo: function (message) {
    const logger = log4js.getLogger("default");
    logger.info(message);
  },

  /* debug type logger
   * @message - logger message
   */
  logDebug: function (message) {
    const logger = log4js.getLogger("default");
    logger.debug(message);
  },

  /* error type logger
   * @message - logger message
   */
  logError: function (message) {
    const logger = log4js.getLogger("default");
    logger.error(message);
  },

  /* warn type logger
   * @message - logger message
   */
  logWarn: function (message) {
    const logger = log4js.getLogger("default");
    logger.warn(message);
  },
};
