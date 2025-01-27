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
import { Role } from "@/types/industry";
import { useState } from "react";

interface RoleSelectorProps {
  selectedRole: string;
  availableRoles: Role[];
  onRoleSelect: (value: string) => void;
}

export const RoleSelector = ({
  selectedRole,
  availableRoles = [],
  onRoleSelect,
}: RoleSelectorProps) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const filteredRoles = availableRoles.filter((role) =>
    role?.title?.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-right"
        >
          {selectedRole || "בחר תפקיד"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command dir="rtl">
          <CommandInput 
            placeholder="חפש תפקיד..." 
            value={searchValue}
            onValueChange={setSearchValue}
          />
          <CommandGroup>
            {filteredRoles.length === 0 ? (
              <CommandEmpty>לא נמצאו תוצאות</CommandEmpty>
            ) : (
              filteredRoles.map((role) => (
                role?.title && (
                  <CommandItem
                    key={role.title}
                    value={role.title}
                    onSelect={(currentValue) => {
                      onRoleSelect(currentValue);
                      setOpen(false);
                      setSearchValue("");
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
                )
              ))
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};