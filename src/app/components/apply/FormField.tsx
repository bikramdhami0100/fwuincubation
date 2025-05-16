// components/apply/FormField.tsx
import { UseFormRegister, FieldError, Path } from 'react-hook-form';

interface FormValues {
  applicantName: string;
  email: string;
  phone: string;
  teamMembers: { name: string; role: string }[];
  startupIdea: string;
  proposalFile?: FileList;
}

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

interface FormFieldProps<T extends InputProps | TextareaProps> {
  type: T extends InputProps ? React.HTMLInputTypeAttribute : 'textarea';
  name: Path<FormValues>; // Strongly typed name
  label: string;
  register: UseFormRegister<FormValues>;
  error?: FieldError;
  placeholder?: string;
  isRequired?: boolean;
  className?: string;
  as?: 'input' | 'textarea';
  rows?: number; // for textarea
  accept?: string; // for file input
}

const FormField = <T extends InputProps | TextareaProps>({
  type,
  name,
  label,
  register,
  error,
  placeholder,
  isRequired = false,
  className = '',
  as = 'input',
  rows,
  accept,
}: FormFieldProps<T>) => {
  const commonProps = {
    id: name,
    placeholder,
    className: `w-full px-4 py-3 border ${
      error ? 'border-red-500' : 'border-gray-300'
    } rounded-lg focus:ring-2 ${
      error ? 'focus:ring-red-300' : 'focus:ring-brand-primary'
    } focus:border-transparent outline-none transition-colors ${className}`,
    ...register(name), // Spread the result of register
  };

  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      {as === 'textarea' ? (
        <textarea {...commonProps} rows={rows} />
      ) : (
        <input type={type} {...commonProps} accept={accept} />
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default FormField;