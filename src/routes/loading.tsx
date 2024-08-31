import { Spinner } from "@/components/spinner";

export const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-spinner">
        <Spinner />
      </div>
    </div>
  );
};
