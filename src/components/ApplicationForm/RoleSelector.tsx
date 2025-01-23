import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Role } from "@/data/skillsData";

interface RoleSelectorProps {
  selectedRole: string;
  availableRoles: Role[];
  onRoleSelect: (value: string) => void;
}

export const RoleSelector = ({
  selectedRole,
  availableRoles,
  onRoleSelect,
}: RoleSelectorProps) => {
  const filterItems = (value: string, items: Role[]) => {
    const searchValue = value.toLowerCase().slice(0, 2); // Only use first two characters
    return items.filter((item) =>
      item.title.toLowerCase().slice(0, 2).includes(searchValue)
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={true}
          className="w-full justify-between text-right"
        >
          {selectedRole || "בחר תפקיד"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command dir="rtl" shouldFilter={false}>
          <CommandInput placeholder="חפש תפקיד..." />
          <CommandEmpty>לא נמצאו תוצאות</CommandEmpty>
          <CommandGroup className="max-h-[300px] overflow-auto">
            {availableRoles.map((role) => (
              <CommandItem
                key={role.title}
                value={role.title}
                onSelect={(currentValue) => {
                  onRoleSelect(currentValue);
                }}
                className="text-right"
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedRole === role.title ? "opacity-100" : "opacity-0"
                  )}
                />
                {role.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};