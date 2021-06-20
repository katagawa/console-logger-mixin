/* test/index.spec.js */
/* globals describe, expect, it */

describe('ConsoleLoggerMixin', () => {
  const A = require('../index')

  describe('#error', () => {
    it('should throw a TypeError', () => {
      const m = {}

      m.foo = m

      expect(() => A.error(m)).toThrow(TypeError)
    })

    it('should successfully execute', () => {
      const err = new Error()
      let actual

      A.logger = {
        error (o) {
          actual = o
        }
      }

      A.error(err)
      expect(JSON.parse(actual).message).toEqual(err.stack)
    })

    it('should successfully execute', () => {
      const err = new Error()
      let actual

      A.logger = {
        error (o) {
          actual = o
        }
      }

      delete err.stack
      A.error(err)
      expect(JSON.parse(actual).message).toEqual('Error')
    })

    it('should successfully execute', () => {
      const err = new Error('foo')
      let actual

      A.logger = {
        error (o) {
          actual = o
        }
      }

      delete err.stack
      A.error(err)
      expect(JSON.parse(actual).message).toEqual('Error: foo')
    })

    it('should successfully execute', () => {
      let actual

      A.logger = {
        error (o) {
          actual = o
        }
      }

      A.error('1')
      expect(JSON.parse(actual).message).toEqual('1')
    })
  })

  describe('#info', () => {
    it('should throw a TypeError', () => {
      const m = {}

      m.foo = m

      expect(() => A.info(m)).toThrow(TypeError)
    })

    it('should successfully execute', () => {
      const err = new Error()
      let actual

      A.logger = {
        info (o) {
          actual = o
        }
      }

      A.info(err)
      expect(JSON.parse(actual).message).toEqual(err.stack)
    })

    it('should successfully execute', () => {
      const err = new Error()
      let actual

      A.logger = {
        info (o) {
          actual = o
        }
      }

      delete err.stack
      A.info(err)
      expect(JSON.parse(actual).message).toEqual('Error')
    })

    it('should successfully execute', () => {
      const err = new Error('foo')
      let actual

      A.logger = {
        info (o) {
          actual = o
        }
      }

      delete err.stack
      A.info(err)
      expect(JSON.parse(actual).message).toEqual('Error: foo')
    })

    it('should successfully execute', () => {
      let actual

      A.logger = {
        info (o) {
          actual = o
        }
      }

      A.info('1')
      expect(JSON.parse(actual).message).toEqual('1')
    })
  })

  describe('#warn', () => {
    it('should throw a TypeError', () => {
      const m = {}

      m.foo = m

      expect(() => A.warn(m)).toThrow(TypeError)
    })

    it('should successfully execute', () => {
      const err = new Error()
      let actual

      A.logger = {
        warn (o) {
          actual = o
        }
      }

      A.warn(err)
      expect(JSON.parse(actual).message).toEqual(err.stack)
    })

    it('should successfully execute', () => {
      const err = new Error()
      let actual

      A.logger = {
        warn (o) {
          actual = o
        }
      }

      delete err.stack
      A.warn(err)
      expect(JSON.parse(actual).message).toEqual('Error')
    })

    it('should successfully execute', () => {
      const err = new Error('foo')
      let actual

      A.logger = {
        warn (o) {
          actual = o
        }
      }

      delete err.stack
      A.warn(err)
      expect(JSON.parse(actual).message).toEqual('Error: foo')
    })

    it('should successfully execute', () => {
      let actual

      A.logger = {
        warn (o) {
          actual = o
        }
      }

      A.warn('1')
      expect(JSON.parse(actual).message).toEqual('1')
    })
  })
})
