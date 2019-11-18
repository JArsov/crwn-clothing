import { FormEvent, useState } from "react";

export default function useFormInput<T>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  function handleChange(event: FormEvent<HTMLInputElement>) {
    const unknownValue = event.currentTarget.value as unknown;
    setValue(unknownValue as T);
  }

  return {
    value,
    setValue,
    handleChange
  };
}
