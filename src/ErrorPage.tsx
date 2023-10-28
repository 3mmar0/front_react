import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="grid place-items-center w-full h-full p-4">
      <div className="flex">
        <p>
          {isRouteErrorResponse(error) ? (
            <i>
              {error?.status} {error?.statusText}
            </i>
          ) : (
            <i>
              {(error instanceof Error && error?.message) || "Unknown Error"}
            </i>
          )}
        </p>
        <span className="w-[1px] h-8 bg-slate-700 mx-4 my-auto"></span>
        <div className="flex gap-1  justify-center">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occured.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
