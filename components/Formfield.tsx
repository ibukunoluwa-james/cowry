"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues>{
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'file'
}

const Formfield = ({ control, name, label, placeholder, type="text" }: FormFieldProps<T>) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormItem className="">
            <FormLabel className="invisible peer-focus:visible transition-opacity duration-200 label">{label}</FormLabel>
            {/* Edit the label class to fit my design */}
            <FormControl>
              <Input placeholder={placeholder} {...field} className="h-15 placeholder:text-[17px] rounded-[5px] placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
              {/* edit the class to fit my design */}
            </FormControl>
            {/* <FormDescription>{name}</FormDescription> */}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default Formfield;
