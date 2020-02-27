const ActionSuccess = <T>(
    data,
    message = null,
    error = null,
  ): ApiResponse<T> => {
    return {
      statusCode: 200,
      body: {
        data,
        error,
        message,
      },
    };
  };
  
  const ActionFailValidation = <T>(
    data,
    message = null,
    error = null,
  ): ApiResponse<T> => {
    return {
      statusCode: 400,
      body: {
        data,
        error,
        message,
      },
    };
  };
  
  const ActionError = <T>(
    data: any = null,
    message = 'Sorry Something went wrong. Please try again or contact system administrator',
    error = 'ERROR',
  ): ApiResponse<T> => {
    return {
      statusCode: 500,
      body: {
        data,
        error,
        message,
      },
    };
  };
  
interface ApiResponse<T> {
    statusCode: number;
    body: {
      data?: T;
      message: string;
      error: string;
    };
  }
  
  export default {
    ActionSuccess,
    ActionFailValidation,
    ActionError,
  };
  