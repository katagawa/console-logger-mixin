/*!
 * console-logger-mixin, Copyright (c) 2021 <katagawa@gmail.com>
 * https://github.com/katagawa/console-logger-mixin/blob/master/LICENSE
 */
/* index.js */
/* globals define, module, self */

(function (root, factory) {
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.ConsoleLoggerMixin = factory()
  }
}(typeof self !== 'undefined' ? self : this, function () {
  /**
   * @class ConsoleLoggerMixin
   * @constructor
   */
  function ConsoleLoggerMixin () {
  }

  /**
   * `JSON.stringify()` a `message`, then pass it to `console.error()`. If
   * `message` is an instance of `Error`:
   * * the value of the `.stack` property will be logged instead of `message`,
   *   if it exists
   * * the concatentation `.name: .message` will be logged instead of `message`,
   *   if `.stack` is undefined, and the `.message` property is not empty
   * * the value of `.name` will be logged instead of `message` if `.stack` is
   *   undefined, and `.message` is empty
   * @param {*} [message] A message to log
   * @static
   * @throws {TypeError} if `message` can not be `JSON.stringify()`'ed
   */
  ConsoleLoggerMixin.error = function (message) {
    ConsoleLoggerMixin.logger.error(JSON.stringify({
      level: 'error',
      message: ConsoleLoggerMixin.fmt(message),
      timestamp: ConsoleLoggerMixin.timestamp()
    }))
  }

  /**
   * @param {*} [message] The message to conditionally format
   * @private
   * @returns {*}
   * @static
   */
  ConsoleLoggerMixin.fmt = function (message) {
    if (message instanceof Error) {
      if (message.stack) {
        return message.stack
      }

      if (
        ((typeof message.message) === 'string') &&
        (message.message.trim() !== '')
      ) {
        return `${message.name}: ${message.message}`
      }

      return message.name
    }

    return message
  }

  /**
   * `JSON.stringify()` a `message`, then pass it to `console.info()`. If
   * `message` is an instance of `Error`:
   * * the value of the `.stack` property will be logged instead of `message`,
   *   if it exists
   * * the concatentation `.name: .message` will be logged instead of `message`,
   *   if `.stack` is undefined, and the `.message` property is not empty
   * * the value of `.name` will be logged instead of `message` if `.stack` is
   *   undefined, and `.message` is empty
   * @param {*} [message] A message to log
   * @static
   * @throws {TypeError} if `message` can not be `JSON.stringify()`'ed
   */
  ConsoleLoggerMixin.info = function (message) {
    ConsoleLoggerMixin.logger.info(JSON.stringify({
      level: 'info',
      message: ConsoleLoggerMixin.fmt(message),
      timestamp: ConsoleLoggerMixin.timestamp()
    }))
  }

  /**
   * @private
   * @static
   * @returns {string}
   */
  ConsoleLoggerMixin.timestamp = function () {
    return (new Date()).toISOString()
  }

  /**
   * `JSON.stringify()` a `message`, then pass it to `console.warn()`. If
   * `message` is an instance of `Error`:
   * * the value of the `.stack` property will be logged instead of `message`,
   *   if it exists
   * * the concatentation `.name: .message` will be logged instead of `message`,
   *   if `.stack` is undefined, and the `.message` property is not empty
   * * the value of `.name` will be logged instead of `message` if `.stack` is
   *   undefined, and `.message` is empty
   * @param {*} [message] A message to log
   * @static
   * @throws {TypeError} if `message` can not be `JSON.stringify()`'ed
   */
  ConsoleLoggerMixin.warn = function (message) {
    ConsoleLoggerMixin.logger.warn(JSON.stringify({
      level: 'warn',
      message: ConsoleLoggerMixin.fmt(message),
      timestamp: ConsoleLoggerMixin.timestamp()
    }))
  }

  /** @private */
  ConsoleLoggerMixin.logger = console

  return ConsoleLoggerMixin
}))
