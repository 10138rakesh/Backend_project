class ApiError extends Error {

    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {

        super(message)

        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if (stack) {

            this.stack = stack

        } else {

            Error.captureStackTrace(this, this.constructor)

        }

    }

}

export { ApiError }


//this is a custom error class that extends the built-in Error class in JavaScript. It is designed to represent API errors and includes additional properties such as statusCode, data, message, success, and errors. The constructor takes in these parameters and initializes the properties accordingly. The stack trace is captured using Error.captureStackTrace if a stack is not provided.