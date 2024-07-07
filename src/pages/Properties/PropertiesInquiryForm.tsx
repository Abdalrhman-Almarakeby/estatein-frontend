import { HashLink } from "react-router-hash-link";
import { Controller } from "react-hook-form";
import { Section, SectionTitle } from "@/components/ui/Section";
import { Input } from "@/components/form/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/form/Select";
import { Textarea } from "@/components/form/Textarea";
import { Checkbox } from "@/components/form/Checkbox";
import {
  LOCATION_OPTIONS,
  PRICING_RANGE_OPTIONS,
  PROPERTY_SIZE_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
} from "@/constant/filtersData";
import { formatWithComma } from "@/lib/utils/string";
import { usePropertiesInquiryForm } from "./usePropertiesInquiryForm";

export function PropertiesInquiryForm() {
  const { register, errors, onSubmit, control } = usePropertiesInquiryForm();

  function formatPropertySize(input: string) {
    const [min, max] = input.split("-").map((element) => formatWithComma(+element));
    return max ? `${min}m² - ${max}m²` : `${min}m²`;
  }

  function formatPricingRange(input: string) {
    const [min, max] = input.split("-").map((element) => formatWithComma(+element));
    return max ? `${min}$ - ${max}$` : `${min}$`;
  }

  return (
    <Section id="contact">
      <SectionTitle
        title="Let's Make it Happen"
        paragraph="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
      />
      <form
        onSubmit={onSubmit}
        className="grid gap-5 rounded-xl border p-5 sm:gap-6 md:grid-cols-2 lg:gap-7.5 lg:p-20 xl:grid-cols-3 2xl:grid-cols-4 3xl:gap-12.5 3xl:p-24"
      >
        <div className="space-y-2.5 lg:space-y-4">
          <label className="lg:text-lg 3xl:text-xl" htmlFor="first-name">
            First Name
          </label>
          <Input {...register("firstName")} id="first-name" placeholder="Enter Your First Name" />
          {errors.firstName && (
            <p className="!mt-1 text-sm text-red-500 2xl:text-base">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-2.5 lg:space-y-4">
          <label className="lg:text-lg 3xl:text-xl" htmlFor="last-name">
            Last Name
          </label>
          <Input {...register("lastName")} id="last-name" placeholder="Enter Your Last Name" />
          {errors.lastName && (
            <p className="!mt-1 text-sm text-red-500 2xl:text-base">{errors.lastName.message}</p>
          )}
        </div>
        <div className="space-y-2.5 lg:space-y-4">
          <label className="lg:text-lg 3xl:text-xl" htmlFor="email">
            Email
          </label>
          <Input {...register("email")} id="email" placeholder="Enter Your Email" />
          {errors.email && (
            <p className="!mt-1 text-sm text-red-500 2xl:text-base">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2.5 lg:space-y-4">
          <label className="lg:text-lg 3xl:text-xl" htmlFor="phone">
            Phone
          </label>
          <Input {...register("phone")} id="phone" placeholder="Enter Your Phone Number" />
          {errors.phone && (
            <p className="!mt-1 text-sm text-red-500 2xl:text-base">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-2.5 lg:space-y-4">
          <label className="lg:text-lg 3xl:text-xl" htmlFor="preferred-location">
            Preferred Location
          </label>
          <Controller
            name="preferredLocation"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="preferred-location" ref={field.ref}>
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  {LOCATION_OPTIONS.map((option) => (
                    <SelectItem value={option} key={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          {errors.preferredLocation && (
            <p className="!mt-1 text-sm text-red-500 2xl:text-base">
              {errors.preferredLocation.message}
            </p>
          )}
        </div>
        <div className="space-y-2.5 lg:space-y-4">
          <label className="lg:text-lg 3xl:text-xl" htmlFor="property-type">
            Property Type
          </label>
          <Controller
            name="propertyType"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="property-type" ref={field.ref}>
                  <SelectValue placeholder="Select Property Type" />
                </SelectTrigger>
                <SelectContent>
                  {PROPERTY_TYPE_OPTIONS.map((option) => (
                    <SelectItem value={option} key={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          {errors.propertyType && (
            <p className="!mt-1 text-sm text-red-500 2xl:text-base">
              {errors.propertyType.message}
            </p>
          )}
        </div>
        <div className="space-y-2.5 lg:space-y-4">
          <label className="lg:text-lg 3xl:text-xl" htmlFor="property-size">
            Property Size
          </label>
          <Controller
            name="propertySize"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="property-size" ref={field.ref}>
                  <SelectValue placeholder="Select Property Size" />
                </SelectTrigger>
                <SelectContent>
                  {PROPERTY_SIZE_OPTIONS.map((option) => (
                    <SelectItem value={option} key={option}>
                      {formatPropertySize(option)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          {errors.propertySize && (
            <p className="!mt-1 text-sm text-red-500 2xl:text-base">
              {errors.propertySize.message}
            </p>
          )}
        </div>
        <div className="space-y-2.5 lg:space-y-4">
          <label className="lg:text-lg 3xl:text-xl" htmlFor="num-of-bathrooms">
            No. of Bathrooms
          </label>
          <Controller
            name="numOfBathrooms"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="num-of-bathrooms" ref={field.ref}>
                  <SelectValue placeholder="Select No. of Bathrooms" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SelectItem value={(i + 1).toString()} key={i}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          {errors.numOfBathrooms && (
            <p className="!mt-1 text-sm text-red-500 2xl:text-base">
              {errors.numOfBathrooms.message}
            </p>
          )}
        </div>

        <div className="space-y-2.5 lg:space-y-4">
          <label className="lg:text-lg 3xl:text-xl" htmlFor="num-of-rooms">
            No. of Rooms
          </label>
          <Controller
            name="numOfRooms"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="num-of-rooms" ref={field.ref}>
                  <SelectValue placeholder="Select No. of Rooms" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <SelectItem value={(i + 1).toString()} key={i}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          {errors.numOfRooms && (
            <p className="!mt-1 text-sm text-red-500 2xl:text-base">{errors.numOfRooms.message}</p>
          )}
        </div>
        <div className="space-y-2.5 lg:space-y-4">
          <label className="lg:text-lg 3xl:text-xl" htmlFor="contact-method">
            Preferred Contact Method
          </label>
          <Controller
            name="preferredContactMethod"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="contact-method" ref={field.ref}>
                  <SelectValue placeholder="Select Preferred Contact Method" />
                </SelectTrigger>
                <SelectContent>
                  {["email", "phone"].map((element) => (
                    <SelectItem value={element} key={element}>
                      {element}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          {errors.preferredContactMethod && (
            <p className="!mt-1 text-sm text-red-500 2xl:text-base">
              {errors.preferredContactMethod.message}
            </p>
          )}
        </div>
        <div className="space-y-2.5 lg:space-y-4 md:col-span-2 xl:col-span-1 2xl:col-span-2">
          <label className="lg:text-lg 3xl:text-xl" htmlFor="budget">
            Budget
          </label>
          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="budget" ref={field.ref}>
                  <SelectValue placeholder="Select Budget" />
                </SelectTrigger>
                <SelectContent>
                  {PRICING_RANGE_OPTIONS.map((option) => (
                    <SelectItem value={option} key={option}>
                      {formatPricingRange(option)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          {errors.budget && (
            <p className="!mt-1 text-sm text-red-500 2xl:text-base">{errors.budget.message}</p>
          )}
        </div>
        <div className="space-y-2.5 md:col-span-2 lg:space-y-4 xl:col-span-3 2xl:col-span-4">
          <label className="lg:text-lg 3xl:text-xl" htmlFor="message">
            Message
          </label>
          <Textarea {...register("message")} id="message" placeholder="Enter your message here" />
          {errors.message && (
            <p className="!mt-1 text-sm text-red-500 2xl:text-base">{errors.message.message}</p>
          )}
        </div>

        <div className="mt-2.5 flex flex-col gap-5 md:col-span-2 lg:flex-row lg:justify-between xl:col-span-3">
          <div>
            <div className="flex items-center gap-2">
              <Checkbox {...register("agreeOnTerms")} id="agree-on-terms" />
              <label htmlFor="agree-on-terms" className="text-primary">
                I agree with<>&nbsp;</>
                <HashLink to="/" className="underline">
                  Terms of Use
                </HashLink>
                <>&nbsp;</>
                and<>&nbsp;</>
                <HashLink to="/" className="underline">
                  Privacy Policy
                </HashLink>
              </label>
            </div>
            {errors.agreeOnTerms && (
              <p className="!mt-1 text-sm text-red-500 2xl:text-base">
                {errors.agreeOnTerms.message}
              </p>
            )}
          </div>
          <button type="submit" className="btn-primary btn-sm 3xl:btn-lg">
            Send Your Message
          </button>
        </div>
      </form>
    </Section>
  );
}
