import { HTMLInputTypeAttribute } from "react";

interface Props {
  title: string;
  value: string;
  setValue: (value: string) => void;
  isRequired?: boolean;
  type?: HTMLInputTypeAttribute;
  isTextarea?: boolean;
  error?: string | null;
}

const Input: React.FC<Props> = ({
  title,
  value,
  setValue,
  isRequired = true,
  type = "text",
  isTextarea = false,
  error
}) => {
  if (isTextarea) {
    return (
      <div className={`input-wrapper input-textarea`}>
        <div className="input-header">
          <p className="input-label">
            {title} {isRequired && <span>(required)</span>}
          </p>
          {error && <p className="input-label__error">{error}</p>}
        </div>
        <textarea
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setValue(e.target.value)
          }
          className={`input-input ${error && "input-error"}`}
        />
      </div>
    );
  }

  return (
    <div className="input-wrapper">
      <div className="input-header">
        <p className="input-label">
          {title} {isRequired && <span>(required)</span>}
        </p>
        {error && <p className="input-label__error">{error}</p>}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        className={`input-input ${error && "input-error"}`}
      />
    </div>
  );
};

export default Input;
