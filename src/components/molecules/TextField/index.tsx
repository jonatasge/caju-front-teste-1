import { InputHTMLAttributes } from "react";

import ErrorMessage from "@/components/atoms/ErrorMessage";
import Input from "@/components/atoms/Input";

type Props = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<any>;

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
