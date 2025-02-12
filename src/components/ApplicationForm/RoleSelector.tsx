import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Role } from "@/types/industry";

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

  // Ensure we have a valid array to work with
  const safeRoles = Array.isArray(availableRoles) ? availableRoles : [];
  
  // Filter roles based on search value
  const filteredRoles = safeRoles.filter((role) => {
    if (!role?.title || !searchValue) return true;
    return role.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  const displayValue = selectedRole || (safeRoles.length === 0 ? "ערך חסר-פנה למנהלן המערכת להוספה" : "בחר תפקיד");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-right"
          disabled={safeRoles.length === 0}
        >
          {displayValue}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command dir="rtl" className="bg-slate-900">
          <CommandInput 
            placeholder="חפש תפקיד..." 
            value={searchValue}
            onValueChange={setSearchValue}
            className="text-right bg-slate-800"
          />
          <CommandList className="bg-slate-900">
            <CommandGroup>
              {filteredRoles.length === 0 ? (
                <CommandEmpty className="text-right text-slate-200">לא נמצאו תוצאות</CommandEmpty>
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
                      className="text-right text-slate-200 hover:bg-slate-800"
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
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};