import ErrorMessage from "@/components/atoms/ErrorMessage";
import Input from "@/components/atoms/Input";

type Props = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<unknown>;

const TextField = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <Input {...props} />
      <ErrorMessage>{props.error}</ErrorMessage>
    </div>
  );
};

export default TextField;
