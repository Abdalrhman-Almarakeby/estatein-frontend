import { Control, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/form/Select";
import { FILTERING_DATA } from "@/constant/filtersData";
import { PropertiesFilters } from "@/lib/schemas/propertiesFiltersSchema";

type FilterFormProps = { control: Control<PropertiesFilters> };

export function FilterForm({ control }: FilterFormProps) {
  return (
    <form className="bg-gray-10 rounded-xl border grid p-5 gap-5 sm:grid-cols-2 sm:!-mt-[20px] lg:grid-cols-4">
      {FILTERING_DATA.map(({ Icon, name, options }) => (
        <Controller
          key={name}
          name={name}
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger ref={field.ref} className="bg-gray-08">
                <SelectValue
                  placeholder={
                    <span className="flex gap-2 text-gray-60">
                      <Icon className="[&>*]:!fill-gray-60" />
                      {name}
                    </span>
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {options.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      ))}
    </form>
  );
}
