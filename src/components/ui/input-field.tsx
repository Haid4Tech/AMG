import { Input } from "./input";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export const InputField = ({ label, required, ...props }: InputFieldProps) => {
  return (
    <div>
      <label>
        {label}
        {required && <span>*</span>}
      </label>
      <Input {...props} />
    </div>
  );
};
