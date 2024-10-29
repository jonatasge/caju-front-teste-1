import ErrorMessage from "@/presentation/atoms/ErrorMessage";
import Input from "@/presentation/atoms/Input";

type Props = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<unknown>;

const TextField = ({ error, ...props }: Props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <Input {...props} />
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};

export default TextField;
