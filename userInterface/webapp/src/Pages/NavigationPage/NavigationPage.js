import React from "react";
import { Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  Button, 
  Avatar, 
  DropdownItem, 
  DropdownMenu, 
  Dropdown, 
  DropdownTrigger } from "@nextui-org/react";


function NavigationPage() {
  return (
    <main className="dark text-foreground bg-background">
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">MY TODO TRACKER</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="create">
              Add Todo
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="foreground" aria-current="page">
              Todo list
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarContent as="div" justify="end">
            <Dropdown placement="bottom-end" className="dark text-foreground bg-background">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </NavbarContent>
      </Navbar>
    </main>
  )
}

export default NavigationPage