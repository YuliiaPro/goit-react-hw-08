import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import { selectError, selectLoading } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";
import ErrorLoginMessage from "../../components/ErrorLoginMessage/ErrorLoginMessage";

export default function LoginPage() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
      {isLoading && <Loader />}
      {isError && <ErrorLoginMessage />}
    </div>
  );
}
