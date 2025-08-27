import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@/components/ui/select";
import { ChevronDownIcon } from "@/components/ui/icon";

export default function SelectComponent() {
  const options = [
    { label: "UX Research", value: "ux" },
    { label: "Web Development", value: "web" },
    { label: "Cross Platform Development Process", value: "cross-platform" },
    { label: "UI Designing", value: "ui" },
    { label: "Backend Development", value: "backend" },
  ];

  return (
    <Select>
      <SelectTrigger
        className="rounded-full"
        style={{ justifyContent: "space-between" }}
        variant="outline"
        size="md"
      >
        <SelectInput placeholder="Select option" />

        <SelectIcon className="mr-3" as={ChevronDownIcon} />
      </SelectTrigger>

      <SelectPortal>
        <SelectBackdrop />

        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>

          {options.map((option) => (
            <SelectItem
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
