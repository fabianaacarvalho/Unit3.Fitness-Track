import { useParams, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";

export default function ActivityDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${id}`, `activity-${id}`);

  const {
    mutate: deleteActivity,
    loading: deleteLoading,
    error: deleteError,
  } = useMutation("DELETE", `/activities/${id}`, ["activities"], {
    onSuccess: () => navigate("/activities"),
  });

  if (loading || !activity) return <p>Loading...</p>;
  if (error) return <p>Error loading activity: {error}</p>;

  return (
    <>
      <h1>{activity.name}</h1>
      <p>Created by: {activity.creatorName}</p>
      <p>Description: {activity.description}</p>
      {token && (
        <button onClick={() => deleteActivity()}>
          {loading ? "Deleting" : error ? error : "Delete"}
        </button>
      )}
    </>
  );
}
