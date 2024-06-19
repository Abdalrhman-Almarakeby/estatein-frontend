import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/form/Select";
import LocationIconSVG from "@/assets/icons/location.svg?react";
import PropertyIconSVG from "@/assets/icons/property.svg?react";
import CashIconSVG from "@/assets/icons/cash.svg?react";
import CubeIconSVG from "@/assets/icons/cube.svg?react";

export function FilterForm() {
  return (
    <form className="bg-gray-10 rounded-xl border grid p-5 gap-5 sm:grid-cols-2 sm:!-mt-[20px] lg:grid-cols-4">
      <Select>
        <SelectTrigger className="bg-gray-08">
          <SelectValue
            placeholder={
              <span className="flex gap-2 text-gray-60">
                <LocationIconSVG className="[&>*]:!fill-gray-60" />
                Location
              </span>
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test1">Test1</SelectItem>
          <SelectItem value="test2">Test2</SelectItem>
          <SelectItem value="test3">Test3</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="bg-gray-08">
          <SelectValue
            placeholder={
              <span className="flex gap-2 text-gray-60">
                <PropertyIconSVG className="[&>*]:!fill-gray-60" />
                Property Type
              </span>
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test1">Test1</SelectItem>
          <SelectItem value="test2">Test2</SelectItem>
          <SelectItem value="test3">Test3</SelectItem>
        </SelectContent>
      </Select>{" "}
      <Select>
        <SelectTrigger className="bg-gray-08">
          <SelectValue
            placeholder={
              <span className="flex gap-2 text-gray-60">
                <CashIconSVG className="[&>*]:!fill-gray-60" />
                Pricing Range
              </span>
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test1">Test1</SelectItem>
          <SelectItem value="test2">Test2</SelectItem>
          <SelectItem value="test3">Test3</SelectItem>
        </SelectContent>
      </Select>{" "}
      <Select>
        <SelectTrigger className="bg-gray-08">
          <SelectValue
            placeholder={
              <span className="flex gap-2 text-gray-60">
                <CubeIconSVG className="[&>*]:!fill-gray-60" />
                Property Size
              </span>
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test1">Test1</SelectItem>
          <SelectItem value="test2">Test2</SelectItem>
          <SelectItem value="test3">Test3</SelectItem>
        </SelectContent>
      </Select>{" "}
      {/* <button className="btn-primary btn-sm text-base tracking-widest sm:col-span-2">Filter</button> */}
    </form>
  );
}
