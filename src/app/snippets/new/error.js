'use client';

const ErrorPage = ({error}) => {
    return <div>
        {error.message}
    </div>
}

export default ErrorPage;