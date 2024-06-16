import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../..//components/RegistrationForm/RegistrationForm";
import Loader from "../../components/Loader/Loader";
import ErrorLoginMessage from "../../components/ErrorLoginMessage/ErrorLoginMessage";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/auth/selectors";

export default function RegisterPage() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  return (
    <div>
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
      {isLoading && <Loader />}
      {isError && <ErrorLoginMessage />}
    </div>
  );
}
